import { useState } from "react";
import data from "../data";
import { ToggleCross } from "../Buttons/ToggleCross";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = data.faq;
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto my-10 max-w-6xl px-6">
      <h2 className="mb-6 text-center text-3xl font-bold">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-clip rounded-2xl transition duration-300 ${openIndex === index ? "shadow-brand-pink shadow-md" : "+"}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="bg-brand-blue hover:bg-brand-blue-mid flex w-full items-center justify-between rounded-2xl px-10 py-7"
            >
              <span className="text-[20px] font-semibold text-white">
                {faq.q}
              </span>
              <ToggleCross state={openIndex === index ? "-" : "+"} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } bg-white`}
            >
              <p className="mx-10 my-7 text-[20px] text-gray-600">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
