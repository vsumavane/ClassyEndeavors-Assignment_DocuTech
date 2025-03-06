import { useState, useEffect } from "react";
import data from "../data";

export default function WhyChooseDocuTech() {
  const [selected, setSelected] = useState("trusted");
  const contentData = data.whyDocutech;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        const keys = Object.keys(contentData);
        const currentIndex = keys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [contentData]);

  return (
    <section className="my-10 w-full items-center px-6">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Why Choose DocuTech
      </h2>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-5">
          {Object.keys(contentData).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`hover:text-brand-blue hover:ring-brand-blue w-[420px] rounded-2xl px-8 py-6 text-left text-[20px] font-bold transition ${
                selected === key
                  ? "text-brand-blue ring-brand-blue shadow-brand-pink bg-white shadow-md ring ring-inset"
                  : "text-brand-gray-dark ring-brand-gray-outline bg-white ring ring-inset"
              }`}
            >
              {contentData[key].title}
            </button>
          ))}
        </div>

        <div className="border-brand-blue h-96 w-lg rounded-2xl border bg-white p-4 shadow-md">
          <h3 className="text-lg font-semibold">
            {contentData[selected].title}
          </h3>
          <p className="mt-2 text-gray-600">{contentData[selected].content}</p>
        </div>
      </div>
    </section>
  );
}
