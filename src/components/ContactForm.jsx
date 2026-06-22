import { useState } from "react";

const contactReasons = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];

const ContactForm = () => {
  const [budget, setBudget] = useState(1000);
  const [selected, setSelected] = useState([]);

  const toggleReason = (r) =>
    setSelected((prev) =>
      prev.includes(r)
        ? prev.filter((x) => x !== r)
        : [...prev, r]
    );

  const pct = ((budget - 1000) / (5000 - 1000)) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-3.5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="bg-[#181818] border border-white/[0.06] rounded-xl p-5">
          <label className="text-white text-[13px] font-semibold block mb-3">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full bg-transparent border-b border-white/[0.1] text-white text-[13px] placeholder-[#444] pb-2 outline-none focus:border-[#c5f135] transition-colors"
          />
        </div>

        <div className="bg-[#181818] border border-white/[0.06] rounded-xl p-5">
          <label className="text-white text-[13px] font-semibold block mb-3">
            Email
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="w-full bg-transparent border-b border-white/[0.1] text-white text-[13px] placeholder-[#444] pb-2 outline-none focus:border-[#c5f135] transition-colors"
          />
        </div>
      </div>

      <div className="bg-[#181818] border border-white/[0.06] rounded-xl p-5">
        <label className="text-white text-[13px] font-semibold block mb-4">
          Why are you contacting us?
        </label>

        <div className="grid grid-cols-2 gap-2.5">
          {contactReasons.map((r) => (
            <label
              key={r}
              className={`flex items-center gap-2.5 border rounded-lg px-3.5 py-2.5 cursor-pointer transition-all text-[13px] ${
                selected.includes(r)
                  ? "border-[#c5f135]/40 text-white bg-[#c5f135]/5"
                  : "border-white/[0.08] text-[#888]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                  selected.includes(r)
                    ? "bg-[#c5f135] border-[#c5f135]"
                    : "border-white/20"
                }`}
                onClick={() => toggleReason(r)}
              >
                {selected.includes(r) && (
                  <svg
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                  >
                    <path
                      d="M1 3.5L3.5 6L8 1"
                      stroke="#0d0d0d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {r}
            </label>
          ))}
        </div>
      </div>

      <div className="bg-[#181818] border border-white/[0.06] rounded-xl p-5">
        <label className="text-white text-[13px] font-semibold block mb-1">
          Your Budget
        </label>

        <p className="text-[#555] text-xs mb-4">
          Slide to indicate your budget range
        </p>

        <input
          type="range"
          min={1000}
          max={5000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-[3px] rounded-full appearance-none cursor-pointer outline-none"
          style={{
            background: `linear-gradient(to right, #c5f135 ${pct}%, #2a2a2a ${pct}%)`,
          }}
        />

        <div className="flex justify-between mt-2">
          <span className="text-[#555] text-xs">$1000</span>
          <span className="text-[#c5f135] text-xs font-semibold">
            ${budget.toLocaleString()}
          </span>
          <span className="text-[#555] text-xs">$5000</span>
        </div>
      </div>

      <div className="bg-[#181818] border border-white/[0.06] rounded-xl p-5">
        <label className="text-white text-[13px] font-semibold block mb-3">
          Your Message
        </label>

        <textarea
          placeholder="Type here"
          rows={4}
          className="w-full bg-transparent text-white text-[13px] placeholder-[#444] outline-none resize-none"
        />
      </div>

      <div className="flex justify-center pt-2">
        <button className="bg-lime-400 text-ink-950 font-medium text-sm px-10 py-3 rounded-lg hover:bg-[#a8d420] transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactForm