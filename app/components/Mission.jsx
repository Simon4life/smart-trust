// components/MissionVision.js

export default function MissionVision() {
    return (
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Mission Section */}
          <div data-aos="fade-up">
            <img
              src="/img-2.jpg"
              alt="Our Mission"
              className="shadow-md w-full object-cover h-64 md:h-80"
            />
          </div>
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Smart Trust Limited is committed to exceeding expectations and delivering tangible results.
              With a dedication to continuous improvement and a passion for innovation, we empower organizations
              with the tools and support they need to achieve their goals and unlock their full potential.
            </p>
          </div>
  
          {/* Vision Section */}
          <div className="order-2 md:order-1" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as the leading value-added distributor of global brands in Nigeria, developing new innovations
              and responding to clients’ needs with a high level of professionalism, adaptability, and excellence.
            </p>
          </div>
          <div className="order-1 md:order-2" data-aos="fade-up">
            <img
              src="/img-1.jpg"
              alt="Our Vision"
              className="shadow-md w-full object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>
    );
  }
  