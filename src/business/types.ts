import testimonialQuanPhoto from "../additinal-asset/Quan.png";
import testimonialHuyenPhoto from "../additinal-asset/Huyen.png";
import testimonialDuyPhoto from "../additinal-asset/Duy.png";
import testimonialHoangPhoto from "../additinal-asset/Hoang.png";
import testimonialHieuPhoto from "../additinal-asset/Hieu.png";
import dangVuHiepRealPhoto from "./assets/images/Dang Vu Hiep_proxy.jpg";
import phamVietAnhPhoto from "./assets/images/Pham Viet Anh_proxy.jpg";
import tinaDoPhoto from "./assets/images/Tina Do_proxy.jpg";
import vuQuynhTrangPhoto from "./assets/images/ms Quỳnh Trang_proxy.jpg";
import tranKieuNgaPhoto from "./assets/images/Tran Kieu Nga_proxy.jpg";
import nguyenXuanHuongPhoto from "./assets/images/Nguyen Xuan Huong 2_proxy.jpg";
import trinhVanAnhPhoto from "./assets/images/Trinh Van Anh_proxy.jpg";
import tranTrongTruongPhoto from "./assets/images/mr Trọng Trưởng_proxy.jpg";
import ducNguyenPhoto from "./assets/images/mr Đức Nguyễn_proxy.jpg";
import nguyenDucThangPhoto from "./assets/images/Nguyen Duc Thang_proxy.jpg";

export interface Coach {
  id: string;
  name: string;
  role: string;
  experienceYear: string;
  experienceLabel?: string;
  badges: string[];
  statsValue1: string;
  statsLabel1: string;
  statsValue2: string;
  statsLabel2: string;
  statsValue3: string;
  statsLabel3: string;
  bio: string;
  imageUrl: string;
  objectPosition?: string;
}

export interface HowItWorkStep {
  step: number;
  title: string;
  description: string;
  iconName: "monitor" | "users" | "refresh" | "handshake";
  badge: string;
}

export interface SessionItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
}

export interface InclusionItem {
  id: string;
  title: string;
  description: string;
  iconName: "tv" | "clock" | "file-text" | "graduation-cap" | "users" | "calendar";
}

