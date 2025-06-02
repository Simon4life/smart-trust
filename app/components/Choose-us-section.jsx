import { User, Globe, WholeWord, } from "lucide-react";
import { FaHeadSet, FaPeopleArrows, FaPhoneAlt, FaShieldAlt, } from "react-icons/fa"
import { LiaSitemapSolid } from "react-icons/lia";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
const features = [
    {
        title: "Expertise You Can Trust",
        description:
            "Our skilled engineers and consultants deliver tailored solutions across ICT, medical, and enterprise sectors.",
        icon: <User />,
    },
    {
        title: "Top-Tier Brand Access",
        description:
            "We distribute products from over 50 global tech leaders like Microsoft, Cisco, Dell, and Huawei.",
        icon: <Globe />,
    },
    {
        title: "End-to-End Service",
        description:
            "From procurement to maintenance, we manage the full lifecycle of your projects with precision.",
        icon: <LiaSitemapSolid />,
    },
    {
        title: "Local Empowerment",
        description:
            "We prioritize local manpower and skills development to boost regional capacity and growth.",
        icon: <WholeWord />,
    },
    {
        title: "Zero-Accident Safety Record",
        description:
            "Safety isn’t optional. Our operations meet the highest standards for health and workplace safety.",
        icon: <AiTwotoneSafetyCertificate />,
    },
    {
        title: "24/7 Support & Reliability",
        description:
            "We’re with you before, during, and after delivery—providing fast, expert support when you need it.",
        icon: <FaPhoneAlt />,
    },
];



const WhyChooseUs = () => {

    return (
        <section className="bg-gray-100 py-16">
            <div className="py-16 max-w-7xl mx-auto px-6" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">
                    Why Choose Smart Trust Limited
                </h2>
                <p className="text-gray-600 mb-12">
                    We go beyond supply—we build solutions, relationships, and results.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 text-left"
                        >
                            <div className="text-purple-700  mb-4">
                                <span className="text-4xl block">
                                    {feature.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs