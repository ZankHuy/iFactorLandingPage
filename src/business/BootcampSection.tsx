import { Users, Video, MessageSquare, Target, Check, ArrowRight } from "lucide-react";
import { BOOTCAMP_DAYS, OFFLINE_OUTPUTS } from "./types";

export default function BootcampSection() {
  return (
    <section className="py-4 sm:py-24 bg-white font-sans relative overflow-hidden" id="bootcamp-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">ĐÀO TẠO THỰC CHIẾN</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            OFFLINE BOOTCAMP
          </h2>
          <p className="text-slate-600 font-light text-sm mt-4 leading-relaxed">
            Chương trình đào tạo trực tiếp tại doanh nghiệp, tập trung vào thực hành và tạo đầu ra ngay trong lớp.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-red-50 rounded-2xl">
            <div className="text-2xl font-black text-red-600">06</div>
            <div className="text-xs text-slate-600 mt-1">Buổi đào tạo</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-2xl">
            <div className="text-2xl font-black text-red-600">12</div>
            <div className="text-xs text-slate-600 mt-1">Chuyên đề thực chiến</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-2xl">
            <div className="text-2xl font-black text-red-600">100-150</div>
            <div className="text-xs text-slate-600 mt-1">Học viên/lớp</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left - Bootcamp Content */}
          <div className="lg:col-span-7">
            {BOOTCAMP_DAYS.map((day) => (
              <div key={day.id} className="mb-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  {day.title}
                </h3>
                <div className="space-y-4">
                  {day.sessions.map((session, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-start gap-3">
                        <div className="w-24 shrink-0">
                          <span className="text-xs font-bold text-red-600">{session.session}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{session.title}</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{session.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Outputs */}
          <div className="lg:col-span-5">
            <div className="bg-red-600 rounded-[24px] p-6 sm:p-8 text-white sticky top-28">
              <h3 className="font-bold text-xl mb-6">
                ĐẦU RA SAU<br />
                06 BUỔI OFFLINE BOOTCAMP
              </h3>
              <p className="text-sm text-white/80 mb-6">
                Sau chương trình, học viên có thể hoàn thiện các đầu ra bán hàng cụ thể:
              </p>
              <div className="space-y-3">
                {OFFLINE_OUTPUTS.map((output, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-sm font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