export interface Testimonial {
  id: string;
  name: string;
  tier: string;
  brokerage: string;
  quote: string;
  imageUrl: string;
  objectPosition?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  title?: string;
  price: string;
  originalPrice?: string;
  launchPrice?: string;
  registrationMethod?: string;
  isPopular: boolean;
  desc: string;
  features: string[];
  ctaText: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

export interface SystemPillar {
  id: string;
  title: string;
  description: string;
  iconName: "academy" | "bootcamp" | "workshop" | "handshake";
}

export interface AcademyFeature {
  id: string;
  title: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
}

export interface BootcampDay {
  id: string;
  title: string;
  sessions: {
    session: string;
    title: string;
    content: string;
  }[];
}

export interface WorkshopItem {
  id: string;
  title: string;
  description: string;
}

export interface CooperationPhase {
  id: string;
  title: string;
  description: string;
}

export interface CampaignPhase {
  step: number;
  title: string;
  description: string;
}

// ------------------ STATIC DATA ------------------

export const PROBLEMS: ProblemItem[] = [
  {
    id: "p1",
    title: "1. Học xong nhưng thiếu thực hành",
    description: "Kiến thức chưa được chuyển hóa thành video, lead, nội dung và hoạt động bán hàng cụ thể."
  },
  {
    id: "p2",
    title: "2. Khó nhân bản năng lực đội ngũ",
    description: "Năng lực sale không đồng đều, khiến mỗi chiến dịch mới lại phải đào tạo gần như từ đầu."
  },
  {
    id: "p3",
    title: "3. Khó đo lường hiệu quả",
    description: "Thiếu dữ liệu về tiến độ học, mức độ hoàn thành bài tập và khả năng ứng dụng vào công việc thực tế."
  }
];

export const SYSTEM_PILLARS: SystemPillar[] = [
  {
    id: "sp1",
    title: "01. Online Academy",
    description: "Chuẩn hóa kiến thức, nhân bản năng lực và theo dõi tiến độ học viên trên một nền tảng riêng dành cho doanh nghiệp.",
    iconName: "academy"
  },
  {
    id: "sp2",
    title: "02. Offline Bootcamp",
    description: "Đào tạo trực tiếp trên dự án thật, tập trung thực hành và tạo sản phẩm đầu ra ngay tại lớp.",
    iconName: "bootcamp"
  },
  {
    id: "sp3",
    title: "03. Workshop hàng quý",
    description: "Liên tục cập nhật công cụ, nền tảng, xu hướng và phương pháp bán hàng mới theo từng quý.",
    iconName: "workshop"
  },
  {
    id: "sp4",
    title: "04. Hợp tác kinh doanh",
    description: "Phối hợp cùng doanh nghiệp triển khai chiến dịch bán hàng thực tế để chuyển kiến thức thành kết quả.",
    iconName: "handshake"
  }
];

export const ACADEMY_FEATURES: AcademyFeature[] = [
  { id: "af1", title: "Thiết kế giao diện theo nhận diện thương hiệu" },
  { id: "af2", title: "Điều chỉnh nội dung theo sản phẩm và mục tiêu đào tạo" },
  { id: "af3", title: "Tích hợp video, tài liệu, template và bài kiểm tra" },
  { id: "af4", title: "Theo dõi tiến độ học và cấp chứng nhận" },
  { id: "af5", title: "Đồng hành vận hành xuyên suốt chương trình" }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Khảo sát",
    description: "Đánh giá năng lực đội ngũ, quy trình bán hàng và mục tiêu đào tạo."
  },
  {
    step: 2,
    title: "Thiết kế",
    description: "Xây dựng khung năng lực, case study dự án và giao diện nhận diện riêng."
  },
  {
    step: 3,
    title: "Vận hành",
    description: "Khởi tạo tài khoản, onboarding học viên và hỗ trợ quản trị nền tảng."
  },
  {
    step: 4,
    title: "Tối ưu",
    description: "Báo cáo kết quả, cập nhật học liệu và điều chỉnh nội dung theo từng chiến dịch."
  }
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  { id: "m1", title: "Tư duy One Sale Company", description: "Làm chủ tư duy và cuộc chơi bán hàng hiện đại." },
  { id: "m2", title: "Định vị thương hiệu cá nhân", description: "Xây dựng hình ảnh chuyên gia trong mắt khách hàng." },
  { id: "m3", title: "AI Project Intelligence", description: "Ứng dụng AI để bóc tách, phân tích và làm chủ dữ liệu dự án." },
  { id: "m4", title: "AI Content Mastery", description: "Ứng dụng AI để xây dựng ý tưởng và kịch bản bán hàng." },
  { id: "m5", title: "Solo Shooting", description: "Tự quay video chuyên nghiệp chỉ với thiết bị cá nhân." },
  { id: "m6", title: "Video Production", description: "Dựng video trên điện thoại và máy tính theo quy trình thực chiến." },
  { id: "m7", title: "AI Design for Sales", description: "Thiết kế hình ảnh bán hàng nhanh hơn với AI." },
  { id: "m8", title: "Omni-Channel", description: "Phân phối nội dung hiệu quả trên nhiều nền tảng." },
  { id: "m9", title: "Livestream Mastery", description: "Xây dựng kỹ năng livestream bán hàng và thu hút khách hàng trực tiếp." },
  { id: "m10", title: "Digital Traffic", description: "Ứng dụng Google Ads, Facebook Ads, TikTok Ads và các kênh đăng tin." },
  { id: "m11", title: "Customer Funnel", description: "Xây dựng hệ thống thu hút, nuôi dưỡng và chuyển đổi khách hàng." },
  { id: "m12", title: "Million Dollar Real Estate Sales", description: "Phát triển kỹ năng và tư duy thực chiến cho bán hàng bất động sản giá trị cao." }
];

