import { useState } from "react";
import data from "../data"

export default function WhyChooseDocuTech() {
    const [selected, setSelected] = useState("trusted");
    const contentData = data.whyDocutech;

  
    return (
        <section className="w-full items-center my-10 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose DocuTech</h2>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-5">
            {Object.keys(contentData).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`w-[420px] text-[20px] font-bold px-8 py-6 rounded-2xl transition text-left hover:text-brand-blue hover:ring-brand-blue ${
                  selected === key ? "bg-white text-brand-blue ring-inset ring ring-brand-blue shadow-md shadow-brand-pink" : "bg-white text-brand-gray-dark ring-inset ring ring-brand-gray-outline"
                }`}
              >
                {contentData[key].title}
              </button>
            ))}
          </div>
    
          <div className=" w-lg h-96 p-4 bg-white shadow-md rounded-2xl border border-brand-blue">
            <h3 className="text-lg font-semibold">{contentData[selected].title}</h3>
            <p className="mt-2 text-gray-600">{contentData[selected].content}</p>
          </div>
          </div>
          
        </section>
      );
  }