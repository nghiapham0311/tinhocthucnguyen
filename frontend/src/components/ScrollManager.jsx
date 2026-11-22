import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Đổi trang: cuộn lên đầu. Có #hash: cuộn tới section tương ứng (kể cả khi vừa chuyển trang). */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