export const BOOTCAMP_DAYS: BootcampDay[] = [
  {
    id: "day1",
    title: "NGÀY 1–2: XÂY NỀN TẢNG BÁN HÀNG",
    sessions: [
      { session: "Ngày 1 • Buổi 1", title: "Kickoff: Tổng quan One Sale Company", content: "Tổng quan One Sale Company và bức tranh lớn về ứng dụng công cụ trong ngành bất động sản. Nội dung trọng tâm: định vị thương hiệu và bản đồ ứng dụng cho hoạt động bán hàng bất động sản." },
      { session: "Ngày 1 • Buổi 2", title: "Toàn cảnh AI cho bất động sản (1)", content: "Ứng dụng AI để bóc tách thông tin dự án, xây dựng thông điệp bán hàng và thiết kế hình ảnh phục vụ bán hàng." },
      { session: "Ngày 2 • Buổi 1", title: "Toàn cảnh AI cho bất động sản (2)", content: "Ứng dụng AI trong sáng tạo tài liệu bán hàng, video cá nhân và xây dựng kênh bán hàng tự động." },
      { session: "Ngày 2 • Buổi 2", title: "Quay và sản xuất video", content: "Thực hành quay, dựng và hoàn thiện video theo format bán hàng thực chiến." }
    ]
  },
  {
    id: "day2",
    title: "NGÀY 3: ĐƯA KIẾN THỨC VÀO THỰC CHIẾN",
    sessions: [
      { session: "Ngày 3 • Buổi 1", title: "Livestream bất động sản và quảng cáo BĐS", content: "Thực hành livestream, CRM và cài đặt quảng cáo trên TikTok, Facebook." },
      { session: "Ngày 3 • Buổi 2", title: "Kỹ năng bán hàng đỉnh cao", content: "Phân tích thị trường, xây dựng cách tiếp cận khách hàng giá trị cao và thực hành case study chốt sale." }
    ]
  }
];

export const OFFLINE_OUTPUTS: string[] = [
  "Định vị bán hàng cá nhân",
  "Concept kênh và 03 tuyến nội dung",
  "Hệ thống tạo nội dung tự động",
  "Video bán hàng hoàn chỉnh",
  "Livestream và setup quảng cáo",
  "Kỹ năng chốt sale giá trị cao"
];

export const WORKSHOPS: WorkshopItem[] = [
  { id: "w1", title: "01. AI & Nội dung", description: "Cập nhật công cụ AI mới, sản xuất video và prompt thực chiến." },
  { id: "w2", title: "02. Xây kênh", description: "TikTok, Facebook, Reels, Shorts và phương pháp xây kênh hiệu quả." },
  { id: "w3", title: "03. Livestream", description: "Mạng lưới livestream, KOL bất động sản và hệ thống tạo lead." },
  { id: "w4", title: "04. Automation", description: "CRM, chăm sóc khách hàng, case study mới và tối ưu quy trình bán hàng." }
];

export const COOPERATION_PHASES: CooperationPhase[] = [
  { id: "cp1", title: "01. Huấn luyện theo dự án", description: "Phân tích sản phẩm, khách hàng mục tiêu và thông điệp trước khi triển khai." },
  { id: "cp2", title: "02. Ngày hội kinh doanh", description: "Tổ chức Video Challenge, Livestream Day và phát hành nội dung đồng loạt." },
  { id: "cp3", title: "03. Đo lường & tối ưu", description: "Review nội dung, lead, lịch hẹn và chuẩn hóa kết quả thành case study nội bộ." }
];

export const CAMPAIGN_PHASES: CampaignPhase[] = [
  { step: 1, title: "Nhận brief", description: "Phân tích sản phẩm, chốt thông điệp và huấn luyện đội ngũ." },
  { step: 2, title: "Sản xuất", description: "Xây dựng video, bài viết, hình ảnh bán hàng và kịch bản livestream." },
  { step: 3, title: "Kích hoạt", description: "Phát hành nội dung đồng loạt, livestream, thu lead và triển khai bảng xếp hạng." },
  { step: 4, title: "Tối ưu", description: "Review nội dung, follow-up khách hàng và tổng kết hiệu quả chiến dịch." }
];

