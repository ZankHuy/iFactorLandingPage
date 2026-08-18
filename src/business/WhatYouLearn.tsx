import { Monitor, FileText, Video, Award, Check, ArrowRight } from "lucide-react";
import { ACADEMY_FEATURES, PROCESS_STEPS } from "./types";

export default function WhatYouLearn() {
  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden" id="what-you-learn-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-600 tracking-widest uppercase">HỌC VIỆN ONLINE</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 mt-2 leading-tight">
            XÂY DỰNG HỌC VIỆN ONLINE<br />
            <span className="text-red-600">RIÊNG CHO DOANH NGHIỆP</span>
          </h2>
          <p className="text-slate-600 font-light text-sm mt-4 leading-relaxed">
            Học viện được thiết kế theo nhận diện, sản phẩm và nhu cầu riêng của từng doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Academy Features */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-[32px] p-8 sm:p-10">
              
              {/* Academy Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-black text-red-600">12+</div>
                  <div className="text-xs text-slate-600 mt-1">Tháng sử dụng</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-black text-red-600">∞</div>
                  <div className="text-xs text-slate-600 mt-1">Tài khoản học viên</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-black text-red-600">01</div>
                  <div className="text-xs text-slate-600 mt-1">Học viện riêng</div>
                </div>
              </div>

              {/* Features List */}
              <h3 className="font-bold text-lg text-slate-900 mb-4">Quyền lợi bao gồm:</h3>
              <div className="space-y-3">
                {ACADEMY_FEATURES.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </span>
                    <span className="text-sm text-slate-700">{feature.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="lg:col-span-5">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Quy trình xây dựng học viện online</h3>
            
            <div className="space-y-4">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="w-0.5 h-12 bg-slate-200 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const el = document.getElementById("contact-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-red-600/20 cursor-pointer"
          >
            <span>Nhận tư vấn xây dựng học viện</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
