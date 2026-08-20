import { Play, ArrowRight } from "lucide-react";
import { CURRICULUM_MODULES } from "./types";

export default function CurriculumSection() {
  return (
    <section className="py-4 sm:py-24 bg-slate-50 font-sans relative overflow-hidden" id="curriculum-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">KHUNG ĐÀO TẠO</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            12 CHUYÊN ĐỀ<br />
            <span className="text-red-600">HỌC VIỆN ONLINE DOANH NGHIỆP</span>
          </h2>
        </div>

        {/* 12 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRICULUM_MODULES.map((module, idx) => (
            <div 
              key={module.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                    {module.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
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
            <span>Xem chi tiết lộ trình</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
