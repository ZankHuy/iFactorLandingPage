import { Link } from "react-router-dom";
import { User, Building2, ArrowRight, Sparkles, Users, TrendingUp, Briefcase } from "lucide-react";
import logoImg from "../individual/assets/images/ifactor_logo_1781235098969_proxy.jpg";

export default function HomeSelector() {
  return (
    <div className="min-h-screen bg-ifactor-cream text-pivot-dark font-sans antialiased relative overflow-hidden">
      {/* Background decorative accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      {/* Top brand header */}
      <header className="w-full pt-10 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 shrink-0 overflow-hidden relative flex items-center justify-center rounded-xl drop-shadow">
              <img
                src={logoImg}
                alt="iFactor Logo"
                className="w-full h-full object-cover scale-[1.50]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl text-slate-950 tracking-widest leading-none">
                IFACTOR
              </span>
              <span className="text-[10px] text-red-650 font-extrabold tracking-[0.14em] uppercase font-sans mt-1">
                ACADEMY & IFTV NETWORK
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-widest">
            <Sparkles size={14} className="text-red-600" />
            <span>Đào tạo Bất Động Sản Thực Chiến</span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full shadow-xs border border-red-100 mb-6">
          <span className="font-sans font-black text-xs text-red-600 tracking-wide uppercase flex items-center gap-1">
            <Sparkles size={12} />
            Chào mừng đến với iFactor Academy
          </span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-slate-950 leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Chọn phiên bản đào tạo <br />
          <span className="text-red-600">phù hợp với bạn</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light mt-6">
          iFactor cung cấp hai chương trình đào tạo thực chiến chuyên biệt:
          dành cho <strong className="font-bold text-slate-950">sales cá nhân</strong> muốn xây dựng thương hiệu và hệ thống bán hàng riêng,
          và dành cho <strong className="font-bold text-slate-950">doanh nghiệp</strong> muốn đào tạo đội ngũ sales chuyên nghiệp.
        </p>
      </section>

      {/* Two-card selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* INDIVIDUAL CARD */}
          <Link
            to="/onesalecompany"
            className="group relative bg-white rounded-[32px] overflow-hidden border-2 border-slate-100 hover:border-red-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

            <div className="p-8 sm:p-10 space-y-6">
              {/* Icon badge */}
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shadow-inner border border-red-100">
                  <User size={32} className="text-red-600" strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                  Cho Cá Nhân
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 leading-tight">
                  One Sale Company
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  Biến mỗi sale BĐS thành một <strong className="font-bold text-red-600">công ty bán hàng cá nhân</strong>.
                  Hệ thống đào tạo thực chiến dành cho cá nhân với thương hiệu cá nhân, video ngắn, AI, và dữ liệu khách hàng riêng.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">12 modules.</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">Cam kết hiệu suất.</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">Tự vận hành hệ thống.</strong>
                  </span>
                </div>
              </div>

              {/* Stats ribbon */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-slate-100">
                <div className="text-center">
                  <div className="font-display font-black text-xl text-red-600">50+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Bài giảng</div>
                </div>
                <div className="text-center border-x border-slate-100">
                  <div className="font-display font-black text-xl text-red-600">10+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Giảng viên</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-black text-xl text-red-600">90 ngày</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Triển khai</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Giá khởi điểm</div>
                  <div className="font-display font-black text-2xl text-slate-950 mt-0.5">1.490.000đ</div>
                </div>
                <div className="bg-red-600 group-hover:bg-red-700 text-white font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md group-hover:shadow-lg">
                  <span>Khám phá ngay</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* BUSINESS CARD */}
          <Link
            to="/b2b"
            className="group relative bg-white rounded-[32px] overflow-hidden border-2 border-slate-100 hover:border-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-950" />

            <div className="p-8 sm:p-10 space-y-6">
              {/* Icon badge */}
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center shadow-inner border border-slate-200">
                  <Building2 size={32} className="text-slate-900" strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                  Cho Doanh Nghiệp
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 leading-tight">
                  Business Sales Academy
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  Chương trình đào tạo <strong className="font-bold text-slate-950">chuyên biệt cho doanh nghiệp</strong> muốn xây dựng đội ngũ sales BĐS chuyên nghiệp, có quy trình chuẩn, đo lường được KPI và tăng trưởng bền vững.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-slate-900 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">Đào tạo Inhouse 100-1000+ Sale</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-slate-900 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">Quy trình chuẩn hóa</strong> – CRM đội nhóm, pipeline, KPI dashboard
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-slate-900 text-xs font-black">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">
                    <strong className="font-bold text-slate-950">Thiết kế riêng cho từng doanh nghiệp</strong>
                  </span>
                </div>
              </div>

              {/* Stats ribbon */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-slate-100">
                <div className="text-center">
                  <div className="font-display font-black text-xl text-slate-900">50+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Doanh nghiệp</div>
                </div>
                <div className="text-center border-x border-slate-100">
                  <div className="font-display font-black text-xl text-slate-900">1000+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Sales đào tạo</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-black text-xl text-slate-900">3x</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">Tăng doanh số</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Báo giá</div>
                  <div className="font-display font-black text-2xl text-slate-950 mt-0.5">Liên hệ tư vấn</div>
                </div>
                <div className="bg-slate-900 group-hover:bg-slate-800 text-white font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md group-hover:shadow-lg">
                  <span>Tư vấn doanh nghiệp</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom info bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-100 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <Users size={14} className="text-red-600" />
              <span><strong className="font-bold text-slate-900">10,000+</strong> học viên & đối tác</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <Briefcase size={14} className="text-red-600" />
              <span><strong className="font-bold text-slate-900">100+</strong> dự án BĐS đồng hành</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <TrendingUp size={14} className="text-red-600" />
              <span><strong className="font-bold text-slate-900">100M+</strong> views/tháng mạng lưới IFTV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 font-sans mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0 overflow-hidden relative flex items-center justify-center rounded-lg">
                <img
                  src={logoImg}
                  alt="iFactor Logo"
                  className="w-full h-full object-cover scale-[1.50]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-white text-base tracking-wider">
                IFACTOR ACADEMY <span className="text-yellow-500 text-[9px] font-bold ml-0.5">™</span>
              </span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              Mạng lưới đào tạo • Kết nối tri thức – Kiến tạo giá trị
            </div>
          </div>
        </div>
        <div className="py-6 text-center">
          <div className="text-[10px] text-slate-600 font-mono">
            © 2026 iFactor Academy × IFTV Network. Tất cả quyền được bảo lưu.
          </div>
        </div>
      </footer>
    </div>
  );
}