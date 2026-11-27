#!/usr/bin/env python3
"""Đọc danh sách ảnh trong các thư mục Google Drive công khai và ghi ra images.json.

Website đọc file này để biết ID của từng ảnh trên Drive, rồi nhúng ảnh qua
https://lh3.googleusercontent.com/d/<id>. Thay ảnh trên Drive → lần đồng bộ sau
(mặc định 5 phút) web tự dùng ảnh mới, không cần build lại.

Dùng trang embeddedfolderview công khai của Drive nên không cần API key.
Thư mục phải được chia sẻ "Bất kỳ ai có đường liên kết".

  python3 sync.py <file-json-đầu-ra> [--loop GIÂY]
  Biến môi trường DRIVE_FOLDERS: các ID thư mục gốc, cách nhau bằng dấu phẩy.
"""
import html
import json
import os
import re
import sys
import time
import urllib.request
from datetime import datetime, timezone

IMAGE_EXT = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.heic', '.heif'}
MAX_DEPTH = 4
FILE_RE = re.compile(r'/file/d/([\w-]+)/view.*?flip-entry-title">([^<]*)<', re.S)
FOLDER_RE = re.compile(r'/drive/folders/([\w-]+)"[^>]*>.*?flip-entry-title">([^<]*)<', re.S)
TITLE_RE = re.compile(r'<title>([^<]*)</title>')


def fetch(folder_id):
    url = f'https://drive.google.com/embeddedfolderview?id={folder_id}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (drive-sync)'})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode('utf-8', 'replace')


def crawl(folder_id, path, depth, out, seen):
    if folder_id in seen or depth > MAX_DEPTH:
        return
    seen.add(folder_id)
    page = fetch(folder_id)
    if depth == 0:
        m = TITLE_RE.search(page)
        path = html.unescape(m.group(1)).strip() if m else folder_id
    for fid, name in FILE_RE.findall(page):
        name = html.unescape(name).strip()
        if os.path.splitext(name)[1].lower() in IMAGE_EXT:
            out.append({'id': fid, 'name': name, 'path': path})
    for sub_id, sub_name in FOLDER_RE.findall(page):
        crawl(sub_id, f'{path}/{html.unescape(sub_name).strip()}', depth + 1, out, seen)


def sync(dest, folders):
    files, seen = [], set()
    for fid in folders:
        crawl(fid, '', 0, files, seen)
    data = {'updatedAt': datetime.now(timezone.utc).isoformat(timespec='seconds'), 'files': files}
    os.makedirs(os.path.dirname(os.path.abspath(dest)), exist_ok=True)
    tmp = dest + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    os.replace(tmp, dest)
    print(f'[drive-sync] {data["updatedAt"]} {len(files)} ảnh → {dest}', flush=True)


def main():
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    dest = args[0]
    interval = int(args[args.index('--loop') + 1]) if '--loop' in args else 0
    folders = [f.strip() for f in os.environ.get('DRIVE_FOLDERS', '').split(',') if f.strip()]
    if not folders:
        sys.exit('Thiếu biến môi trường DRIVE_FOLDERS')
    while True:
        try:
            sync(dest, folders)
        except Exception as e:  # giữ file cũ nếu Drive lỗi tạm thời
            print(f'[drive-sync] lỗi: {e}', file=sys.stderr, flush=True)
            if not interval:
                sys.exit(1)
        if not interval:
            break
        time.sleep(interval)


if __name__ == '__main__':
    main()
