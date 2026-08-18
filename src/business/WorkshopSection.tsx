import { Zap, Video, MessageSquare, Settings, ArrowRight } from "lucide-react";
import { WORKSHOPS } from "./types";

export default function WorkshopSection() {
  const renderIcon = (idx: number) => {
    const icons = [<Zap size={24} />, <Video size={24} />, <MessageSquare size={24} />, <Settings size={24} />];
    return icons[idx];
  };

  return (
    <section className="py-24 bg-slate-50 font-sans relative overflow-hidden" id="workshop-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">CẬP NHẬT KIẾN THỨC</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            04 WORKSHOP CẬP NHẬT<br />
            <span className="text-red-600">TRONG 12 THÁNG</span>
          </h2>
        </div>

        {/* 4 Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOPS.map((workshop, idx) => (
            <div 
              key={workshop.id}
              className="bg-white rounded-[24px] p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                {renderIcon(idx)}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-slate-900 mb-2">
                {workshop.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {workshop.description}
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
