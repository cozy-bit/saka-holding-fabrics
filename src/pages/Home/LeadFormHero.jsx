import { useState } from "react";

export default function LeadFormHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#141d24] px-6 py-14 sm:py-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-white text-2xl sm:text-[28px] font-semibold leading-snug tracking-tight">
          Фабрика «Saka Tekstil» осуществляет прокрас
          <br className="hidden sm:block" /> текстиля на заказ на самых выгодных условиях
        </h1>

        <p className="mt-4 text-[#9aa5ad] text-[15px] sm:text-base">
          Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
        </p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-[#2a3742] bg-[#1a252d] py-6 px-4 text-[#e7b876] text-base">
            Спасибо! Заявка отправлена, мы скоро с вами свяжемся.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:rounded-xl overflow-hidden"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="flex-1 bg-[#1a252d] border border-[#2a3742] sm:border-r-0 rounded-xl sm:rounded-none sm:rounded-l-xl px-4 py-3.5 text-white placeholder-[#7c8891] text-sm focus:outline-none focus:ring-1 focus:ring-[#e7b876]"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="flex-1 bg-[#1a252d] border border-[#2a3742] sm:border-r-0 sm:border-l-0 px-4 py-3.5 text-white placeholder-[#7c8891] text-sm focus:outline-none focus:ring-1 focus:ring-[#e7b876]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш E-mail"
              className="flex-1 bg-[#1a252d] border border-[#2a3742] sm:border-l-0 rounded-xl sm:rounded-none px-4 py-3.5 text-white placeholder-[#7c8891] text-sm focus:outline-none focus:ring-1 focus:ring-[#e7b876]"
            />
            <button
              type="submit"
              className="bg-[#e7b876] hover:bg-[#dda85f] transition-colors text-[#22160a] font-medium text-sm px-6 py-3.5 rounded-xl sm:rounded-none sm:rounded-r-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Отправить
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-[#5f6a72]">
          Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем: спама не будет
        </p>
      </div>
    </div>
  );
}
