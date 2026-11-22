// Nội dung các khóa học. Thông tin chưa xác nhận (thời lượng, lịch, học phí) để "Chờ cập nhật".

const COMMON_FAQ = {
  online: {
    q: 'Có thể học online không?',
    a: 'Có. Trung tâm có hai hình thức: học tại lớp và học online. Thầy sẽ tư vấn hình thức phù hợp với lịch của bạn.',
  },
  fee: {
    q: 'Học phí và lịch học như thế nào?',
    a: 'Lịch khai giảng và học phí đang được cập nhật. Vui lòng gọi hotline hoặc để lại thông tin để được báo chi tiết.',
  },
  material: {
    q: 'Học xong có tài liệu để ôn lại không?',
    a: 'Có. Học viên được cung cấp tài liệu, bài tập và hướng dẫn để tự ôn tập sau mỗi buổi học.',
  },
};

export const COURSE_GROUPS = [
  {
    id: 'hoc-sinh',
    slug: 'tin-hoc-thieu-nhi',
    no: '01',
    tone: 'teal',
    icon: 'kid',
    image: 0,
    audience: 'Học sinh tiểu học & THCS',
    title: 'Tin học thiếu nhi',
    desc: 'Nền tảng máy tính, gõ phím và an toàn mạng. Word, PowerPoint, Canva theo lộ trình.',
    tags: ['Gõ phím', 'Canva', 'An toàn mạng'],
    cta: 'Xem khóa học sinh',
    lead: 'Giúp các em làm quen máy tính đúng cách, gõ phím chuẩn, dùng Internet an toàn và tự tạo sản phẩm của mình với Word, PowerPoint, Canva.',
    chips: ['Gõ phím', 'Word', 'PowerPoint', 'Canva'],
    forWho: [
      { icon: 'kid', title: 'Học sinh tiểu học', desc: 'Mới làm quen máy tính, cần học đúng tư thế và thao tác từ đầu.' },
      { icon: 'doc', title: 'Học sinh THCS', desc: 'Muốn củng cố môn Tin học ở trường và làm bài tập trên máy tốt hơn.' },
      { icon: 'shield', title: 'Phụ huynh', desc: 'Muốn con dùng máy tính có định hướng, an toàn và hữu ích.' },
    ],
    outcomes: [
      'Sử dụng chuột, bàn phím và sắp xếp thư mục, tệp gọn gàng',
      'Gõ phím 10 ngón đúng tư thế, gõ tiếng Việt thành thạo',
      'Nhận biết rủi ro và sử dụng Internet an toàn',
      'Soạn và trình bày văn bản với Word',
      'Làm bài thuyết trình sinh động bằng PowerPoint',
      'Thiết kế thiệp, poster đơn giản với Canva',
    ],
    curriculum: [
      {
        name: 'Lộ trình',
        modules: [
          { title: 'Làm quen máy tính', items: ['Các bộ phận của máy tính', 'Tư thế ngồi đúng', 'Sử dụng chuột và bàn phím', 'Thư mục và tệp'] },
          { title: 'Gõ phím 10 ngón', items: ['Vị trí đặt ngón tay', 'Luyện gõ theo cấp độ', 'Gõ tiếng Việt có dấu'] },
          { title: 'Kỹ năng số an toàn', items: ['Tìm kiếm thông tin đúng cách', 'Bảo vệ thông tin cá nhân', 'Ứng xử văn minh trên mạng', 'Nhận biết lừa đảo trực tuyến'] },
          { title: 'Soạn thảo với Word', items: ['Định dạng chữ và đoạn văn', 'Chèn hình ảnh, bảng', 'Thực hành: thời khóa biểu, bài văn'] },
          { title: 'Thuyết trình với PowerPoint', items: ['Bố cục slide', 'Hình ảnh và hiệu ứng vừa đủ', 'Trình bày một chủ đề trước lớp'] },
          { title: 'Sáng tạo với Canva', items: ['Làm quen công cụ thiết kế', 'Thiệp, poster, thời khóa biểu', 'Sản phẩm cuối khóa'] },
        ],
      },
    ],
    faq: [
      { q: 'Bé chưa biết dùng máy tính có học được không?', a: 'Được. Khóa học bắt đầu từ trình độ hiện tại của bé — thầy kiểm tra đầu vào để xếp lộ trình phù hợp.' },
      COMMON_FAQ.online,
      COMMON_FAQ.material,
      COMMON_FAQ.fee,
    ],
  },
  {
    id: 'sinh-vien',
    slug: 'luyen-thi-chung-chi',
    no: '02',
    tone: 'blue',
    icon: 'certificate',
    image: 1,
    audience: 'Sinh viên',
    title: 'Luyện thi chứng chỉ',
    desc: 'Ôn luyện CNTT cơ bản, nâng cao và MOS theo mục tiêu. Thực hành và giải đề.',
    tags: ['CNTT cơ bản', 'Nâng cao', 'MOS'],
    cta: 'Xem khóa chứng chỉ',
    lead: 'Ôn luyện chứng chỉ Ứng dụng CNTT cơ bản, nâng cao và MOS theo đúng mục tiêu — vững kiến thức, thạo thực hành, tự tin giải đề.',
    chips: ['CNTT cơ bản', 'CNTT nâng cao', 'MOS'],
    forWho: [
      { icon: 'certificate', title: 'Sinh viên', desc: 'Cần chứng chỉ Ứng dụng CNTT để đủ điều kiện xét tốt nghiệp.' },
      { icon: 'briefcase', title: 'Người làm hồ sơ', desc: 'Cần chứng chỉ cho hồ sơ xin việc, thi tuyển, nâng ngạch.' },
      { icon: 'check', title: 'Người muốn chứng chỉ MOS', desc: 'Muốn chứng minh kỹ năng Word, Excel, PowerPoint bằng chứng chỉ quốc tế.' },
    ],
    outcomes: [
      'Nắm vững kiến thức theo chuẩn kỹ năng sử dụng CNTT',
      'Thành thạo Word, Excel, PowerPoint theo yêu cầu đề thi',
      'Hiểu cấu trúc đề, cách phân bổ thời gian làm bài',
      'Luyện đề và sửa các lỗi thường gặp',
      'Tự tin bước vào kỳ thi',
    ],
    curriculum: [
      {
        name: 'CNTT cơ bản',
        modules: [
          { title: 'Hiểu biết về CNTT cơ bản', items: ['Phần cứng, phần mềm, mạng', 'An toàn thông tin', 'Pháp luật về CNTT'] },
          { title: 'Sử dụng máy tính cơ bản', items: ['Hệ điều hành', 'Quản lý thư mục, tệp', 'Cài đặt và gỡ phần mềm'] },
          { title: 'Xử lý văn bản cơ bản', items: ['Định dạng văn bản', 'Bảng biểu, hình ảnh', 'In ấn'] },
          { title: 'Sử dụng bảng tính cơ bản', items: ['Nhập và định dạng dữ liệu', 'Hàm cơ bản', 'Biểu đồ'] },
          { title: 'Sử dụng trình chiếu cơ bản', items: ['Tạo và định dạng slide', 'Hiệu ứng, chuyển trang', 'Trình chiếu'] },
          { title: 'Sử dụng Internet cơ bản', items: ['Trình duyệt, tìm kiếm', 'Thư điện tử', 'Dịch vụ trực tuyến'] },
        ],
      },
      {
        name: 'CNTT nâng cao',
        modules: [
          { title: 'Xử lý văn bản nâng cao', items: ['Styles, mục lục tự động', 'Trộn thư', 'Văn bản dài, nhiều phần'] },
          { title: 'Sử dụng bảng tính nâng cao', items: ['Hàm điều kiện, tra cứu', 'Lọc, tổng hợp dữ liệu', 'PivotTable'] },
          { title: 'Sử dụng trình chiếu nâng cao', items: ['Slide Master', 'Đa phương tiện', 'Thiết kế bài trình bày'] },
          { title: 'Luyện đề tổng hợp', items: ['Đề thi thử theo cấu trúc', 'Chữa đề và phân tích lỗi'] },
        ],
      },
      {
        name: 'MOS',
        modules: [
          { title: 'MOS Word', items: ['Quản lý tài liệu', 'Định dạng, bảng, tham chiếu', 'Luyện đề dạng project'] },
          { title: 'MOS Excel', items: ['Quản lý bảng tính', 'Công thức và hàm', 'Biểu đồ, bảng dữ liệu', 'Luyện đề dạng project'] },
          { title: 'MOS PowerPoint', items: ['Quản lý bài trình chiếu', 'Slide, hình ảnh, hiệu ứng', 'Luyện đề dạng project'] },
          { title: 'Thi thử trên máy', items: ['Làm quen giao diện thi', 'Canh thời gian, mẹo làm bài'] },
        ],
      },
    ],
    faq: [
      { q: 'Nên thi CNTT cơ bản, nâng cao hay MOS?', a: 'Tùy yêu cầu của trường hoặc nơi nộp hồ sơ. Hãy để lại thông tin, thầy sẽ tư vấn chứng chỉ phù hợp với mục tiêu của bạn.' },
      { q: 'Đã học tin học ở trường, có cần học lại từ đầu?', a: 'Không bắt buộc. Thầy kiểm tra đầu vào và tập trung vào phần bạn còn yếu cùng dạng đề thường gặp.' },
      COMMON_FAQ.online,
      COMMON_FAQ.fee,
    ],
  },
  {
    id: 'nguoi-di-lam',
    slug: 'tin-hoc-van-phong',
    no: '03',
    tone: 'navy',
    icon: 'briefcase',
    image: 0,
    audience: 'Người đi làm',
    title: 'Tin học văn phòng',
    desc: 'Word, Excel, PowerPoint cho công việc. Có thể chọn học riêng từng phần mềm.',
    tags: ['Word', 'Excel', 'PowerPoint'],
    cta: 'Xem khóa văn phòng',
    lead: 'Word, Excel, PowerPoint cho công việc hằng ngày — học đúng thứ bạn cần, có thể chọn học riêng từng phần mềm.',
    chips: ['Word', 'Excel', 'PowerPoint'],
    forWho: [
      { icon: 'briefcase', title: 'Nhân viên văn phòng', desc: 'Muốn làm nhanh hơn, chuẩn hơn với các công việc giấy tờ, số liệu.' },
      { icon: 'doc', title: 'Người chuẩn bị đi làm', desc: 'Sinh viên mới ra trường hoặc người chuyển việc cần kỹ năng văn phòng.' },
      { icon: 'check', title: 'Hộ kinh doanh', desc: 'Cần quản lý hàng hóa, thu chi và báo cáo bằng Excel.' },
    ],
    outcomes: [
      'Soạn và trình bày văn bản hành chính đúng thể thức',
      'Xử lý, tổng hợp dữ liệu bằng các hàm Excel thông dụng',
      'Lập báo cáo với PivotTable và biểu đồ',
      'Thiết kế slide trình bày rõ ràng, chuyên nghiệp',
      'Tiết kiệm thời gian với phím tắt và mẹo làm việc',
    ],
    curriculum: [
      {
        name: 'Word',
        modules: [
          { title: 'Văn bản hành chính', items: ['Thể thức và kỹ thuật trình bày', 'Căn lề, phông chữ, khoảng cách', 'Mẫu văn bản thường dùng'] },
          { title: 'Tài liệu dài', items: ['Styles và mục lục tự động', 'Header, footer, đánh số trang', 'Chú thích, tham chiếu'] },
          { title: 'Bảng biểu & trộn thư', items: ['Bảng biểu chuyên nghiệp', 'Trộn thư (Mail Merge) cho thư mời, giấy báo'] },
        ],
      },
      {
        name: 'Excel',
        modules: [
          { title: 'Nền tảng bảng tính', items: ['Nhập liệu, định dạng', 'Địa chỉ ô tương đối, tuyệt đối', 'Kiểm soát dữ liệu nhập'] },
          { title: 'Hàm thông dụng', items: ['SUM, IF, COUNTIFS, SUMIFS', 'VLOOKUP / XLOOKUP', 'Hàm ngày tháng, chuỗi'] },
          { title: 'Xử lý dữ liệu', items: ['Sắp xếp, lọc', 'Conditional Formatting', 'Loại bỏ trùng lặp'] },
          { title: 'Báo cáo', items: ['PivotTable', 'Biểu đồ', 'Báo cáo tổng hợp theo tháng'] },
        ],
      },
      {
        name: 'PowerPoint',
        modules: [
          { title: 'Thiết kế slide', items: ['Bố cục, màu sắc, phông chữ', 'Slide Master và template'] },
          { title: 'Trực quan hóa', items: ['Biểu đồ, sơ đồ, hình ảnh', 'Video và âm thanh'] },
          { title: 'Trình bày', items: ['Hiệu ứng vừa đủ', 'Kỹ năng thuyết trình'] },
        ],
      },
    ],
    faq: [
      { q: 'Có thể chỉ học riêng Excel được không?', a: 'Được. Bạn có thể chọn học riêng Word, Excel hoặc PowerPoint tùy nhu cầu công việc.' },
      { q: 'Đi làm giờ hành chính thì học lúc nào?', a: 'Hãy để lại thông tin kèm khung giờ thuận tiện, thầy sẽ tư vấn lịch học hoặc hình thức online phù hợp.' },
      COMMON_FAQ.material,
      COMMON_FAQ.fee,
    ],
  },
];

export const getCourse = (slug) => COURSE_GROUPS.find((c) => c.slug === slug);
