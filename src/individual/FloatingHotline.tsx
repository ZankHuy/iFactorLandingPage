import { Phone } from "lucide-react";

export default function FloatingHotline() {
  return (
    <a
      href="tel:0345569308"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 group"
    >
      <div className="relative">
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute inset-0 w-full h-full bg-red-400 rounded-full animate-ping opacity-30" />
      </div>
      <span className="font-bold text-sm tracking-wide">0345 569 308</span>
    </a>
  );
}
