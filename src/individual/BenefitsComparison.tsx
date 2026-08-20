import { Check, Minus } from "lucide-react";
import { PRICING_PLANS } from "./types";

export default function BenefitsComparison() {
  const benefitLabels = [
    { key: "role", label: "Vai trò" },
    { key: "learningFormat", label: "Hình thức học" },
    { key: "access", label: "Quyền truy cập bài giảng" },
    { key: "community", label: "Cộng đồng học viên" },
    { key: "qa", label: "Hỏi đáp định kỳ" },
    { key: "support", label: "Theo dõi hỗ trợ 1:1" },
    { key: "advisor", label: "Cố vấn chiến lược 90 ngày" },
    { key: "review", label: "Review kênh, content và video" },
  ];

  const getBenefitValue = (plan: typeof PRICING_PLANS[0], key: string): string => {
    const feature = plan.features.find(f => f.startsWith(key === "access" ? "Quyền truy cập" : 
      key === "community" ? "Cộng đồng" :
      key === "qa" ? "Hỏi đáp" :
      key === "support" ? "Theo dõi hỗ" :
      key === "advisor" ? "Cố vấn" :
      key === "review" ? "Review kênh" : ""));
    
    if (!feature) return "—";
    
    if (feature.includes("—")) return "—";
    if (feature.includes("Có")) return "Có";
    
    return feature.split(": ")[1] || feature;
  };

  return (
    <section className="py-16 bg-white font-sans relative overflow-hidden" id="benefits-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Course System Table */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
            <div className="text-center mb-8 space-y-3">
              <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-red-700 bg-red-100 px-4 py-1.5 rounded-full font-sans">
                Hệ thống bài giảng
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl tracking-wider leading-tight text-slate-950 font-sans">
                Nội dung đào tạo chi tiết
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 font-extrabold text-[11px] uppercase text-slate-600 tracking-wider border-b-2 border-slate-200">
                      Bài giảng
                    </th>
                    <th className="text-center py-3 px-4 border-b-2 border-slate-200 w-24">
                      <span className="font-black text-sm text-slate-800">Starter</span>
                    </th>
                    <th className="text-center py-3 px-4 border-b-2 border-red-600 w-24 bg-red-50/30">
                      <span className="font-black text-sm text-red-600">System</span>
                    </th>
                    <th className="text-center py-3 px-4 border-b-2 border-slate-200 w-24">
                      <span className="font-black text-sm text-slate-800">Partner</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Tư duy One Sale Company",
                    "Định vị thương hiệu cá nhân",
                    "AI Project Intelligence – Làm chủ dữ liệu dự án bằng AI",
                    "AI Content Mastery – Viết kịch bản bán hàng bằng AI",
                    "Solo Shooting – Tự quay video chuyên nghiệp một mình",
                    "Video Production – Dựng phim trên điện thoại & máy tính",
                    "AI Design for Sales – Thiết kế hình ảnh bán hàng bằng AI",
                    "Omni-Channel – Phân phối nội dung đa nền tảng",
                    "Livestream Mastery – Bán hàng & thu hút khách hàng trực tiếp",
                    "Digital Traffic – Google Ads, Facebook Ads, TikTok Ads & Đăng tin",
                    "Customer Funnel – Xây hệ thống thu hút & chuyển đổi khách hàng",
                    "Million Dollar Real Estate Sales – Kỹ năng & thực chiến bán hàng BĐS triệu đô",
                  ].map((course, idx) => {
                    const isInStarter = idx < 6;
                    const isInSystem = true;
                    const isInPartner = true;
                    return (
                      <tr key={idx} className="border-b border-slate-200 last:border-0">
                        <td className="py-3 px-4 text-xs text-slate-700">{course}</td>
                        <td className="py-3 px-4 text-center">
                          {isInStarter ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 text-white shadow-sm">
                              <Check size={14} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-200 text-slate-400">
                              <Minus size={14} />
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-red-50/20">
                          {isInSystem ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 text-white shadow-sm">
                              <Check size={14} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-200 text-slate-400">
                              <Minus size={14} />
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {isInPartner ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 text-white shadow-sm">
                              <Check size={14} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-200 text-slate-400">
                              <Minus size={14} />
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-black uppercase text-red-750 tracking-widest font-mono">SO SÁNH GÓI</span>
          <h2 className="font-display font-black text-3xl md:text-4xl tracking-wider leading-tight text-slate-950 mt-3">
            Quyền lợi chi tiết theo gói
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 font-extrabold text-xs uppercase text-slate-600 tracking-wider w-1/4 border-b-2 border-slate-200">
                  Quyền lợi
                </th>
                {PRICING_PLANS.map((plan) => (
                  <th 
                    key={plan.id}
                    className={`text-center py-4 px-4 border-b-2 w-1/4 ${
                      plan.id === "system" ? "border-red-600" : "border-slate-200"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className={`font-black text-lg ${
                        plan.id === "system" ? "text-red-600" : "text-slate-800"
                      }`}>
                        {plan.name}
                      </span>
                      {plan.id === "system" && (
                        <span className="text-[9px] font-bold px-3 py-1 bg-red-600 text-white rounded-full uppercase tracking-wider">
                          KHUYÊN DÙNG
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Vai trò</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Kích hoạt xây kênh TikTok BĐS</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center bg-red-50/30">Chương trình chủ lực One Sale</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Đồng hành triển khai chuyên sâu</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Hình thức học</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Bài giảng + thử thách</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center bg-red-50/30">Bài giảng + workshop + bài tập</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">System + coaching + review</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Quyền truy cập bài giảng</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Nội dung Starter</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center bg-red-50/30">Toàn bộ nội dung System</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Toàn bộ nội dung System</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Cộng đồng học viên</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </td>
                <td className="py-3 px-4 text-center bg-red-50/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Nhóm riêng giới hạn</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Hỏi đáp định kỳ</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Theo chương trình</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center bg-red-50/30">Có</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Ưu tiên chuyên sâu</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Theo dõi hỗ trợ 1:1</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                    <Minus size={14} />
                  </span>
                </td>
                <td className="py-3 px-4 text-center bg-red-50/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                    <Minus size={14} />
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Cố vấn chiến lược 90 ngày</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                    <Minus size={14} />
                  </span>
                </td>
                <td className="py-3 px-4 text-center bg-red-50/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                    <Minus size={14} />
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 px-4 text-xs text-slate-700 font-medium">Review kênh, content và video</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                    <Minus size={14} />
                  </span>
                </td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center bg-red-50/30">Theo nhóm</td>
                <td className="py-3 px-4 text-xs text-slate-600 text-center">Review trực tiếp</td>
              </tr>
              
              {/* Price Row */}
              <tr className="bg-slate-50">
                <td className="py-4 px-4 text-xs text-slate-700 font-extrabold uppercase tracking-wider">Giá niêm yết</td>
                <td className="py-4 px-4 text-center">
                  <span className="text-sm line-through text-slate-400">1.990.000đ</span>
                </td>
                <td className="py-4 px-4 text-center bg-red-50/50">
                  <span className="text-sm line-through text-slate-400">7.900.000đ</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-sm line-through text-slate-400">39.900.000đ</span>
                </td>
              </tr>
              <tr className="border-t-2 border-red-200">
                <td className="py-4 px-4 text-xs text-slate-700 font-extrabold uppercase tracking-wider">Giá ưu đãi</td>
                <td className="py-4 px-4 text-center">
                  <span className="text-2xl font-black text-slate-800">1.490.000đ</span>
                </td>
                <td className="py-4 px-4 text-center bg-red-50">
                  <span className="text-2xl font-black text-red-600">5.900.000đ</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-2xl font-black text-slate-800">29.900.000đ</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
