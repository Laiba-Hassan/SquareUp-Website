import { useState, useRef, useEffect, useCallback } from "react";

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
    <div className="max-w-4xl mx-auto space-y-3.5 py-10 md:py-20 px-4 md:px-20 border-y border-ink-600">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="bg-ink-700 border border-ink-600 rounded-lg p-5">
          <label className="text-white text-lg font-light block mb-3">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full bg-transparent border-b border-white/[0.1] text-white text-md placeholder-[#444] pb-2 outline-none"
          />
        </div>

        <div className="bg-ink-700 border border-ink-600 rounded-lg p-5">
          <label className="text-white text-lg font-light block mb-3">
            Email
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="w-full bg-transparent border-b border-white/[0.1] text-white text-md placeholder-[#444] pb-2 outline-none focus:border-[#c5f135] transition-colors"
          />
        </div>
      </div>

      <div className="bg-ink-700 border border-ink-600 rounded-lg p-5">
        <label className="text-white text-lg font-light block mb-6">
          Why are you contacting us?
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {contactReasons.map((r) => (
            <label
              key={r}
              onClick={() => toggleReason(r)}
              className="flex items-center gap-3 px-3 py-2.5 cursor-pointer"
            >
              <div className="w-7 h-7 rounded border border-ink-700 flex items-center justify-center flex-shrink-0 bg-ink-600">
                {selected.includes(r) && (
                  <i className="ri-check-line text-[#c5f135] text-xl"></i>
                )}
              </div>

              <span className="text-white/80 text-md">{r}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-ink-700 border border-ink-600 rounded-xl p-5">
        <label className="text-white text-lg font-light block mb-1">
          Your Budget
        </label>

        <p className="text-[#555] text-md mb-3 md:text-sm">
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
          <span className="text-white/80 text-sm">$1000</span>
          <span className="text-[#c5f135] text-sm font-light">
            ${budget.toLocaleString()}
          </span>
          <span className="text-white/80 text-sm">$5000</span>
        </div>
      </div>

      <div className="bg-ink-700 border border-ink-600 rounded-xl p-5">
        <label className="text-white text-lg font-light block mb-6">
          Your Message
        </label>

        <textarea
          placeholder="Type here"
          rows={2}
          className="w-full bg-transparent text-white text-md placeholder-[#444] outline-none resize-none border-b border-white/10"
        />

        <div className="border-b border-white/10 mt-8"></div>
      </div>

      <div className="flex justify-center pt-2">
        <button className="bg-lime-400 text-ink-950 font-medium text-md px-8 py-4 rounded-lg hover:bg-lime-300 transition-colors">
          Submit
        </button>
      </div>

    </div>
  );
};

export default ContactForm