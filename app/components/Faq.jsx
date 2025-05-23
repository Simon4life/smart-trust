import { useState } from "react";

const faqs = [
    {
        question: "What services does Smart Trust Limited provide?",
        answer:
            "We offer IT solutions, medical and research equipment supply, PPE, project and facility management, and ongoing technical support.",
    },
    {
        question: "Do you work with government and NGOs?",
        answer:
            "Yes, we work with various government agencies and NGOs including ABT Associates, John Snow Inc., REDAID, and CISLAC.",
    },
    {
        question: "Which brands do you distribute?",
        answer:
            "We distribute top global brands like Microsoft, Cisco, Dell, HP, Huawei, Samsung, and more.",
    },
    {
        question: "Where is your office located?",
        answer:
            "Suite 201, Kings Plaza, Plot 307, Ahmadu Bello Way, Federal Capital Territory, Abuja, Nigeria.",
    },
    {
        question: "Do you offer after-sales support?",
        answer:
            "Absolutely! We provide maintenance, training, integration, and 24/7 technical support.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white transition-all duration-500 ease-in-out rounded-lg shadow-sm">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left cursor-pointer p-5 focus:outline-none flex justify-between items-center"
                            >
                                <span className="font-bold text-[#1A032B]">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="p-5 pt-0 text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}