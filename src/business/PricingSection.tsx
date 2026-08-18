import { useState, FormEvent, useRef } from "react";
import { Check, Sparkles, Send, CheckCircle2, Phone, Building2, User, Mail } from "lucide-react";

export default function PricingSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <section
      id="pricing-section"
      className="py-24 bg-slate-50 text-slate-900 font-sans relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase text-red-600 tracking-widest font-mono">LIÊN HỆ TƯ VẤN</span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-wider leading-snug text-slate-900 uppercase">
            BẮT ĐẦU HÀNH TRÌNH<br />
            <span className="text-red-600">XÂY DỰNG ĐỘI NGŨ</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia iFactor sẵn sàng tư vấn và thiết kế giải pháp phù hợp với doanh nghiệp của bạn.
          </p>
        </div>

        {/* Contact Form */}
        <div
          id="contact-section"
          ref={formRef}
          className="max-w-xl mx-auto bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 relative shadow-2xl"
        >
          {!success ? (
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="text-center space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-900 tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles size={12} className="text-red-600 animate-pulse" />
                  ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ
                </span>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900">
                  Nhận tư vấn ngay bây giờ
                </h3>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Họ và Tên:
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Tên Doanh Nghiệp:
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Công ty TNHH ABC"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Số Điện Thoại:
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Email:
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Lời nhắn (tùy chọn):
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cho chúng tôi biết thêm về nhu cầu của bạn..."
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-white font-black bg-red-600 hover:bg-red-700 active:scale-[0.99] rounded-full text-center text-xs tracking-wider transition uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/25 border-b-2 border-red-700"
              >
                {loading ? (
                  <span>ĐANG GỬI...</span>
                ) : (
                  <>
                    <Phone size={14} />
                    <span>NHẬN TƯ VẤN NGAY</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-slate-500 text-center">
                Đội ngũ sẽ liên hệ trong 24h để tư vấn giải pháp phù hợp nhất cho doanh nghiệp.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-extrabold text-2xl text-slate-900">
                  Đăng ký thành công!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <strong className="text-slate-900">{name}</strong>. Đội ngũ iFactor sẽ liên hệ đến số điện thoại <strong className="text-slate-900">{phone}</strong> trong 24 giờ!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSuccess(false);
                    setName("");
                    setCompany("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full hover:bg-slate-700 transition"
                >
                  Đăng ký lại
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
