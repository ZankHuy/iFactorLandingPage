import { Target, Calendar, BarChart3, ArrowRight } from "lucide-react";
import { COOPERATION_PHASES, CAMPAIGN_PHASES } from "./types";

export default function CooperationSection() {
  return (
    <section className="py-8 sm:py-24 bg-white font-sans relative overflow-hidden" id="cooperation-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">HỢP TÁC KINH DOANH</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            ĐƯA KIẾN THỨC VÀO<br />
            <span className="text-red-600">CHIẾN DỊCH BÁN HÀNG THẬT</span>
          </h2>
          <p className="text-slate-600 font-light text-sm mt-4 leading-relaxed">
            Để kiểm chứng và tối ưu hiệu quả, chúng tôi đồng hành triển khai chiến dịch thực tế cùng doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left - Cooperation Phases */}
          <div className="lg:col-span-5">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Ba giai đoạn hợp tác</h3>
            <div className="space-y-4">
              {COOPERATION_PHASES.map((phase) => (
                <div key={phase.id} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{phase.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Campaign Phases */}
          <div className="lg:col-span-7">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Mô hình chiến dịch thực chiến</h3>
            <div className="grid grid-cols-2 gap-4">
              {CAMPAIGN_PHASES.map((phase) => (
                <div key={phase.step} className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                      {phase.step}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{phase.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
