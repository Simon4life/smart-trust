// components/LocationMap.js
const LocationMap = () => {
    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <div className="w-full h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1WTZlfPmZfeXykCXX74U7pTa6Iny8X8I&hl=en&ehbc=2E312F"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default LocationMap