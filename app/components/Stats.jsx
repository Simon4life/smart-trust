
const Stats = () => {
    const statsData = [
        { value: 100, label: "Successfull Projects Delivered", background: "bg-purple-500" },
        { value: 50, label: "Top Global Brands Distributed" },
        { value: 20, label: "Trusted by NGOs & Government agencies" },
        { value: 100, label: "Local Workforce Engagement" },
    ];

    return (
        <section className="py-16 max-w-7xl mx-auto px-6">
            <h1 className="text-center text-3xl md:text-4xl font-bold m-6">Our Impact at a Glance</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 bg-white" data-aos="fade-up">
                {statsData.map((stat, index) => (
                    <div key={index} className={`rounded-lg border border-gray-400 overflow-hidden p-6 flex flex-col items-center text-center ${index == 0 ? "bg-purple-600 text-white" : "bg-gray-300 font-bold text-black"}  ${index == 3 ? "md:col-span-3 w-full" : ""} `}>
                        <h3 className="text-4xl  mb-8">
                            {stat.value}
                        </h3>
                        <p className={`mt-2 py-2 px-3 rounded-2xl ${index == 0 ? "bg-purple-500" : "bg-purple-100"}`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

        </section>

    );
};

export default Stats;