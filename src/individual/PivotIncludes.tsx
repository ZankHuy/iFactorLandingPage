import { 
  Tv, Clock, FileText, GraduationCap, Users, CalendarDays, 
  ShieldCheck, ChevronRight 
} from "lucide-react";
import { INCLUSION_ITEMS } from "./types";

export default function PivotIncludes() {
  const renderIcon = (name: string) => {
    switch (name) {
      case "tv": return <Tv size={24} className="text-[#8b0e13]" />;
      case "clock": return <Clock size={24} className="text-[#8b0e13]" />;
      case "file-text": return <FileText size={24} className="text-[#8b0e13]" />;
      case "graduation-cap": return <GraduationCap size={24} className="text-[#8b0e13]" />;
      case "users": return <Users size={24} className="text-[#8b0e13]" />;
      case "calendar": return <CalendarDays size={24} className="text-[#8b0e13]" />;
      default: return <Tv size={24} className="text-[#8b0e13]" />;
    }
  };

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative overflow-hidden" id="includes-section">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Core Card Box Wrapper - Elegant Bright Layout */}
        <div className="bg-white rounded-[48px] p-6 sm:p-14 lg:p-16 text-center text-slate-900 shadow-xl relative overflow-hidden border border-red-100/10">
          
          {/* Subtle background circles */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-650/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase text-red-750 dark:text-red-400 tracking-widest font-mono">ĐỒNG HÀNH BỀN VỮNG × KHÔNG BỎ RƠI HỌC VIÊN</span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight text-slate-950 dark:text-white">
              Đặc quyền & Cam kết chương trình gồm:
            </h2>
          </div>

          {/* Grid Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {INCLUSION_ITEMS.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="bg-[#fbf8f3] hover:bg-[#f5ebd6] rounded-[32px] p-7 md:p-8 border border-[#d4b06a]/30 hover:border-[#8b0e13]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(139,14,19,0.06)] flex flex-col justify-between shadow-xs group"
                >
                  <div className="space-y-4">
                    
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#8b0e13]/8 flex items-center justify-center transition-colors group-hover:bg-[#8b0e13]/12">
                      {renderIcon(item.iconName)}
                    </div>

                    {/* Headline */}
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl tracking-tight leading-snug text-[#8b0e13]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-[14px] sm:text-[15px] text-slate-700 leading-relaxed font-normal [&_strong]:font-bold [&_strong]:text-[#8b0e13]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 pt-8 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-left text-xs sm:text-sm text-slate-600 font-medium">
              <span className="text-red-600 shrink-0"><ShieldCheck size={20} /></span>
              <span>Học đi đôi với làm. Toàn bộ template, prompt AI và file CRM thuộc quyền sở hữu trọn đời của bạn.</span>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById("pricing-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-ifactor-yellow text-slate-950 hover:bg-amber-400 font-black px-10 py-5 rounded-full text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/10 flex items-center gap-2 shrink-0 border-b-2 border-amber-600 cursor-pointer uppercase tracking-wider"
            >
              <span>NHẬN TƯ VẤN LỘ TRÌNH</span>
              <ChevronRight size={18} className="text-slate-950 stroke-[3px]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
