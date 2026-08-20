import { Monitor, Users, Calendar, Handshake, ArrowRight } from "lucide-react";
import { SYSTEM_PILLARS } from "./types";

export default function HowItWorks() {
  const renderIcon = (name: string) => {
    switch (name) {
      case "academy":
        return <Monitor size={28} className="text-white" />;
      case "bootcamp":
        return <Users size={28} className="text-white" />;
      case "workshop":
        return <Calendar size={28} className="text-white" />;
      case "handshake":
        return <Handshake size={28} className="text-white" />;
      default:
        return <Monitor size={28} className="text-white" />;
    }
  };

  return (
    <section className="py-4 sm:py-24 bg-slate-50 font-sans relative overflow-hidden" id="how-it-works-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">HỆ THỐNG ĐÀO TẠO</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            MỘT HỆ THỐNG ĐÀO TẠO<br />
            <span className="text-red-600">XUYÊN SUỐT 12 THÁNG</span>
          </h2>
          <p className="text-slate-600 font-light text-sm mt-4 leading-relaxed">
            Chương trình đồng hành toàn diện giúp doanh nghiệp xây dựng đội ngũ sales chuyên nghiệp
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="bg-white rounded-[24px] p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center mb-5">
                {renderIcon(pillar.iconName)}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const el = document.getElementById("contact-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
          >
            <span>Tìm hiểu thêm</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