export const AFTER_6_MONTHS: string[] = [
  "Một cơ chế đào tạo có thể chuẩn hóa và nhân bản",
  "Hệ thống dữ liệu theo dõi tiến độ rõ ràng",
  "Đầu ra gắn trực tiếp với chiến dịch bán hàng",
  "01 học viện online mang nhận diện riêng",
  "Không giới hạn tài khoản học viên",
  "12 chuyên đề đào tạo chuẩn hóa",
  "04 lớp hệ thống vận hành"
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "online-academy",
    name: "Online Academy 365",
    title: "CHUẨN HÓA NỀN TẢNG ĐÀO TẠO",
    price: "Liên hệ báo giá",
    isPopular: false,
    desc: "Phù hợp với doanh nghiệp cần chuẩn hóa nền tảng đào tạo online.",
    features: [
      "01 học viện online theo nhận diện doanh nghiệp",
      "12 chuyên đề đào tạo chuẩn hóa",
      "Không giới hạn tài khoản học viên",
      "Theo dõi tiến độ và cấp chứng nhận",
      "Tích hợp video, tài liệu, template",
      "Đồng hành vận hành 6 tháng"
    ],
    ctaText: "Nhận tư vấn"
  },
  {
    id: "hybrid-academy",
    name: "Hybrid Academy 365",
    title: "KẾT HỢP HỌC ONLINE & THỰC HÀNH",
    price: "Liên hệ báo giá",
    isPopular: true,
    desc: "Kết hợp học online, workshop và đào tạo thực hành trực tiếp.",
    features: [
      "Toàn bộ quyền lợi gói Online Academy",
      "06 buổi Offline Bootcamp (12 chuyên đề)",
      "100-150 học viên mỗi lớp",
      "04 Workshop cập nhật hàng quý",
      "Sản phẩm đầu ra thực chiến",
      "Đồng hành vận hành 12 tháng"
    ],
    ctaText: "Nhận tư vấn"
  },
  {
    id: "growth-partnership",
    name: "Growth Partnership 365",
    title: "ĐỒNG HÀNH TOÀN DIỆN",
    price: "Liên hệ báo giá",
    isPopular: false,
    desc: "Mô hình đồng hành toàn diện từ đào tạo, triển khai chiến dịch đến đo lường và tối ưu tăng trưởng.",
    features: [
      "Toàn bộ quyền lợi gói Hybrid Academy",
      "Hợp tác kinh doanh thực chiến",
      "Chiến dịch bán hàng theo dự án",
      "Đo lường & tối ưu liên tục",
      "Case study & báo cáo định kỳ",
      "Đồng hành xuyên suốt 12 tháng"
    ],
    ctaText: "Nhận tư vấn"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "Chương trình phù hợp với doanh nghiệp BĐS nào?",
    answer: "Chương trình phù hợp với mọi quy mô doanh nghiệp BĐS: sàn môi giới, đại lý chủ đầu tư, chủ đầu tư đang xây dựng đội ngũ sales nội bộ. Từ quy mô nhỏ 5-10 sales đến doanh nghiệp lớn 100+ sales."
  },
  {
    id: "faq2",
    question: "Thời gian triển khai chương trình là bao lâu?",
    answer: "Thời gian triển khai từ 6 đến 12 tháng tùy gói dịch vụ. Gói Online Academy 365: 6 tháng sử dụng + 6 tháng bảo hành. Gói Hybrid và Growth Partnership: xuyên suốt 12 tháng với đồng hành liên tục."
  },
  {
    id: "faq3",
    question: "Học viện online có được customize theo doanh nghiệp không?",
    answer: "Có, 100%. Học viện được thiết kế theo nhận diện thương hiệu, sản phẩm và nhu cầu riêng của từng doanh nghiệp. Bao gồm giao diện, nội dung, video, tài liệu và template đều theo brand doanh nghiệp."
  },
  {
    id: "faq4",
    question: "Số lượng học viên có giới hạn không?",
    answer: "Không giới hạn. Gói Online Academy không giới hạn tài khoản học viên. Gói Hybrid Academy phù hợp với 100-150 học viên mỗi lớp Bootcamp."
  },
  {
    id: "faq5",
    question: "Sau khi kết thúc chương trình, doanh nghiệp có được hỗ trợ tiếp không?",
    answer: "Có. Gói Hybrid và Growth Partnership có đồng hành 12 tháng với cập nhật học liệu, báo cáo định kỳ và hỗ trợ vận hành liên tục. Workshop hàng quý giúp cập nhật kiến thức mới."
  }
];

