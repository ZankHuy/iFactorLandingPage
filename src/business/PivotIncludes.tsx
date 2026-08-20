import { Check, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "./types";

export default function PivotIncludes() {
  return (
    <section className="py-8 sm:py-24 bg-white font-sans relative overflow-hidden" id="includes-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">BẢNG GIÁ DỊCH VỤ</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            BA CẤP ĐỘ<br />
            <span className="text-red-600">HỢP TÁC</span>
          </h2>
          <p className="text-slate-600 font-light text-sm mt-4 leading-relaxed">
            Mô hình hợp tác được thiết kế theo mức độ sẵn sàng và mục tiêu tăng trưởng của từng doanh nghiệp.
          </p>
        </div>

        {/* 3 Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.id === "hybrid-academy";
            
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-[32px] p-6 sm:p-8 relative flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isPopular
                    ? "border-4 border-red-600 shadow-2xl relative lg:-translate-y-4 scale-[1.01]"
                    : "border border-slate-200 shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                    PHỔ BIẾN NHẤT
                  </div>
                )}

                {/* Header */}
                <div className="text-center pb-6 border-b border-slate-100 mt-2">
                  <h3 className="font-sans font-extrabold text-2xl text-slate-950">
                    {plan.name}
                  </h3>
                  {plan.title && (
                    <p className="text-xs font-black uppercase text-slate-600 mt-2 tracking-wide">
                      {plan.title}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{plan.desc}</p>
                </div>

                {/* Features */}
                <div className="py-6 flex-1">
                  <div className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full font-extrabold px-6 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer ${
                      isPopular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-500">
            Có thể bắt đầu từ nền tảng học đến chương trình thực chiến. Phạm vi triển khai, KPI và ngân sách được thống nhất riêng.
          </p>
        </div>

      </div>
    </section>
  );
}
