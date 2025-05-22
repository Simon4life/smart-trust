import { CheckCircle, TrendingUp, BarChart3, Layers } from "lucide-react";
const features = [
    {
        title: "Fractional Expertise",
        description:
            "Gain access to our Fortune 50 level leadership experience without the cost of a full time executive.",
        content: (
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center border rounded-lg p-2">
                    <div className="text-sm font-medium mb-1">Corporate Level</div>
                    <div className="w-4 h-4 border-b-2 border-l-2 transform rotate-45 -translate-y-1"></div>
                    <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-lg text-sm font-medium mb-1">
                        Business Level
                    </div>
                    <div className="w-4 h-4 border-b-2 border-l-2 transform rotate-45 -translate-y-1"></div>
                    <div className="text-sm font-medium">Functional Level</div>
                </div>
            </div>
        ),
    },
    {
        title: "Tailored Solutions",
        description:
            "Customized operational strategies to meet your unique needs.",
        content: (
            <div className="border rounded-lg p-3 bg-gray-50 shadow-md">
                <div className="text-purple-600 font-medium mb-2">Transformation Model</div>
                <ul className="space-y-1 text-sm">
                    {["Define & Understand", "Plan & Analyze", "Execute", "Review"].map(
                        (step, idx) => (
                            <li key={idx} className="flex justify-between">
                                <span>{idx + 1}. {step}</span>
                                <span className="text-purple-500 font-bold">✔</span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        ),
    },
    {
        title: "Results-Oriented Approach",
        description:
            "Results that can be quantified, leading to improved efficiency, increased profitability, and sustainable growth.",
        content: (
            <div className="flex justify-center items-center">
                <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-purple-200 rounded-full"></div>
                    <div className="absolute inset-6 bg-purple-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
                        B
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
                        Growth
                    </div>
                    <div className="absolute bottom-0 left-0 transform -translate-y-1/2 text-sm">
                        Efficiency
                    </div>
                    <div className="absolute bottom-0 right-0 transform -translate-y-1/2 text-sm">
                        Profitability
                    </div>
                </div>
            </div>
        ),
    },
];

const FeatureCards = () => {


    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Fractional Expertise */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-semibold mb-4">Fractional Expertise</h2>
                <p className="text-gray-600 mb-6">
                    Gain access to our Fortune 50 level leadership experience without the cost of a full time executive.
                </p>
                <div className="flex flex-col items-center space-y-2">
                    <div className="border px-4 py-1 rounded-md shadow-sm">Corporate Level</div>
                    <div className="border px-4 py-1 rounded-md shadow-sm bg-purple-100 text-purple-700 font-medium">Business Level</div>
                    <div className="border px-4 py-1 rounded-md shadow-sm">Functional Level</div>
                </div>
            </div>

            {/* Tailored Solutions */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-semibold mb-4">Tailored Solutions</h2>
                <p className="text-gray-600 mb-6">
                    Customized operational strategies to meet your unique needs
                </p>
                <div className="bg-gray-100 rounded-xl p-4 text-left mx-auto w-fit">
                    <div className="mb-2 font-medium text-purple-700">Transformation Model</div>
                    <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-600" /> Define & Understand</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-600" /> Plan & Analyze</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-600" /> Execute</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-600" /> Review</li>
                    </ul>
                </div>
            </div>

            {/* Results-Oriented Approach */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-semibold mb-4">Results-Oriented Approach</h2>
                <p className="text-gray-600 mb-6">
                    Results that can be quantified, leading to improved efficiency, increased profitability, and sustainable growth
                </p>
                <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="text-purple-600" size={32} />
                    </div>
                    <span className="absolute top-2 right-8 text-sm text-purple-700 font-medium">Growth</span>
                    <span className="absolute left-2 bottom-10 text-sm text-purple-700 font-medium">Efficiency</span>
                    <span className="absolute bottom-2 right-6 text-sm text-purple-700 font-medium">Profitability</span>
                </div>
            </div>
        </section>
    );
}

export default FeatureCards