export const COACHES_LIST: Coach[] = [
  {
    id: "dang-vu-hiep",
    name: "Mr. Đặng Vũ Hiệp",
    role: "Co-Founder IFTV & Diễn giả Truyền thông",
    experienceYear: "10+ năm kinh nghiệm marketing BĐS",
    badges: ["Truyền thông BĐS", "Xây Kênh Triệu Views", "Chiến lược Content"],
    statsValue1: "210K+",
    statsLabel1: "Followers TikTok @hiepdangreporter",
    statsValue2: "100M+",
    statsLabel2: "Views/tháng Mạng lưới IFTV",
    statsValue3: "100+",
    statsLabel3: "Dự án BĐS đã đồng hành truyền thông",
    bio: "Mr Đặng Vũ Hiệp có hơn 10 năm kinh nghiệm trong lĩnh vực truyền thông marketing bất động sản, từng triển khai hơn 100 dự án trên toàn quốc. Anh là chuyên gia dẫn dắt có thực lực hàng đầu trong việc biến tài liệu dự án trở thành kịch bản video ngắn cuốn hút, giúp bạn chuẩn hoá thông điệp và cách kể chuyện cuốn hút tự nhiên trước máy quay.",
    imageUrl: dangVuHiepRealPhoto,
    objectPosition: "50% 20%"
  },
  {
    id: "pham-viet-anh",
    name: "Mr. Phạm Việt Anh",
    role: "Founder Golden Goose – Co-founder iFactor",
    experienceYear: "10+ năm kinh nghiệm BĐS & Đào tạo",
    badges: ["Tư duy Bán hàng", "Năng lực Sales", "Hệ thống Bán hàng"],
    statsValue1: "10+ Năm",
    statsLabel1: "Kinh nghiệm BĐS",
    statsValue2: "15K+",
    statsLabel2: "Sales & Học viên trực tiếp đào tạo",
    statsValue3: "100%",
    statsLabel3: "Góc nhìn thực chiến thị trường",
    bio: "Mr Phạm Việt Anh có hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản, đào tạo, xây dựng hệ thống bán hàng, đầu tư và tư vấn phát triển dự án. Anh phụ trách dạy tư duy kinh doanh bất động sản, xây dựng năng lực sale chuyên nghiệp, hệ thống bán hàng và tư vấn khách hàng.",
    imageUrl: phamVietAnhPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "tina-do",
    name: "Ms. Tina Đỗ",
    role: "Tổng Giám đốc – Co-founder IFTV",
    experienceYear: "20 năm truyền thông marketing BĐS",
    badges: ["Marketing BĐS", "Tư duy Truyền thông", "Thông điệp bán hàng"],
    statsValue1: "20 Năm",
    statsLabel1: "Kinh nghiệm truyền thông",
    statsValue2: "100+",
    statsLabel2: "Dự án triển khai thành công",
    statsValue3: "100%",
    statsLabel3: "Chiến lược xây dựng niềm tin",
    bio: "Ms Tina Đỗ có 20 năm kinh nghiệm truyền thông marketing trong lĩnh vực bất động sản, triển khai hơn 100 dự án trên toàn quốc. Cô tập trung chia sẻ về marketing bất động sản, tư duy truyền thông dự án, cách biến thông tin sản phẩm thành thông điệp bán hàng và cách xây dựng niềm tin bền vững với khách hàng.",
    imageUrl: tinaDoPhoto,
    objectPosition: "50% 10%"
  },
  {
    id: "vu-quynh-trang",
    name: "Ms. Vũ Quỳnh Trang",
    role: "Content Creator Kênh TikTok Hoa Hậu Vỉa Hè",
    experienceYear: "Thạc sĩ Kinh tế & Thạc sĩ Truyền thông",
    experienceLabel: "Học vị",
    badges: ["Thương hiệu cá nhân", "Định vị Concept", "Tuyến nội dung"],
    statsValue1: "190K+",
    statsLabel1: "Followers TikTok Hoa Hậu Vỉa Hè",
    statsValue2: "SME",
    statsLabel2: "Chuyên gia nhân hiệu nội bộ",
    statsValue3: "100%",
    statsLabel3: "Giảng viên Học viện Ngoại giao",
    bio: "Ms Vũ Quỳnh Trang là Thạc sĩ Kinh tế và Thạc sĩ Truyền thông, giảng viên tại Học viện Ngoại giao. Cô là Giám đốc Công ty TNHH Hoa Hậu Vỉa Hè, chuyên gia xây dựng nhân hiệu và thương hiệu cho chủ doanh nghiệp SME, giúp học viên chọn concept kênh, định hình phong cách xuất hiện và thiết kế tuyến nội dung dễ nhớ.",
    imageUrl: vuQuynhTrangPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "tran-kieu-nga",
    name: "Ms. Trần Kiều Nga",
    role: "Giảng viên Content",
    experienceYear: "KOL Bất động sản",
    badges: ["Viết Content", "Insight Khách Hàng", "Viết Caption"],
    statsValue1: "160K+",
    statsLabel1: "Followers quan tâm BĐS",
    statsValue2: "KOL",
    statsLabel2: "Chuyên sâu bất động sản",
    statsValue3: "100%",
    statsLabel3: "Tư vấn & Chuyển đổi nội dung",
    bio: "Ms Trần Kiều Nga là KOL chuyên bất động sản với hơn 160.000 người theo dõi. Cô phụ trách giảng dạy viết content bán hàng, xây dựng nội dung từ insight khách hàng, viết caption, bài tư vấn, bài xử lý phản đối, và chuyển đổi các thông tin dự án khô khan thành nội dung dễ tiếp nhận.",
    imageUrl: tranKieuNgaPhoto,
    objectPosition: "50% 20%"
  },
  {
    id: "nguyen-xuan-huong",
    name: "Mr. Nguyễn Xuân Hướng",
    role: "Short-form Video Editor & CapCut Educator",
    experienceYear: "Chuyên gia CapCut chuyên nghiệp",
    badges: ["Dựng CapCut", "Tối ưu Nhịp dựng", "Template Video"],
    statsValue1: "44K+",
    statsLabel1: "Followers TikTok Hướng Edit",
    statsValue2: "CapCut",
    statsLabel2: "Đào tạo video ngắn",
    statsValue3: "100%",
    statsLabel3: "Thực hành ứng dụng nhanh hằng ngày",
    bio: "Mr Nguyễn Xuân Hướng là chủ kênh TikTok Hướng Edit với hơn 44.000 người theo dõi, chuyên đào tạo dựng video ngắn và ứng dụng CapCut trong sản xuất nội dung. Trong chương trình, anh hướng dẫn dựng video ngắn bằng CapCut, tối ưu nhịp dựng video bán hàng, chèn phụ đề, âm thanh, CTA và tạo template có tính lặp lại cao.",
    imageUrl: nguyenXuanHuongPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "trinh-van-anh",
    name: "Ms. Trịnh Vân Anh",
    role: "Host Livestream & Trainer",
    experienceYear: "Giảng viên thực chiến livestream",
    badges: ["Livestream Bán Hàng", "Kịch bản Livestream", "Giữ chân người xem"],
    statsValue1: "Multi",
    statsLabel1: "Nền tảng thực chiến livestream",
    statsValue2: "Lead",
    statsLabel2: "Chuyển đổi tương tác trực tiếp",
    statsValue3: "100%",
    statsLabel3: "Dẫn dắt nội dung cuốn hút",
    bio: "Ms Trịnh Vân Anh là giảng viên thực chiến livestream trên nhiều nền tảng số. Cô tập trung giảng dạy kỹ năng livestream bán hàng, thiết lập kịch bản livestream, cách giữ chân người xem, dẫn dắt nội dung và chuyển đổi tương tác livestream thành lead tư vấn thực tế.",
    imageUrl: trinhVanAnhPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "tran-trong-truong",
    name: "Mr. Trần Trọng Trưởng",
    role: "Chuyên gia Digital Marketing",
    experienceYear: "Chuyên gia sản phẩm Google",
    badges: ["Digital Marketing", "Chỉ số Quảng cáo", "Test tệp Khách"],
    statsValue1: "Google",
    statsLabel1: "Product Expert chính thức",
    statsValue2: "Paid Ads",
    statsLabel2: "Chuyên gia quảng cáo trả phí",
    statsValue3: "100%",
    statsLabel3: "Phối hợp hiệu quả đội digital",
    bio: "Mr Trần Trọng Trưởng là Chuyên gia sản phẩm Google (Product Expert) và chuyên gia quảng cáo trả phí. Anh giúp học viên hiểu nền tảng quảng cáo digital, đọc chỉ số cơ bản, biết cách test nội dung và tệp khách hàng để phối hợp hiệu quả tối đa với đội chạy quảng cáo.",
    imageUrl: tranTrongTruongPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "duc-nguyen",
    name: "Mr. Đức Nguyễn",
    role: "Founder Sisu AI & AI Transformers Vietnam",
    experienceYear: "Thạc sĩ Data Analytics (Aalto University, Phần Lan)",
    experienceLabel: "Học vị",
    badges: ["Trí Tuệ Nhân Tạo AI", "Prompt BĐS", "Tự động hóa"],
    statsValue1: "35K+",
    statsLabel1: "Followers AI Native Lab",
    statsValue2: "10+ năm",
    statsLabel2: "Chuyển đổi số & Tự động hóa tại Châu Âu",
    statsValue3: "500+",
    statsLabel3: "Prompt chuyên dụng bán hàng",
    bio: "Mr Đức Nguyễn là Founder Sisu AI – Founder AI Native Lab – Founder AI Transformers Vietnam. Anh Thạc sĩ Data Analytics tại Đại học Aalto, Phần Lan, có 10+ năm kinh nghiệm chuyển đổi số tại châu Âu. Phụ trách: Ứng dụng AI trong BĐS, đọc tài liệu dự án bằng AI, tạo prompt viết content/kịch bản và tự động hoá quy trình sản xuất.",
    imageUrl: ducNguyenPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "nguyen-duc-thang",
    name: "Mr. Nguyễn Đức Thắng",
    role: "Deputy Director of Media Production",
    experienceYear: "Phó giám đốc kỹ thuật VEJO Media",
    badges: ["Media Production", "Hình ảnh & Video", "Chiến dịch A80"],
    statsValue1: "Deputy",
    statsLabel1: "An Nam & VEJO Media Center",
    statsValue2: "A80",
    statsLabel2: "Trực tiếp hậu kỳ video trong đại lễ Quốc khánh 2/9",
    statsValue3: "100%",
    statsLabel3: "Sản xuất media thực chiến",
    bio: "Mr Nguyễn Đức Thắng là Deputy Director of Media Production tại An Nam Digital Media & Trading kiêm Phó giám đốc kỹ thuật VEJO Media. Anh phụ trách tư duy sản xuất hình ảnh/video, chuẩn hóa chất lượng tư liệu, tối ưu quy trình sản xuất nội dung cho sale và đội nhóm.",
    imageUrl: nguyenDucThangPhoto,
    objectPosition: "50% 20%"
  }
];

