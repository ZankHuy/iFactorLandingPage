import { Award, Tv, Users, Calendar, Sparkles, Briefcase, Monitor, GraduationCap, Handshake } from "lucide-react";
import { motion } from "motion/react";
import kpiHeroPhoto from "../additinal-asset/team5.jpg";
import SmartImage from "../components/SmartImage";

export default function Hero() {
  const handleCtaClick = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-ifactor-cream pt-12 pb-20 font-sans">

      {/* Background graphic accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Logo / Brand Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-xs border border-slate-200">
              <span className="font-sans font-black text-xs text-slate-900 tracking-wide uppercase flex items-center gap-1">
                <Sparkles size={12} />
                Dành Cho Doanh Nghiệp BĐS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">iFactor Academy</span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display font-black text-[1.8rem] sm:text-[2.4rem] xl:text-[3rem] text-slate-950 leading-[1.1] tracking-tight">
              CHƯƠNG TRÌNH XÂY DỰNG<br />
              <span className="text-red-600">ONE SALE COMPANY</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Giải pháp đào tạo dành cho doanh nghiệp bất động sản, giúp chuẩn hóa năng lực đội ngũ, tăng khả năng ứng dụng và tạo đầu ra gắn trực tiếp với hoạt động bán hàng.
            </p>

            {/* CTA Widget */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-4">
              <button
                id="hero-cta"
                onClick={handleCtaClick}
                className="group relative inline-flex items-center justify-center bg-red-600 hover:bg-red-700 active:scale-95 transition-all text-white font-black px-9 py-4.5 rounded-full text-sm sm:text-base tracking-wider uppercase cursor-pointer shadow-lg shadow-red-600/20 border-b-2 border-red-700 flex items-center gap-2"
              >
                <span>NHẬN TƯ VẤN NGAY</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>

              <div className="text-xs text-slate-500 font-medium tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-900 font-extrabold">12 Tháng đồng hành</span>
                <span className="text-slate-300">•</span>
                <span>Online + Offline + Workshop</span>
                <span className="text-slate-300">•</span>
                <span>Không giới hạn học viên</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column - Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Main Rounded Box */}
            <div className="relative w-full max-w-[480px] aspect-square bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">

              {/* Background illustrative team photo */}
              <SmartImage
                proxySrc={kpiHeroPhoto}
                fullSrc={kpiHeroPhoto}
                alt="Đào tạo Business Sales Academy"
                className="w-full h-full"
                referrerPolicy="no-referrer"
              />

              {/* Decorative overlay screen filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-4 -right-2 bg-white/90 shadow-md p-3 rounded-full flex items-center gap-1.5 border border-slate-50">
              <span className="text-white bg-red-600 p-1.5 rounded-full"><Briefcase size={18} /></span>
              <div className="text-left font-sans pr-2">
                <div className="text-[9px] text-slate-400 font-bold uppercase leading-none">BẢN CHÀO DỊCH VỤ</div>
                <div className="text-xs font-black text-slate-800 leading-none">2026</div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Ribbon - 4 System Pillars */}
        <div className="mt-20 py-6 px-4 bg-white rounded-3xl shadow-xs border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">

            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Monitor size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Online Academy</span>
              <span className="text-[10px] text-slate-500 mt-0.5">12 chuyên đề chuẩn hóa</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Users size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Offline Bootcamp</span>
              <span className="text-[10px] text-slate-500 mt-0.5">06 buổi đào tạo thực chiến</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Calendar size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Workshop Quý</span>
              <span className="text-[10px] text-slate-500 mt-0.5">04 workshop cập nhật</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Handshake size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Hợp tác Kinh doanh</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Chiến dịch thực chiến</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
