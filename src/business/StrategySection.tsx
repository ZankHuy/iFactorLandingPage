import { ArrowRight, AlertTriangle } from "lucide-react";
import { PROBLEMS } from "./types";

export default function StrategySection() {
  return (
    <section className="py-8 sm:py-24 bg-white font-sans relative overflow-hidden" id="strategy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Col */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Title */}
            <div>
              <span className="text-xs font-black text-red-600 tracking-widest uppercase">VẤN ĐỀ PHỔ BIẾN</span>
              <h2 className="font-display font-black text-3xl md:text-4xl leading-[1.2] text-slate-950 mt-2">
                ĐÀO TẠO NHIỀU,<br />
                <span className="text-red-600">ĐỘI NGŨ VẪN CHƯA CHẠY?</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              Nhiều doanh nghiệp đầu tư mạnh cho đào tạo nhưng kiến thức vẫn chưa chuyển thành kết quả bán hàng. Ba điểm nghẽn phổ biến gồm:
            </p>

            {/* Problem Cards */}
            <div className="space-y-4 mt-6">
              {PROBLEMS.map((prob) => (
                <div 
                  key={prob.id}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-red-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5"><AlertTriangle size={18} /></span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{prob.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{prob.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById("contact-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-600/15 flex items-center gap-2 border-b-2 border-red-700 cursor-pointer"
              >
                <span>Nhận tư vấn giải pháp</span>
                <ArrowRight size={14} className="text-white stroke-[3px]" />
              </button>
            </div>

          </div>

          {/* Right Content - After 6 months */}
          <div className="lg:col-span-6">
            <div className="bg-red-600 rounded-[32px] p-8 sm:p-10 text-white relative overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="font-display font-black text-2xl mb-6">
                  SAU 6 THÁNG,<br />
                  DOANH NGHIỆP SỞ HỮU
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">Một cơ chế đào tạo có thể chuẩn hóa và nhân bản</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">Hệ thống dữ liệu theo dõi tiến độ rõ ràng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">Đầu ra gắn trực tiếp với chiến dịch bán hàng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">01 học viện online mang nhận diện riêng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">Không giới hạn tài khoản học viên</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">12 chuyên đề đào tạo chuẩn hóa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-sm">04 lớp hệ thống vận hành</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
