// components/LocationMap.js
const LocationMap = () => {
    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <div className="w-full h-[400px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.720586313965!2d7.421024873996833!3d9.089198588045864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b728579e64b%3A0x53b13e06c35af1dd!2sThe%20Kings%20Plaza!5e0!3m2!1sen!2sng!4v1748029425138!5m2!1sen!2sng" width="100%"
                        height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0 }}></iframe>
                    {/* <iframe
                        src="https://www.google.com/maps/d/embed?mid=1WTZlfPmZfeXykCXX74U7pTa6Iny8X8I&hl=en&ehbc=2E312F"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe> */}
                </div>
            </div>
        </section>
    );
}

export default LocationMap