export const AGENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Nguyễn Minh Quân",
    tier: "GIÁM ĐỐC KINH DOANH",
    brokerage: "Sunrise Property Group",
    quote: "Trước khi hợp tác với iFactor, đội ngũ 25 sales của chúng tôi hoạt động rời rạc. Sau 6 tháng đào tạo, đội ngũ được chuẩn hóa quy trình, lead tăng 4 lần và doanh số tăng trưởng 280%. Đây là khoản đầu tư có ROI tốt nhất.",
    imageUrl: testimonialQuanPhoto,
    objectPosition: "50% 5%"
  },
  {
    id: "t2",
    name: "Trần Thị Mai Linh",
    tier: "TRƯỞNG PHÒNG SALES",
    brokerage: "Vinhomes Premium Đại lý cấp 1",
    quote: "Workshop in-house giúp cả team 40 người cùng học và thực hành. Sau khi áp dụng CRM đội nhóm, chúng tôi tiết kiệm 30% thời gian quản lý và mỗi sales trung bình tăng 1.5 deal mỗi tháng.",
    imageUrl: testimonialHuyenPhoto,
    objectPosition: "50% 5%"
  },
  {
    id: "t3",
    name: "Lê Văn Thành",
    tier: "FOUNDER & CEO",
    brokerage: "Thành Phát Land",
    quote: "Đội sales 18 người sau 4 tháng đào tạo đã có quy trình chuẩn, doanh số tháng tăng từ 8 tỷ lên 25 tỷ. Đặc biệt phần đồng hành 90 ngày giúp doanh nghiệp có lộ trình tăng trưởng bền vững.",
    imageUrl: testimonialDuyPhoto,
    objectPosition: "50% 5%"
  }
];
