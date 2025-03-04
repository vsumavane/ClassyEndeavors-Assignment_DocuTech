import {useState} from "react"
import data from "../data"
import { ToggleCross } from "../Buttons/ToggleCross";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = data.faq;
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="max-w-6xl mx-auto my-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
  
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-2xl overflow-clip transition duration-300 ${openIndex === index ? "shadow-md shadow-brand-pink" : "+"}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-10 py-7 bg-brand-blue hover:bg-brand-blue-mid rounded-2xl"
              >
                <span className="font-semibold text-white text-[20px]">{faq.q}</span>
                <ToggleCross state={openIndex === index ? "-" : "+"}/>
              </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-white`}>
                  <p className="text-gray-600 mx-10 my-7 text-[20px]">{faq.a}</p>
                </div>
            </div>
          ))}
        </div>
      </section>
    );
  }