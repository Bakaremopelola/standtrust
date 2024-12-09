const WhyChoose = () => {
    const cards = [
        { num: '01', title: 'Expertise and Experience', cont: 'With years of experience in the sales and marketing industry, our team has a deep understanding of the market.' },
        { num: '02', title: 'Extensive Network', cont: 'We have an extensive network of partners and clients to ensure seamless service delivery.' },
        { num: '03', title: 'Customized Solutions', cont: 'We provide tailored solutions that meet the unique needs of every customer.' },
        { num: '04', title: 'Customer-Centric Approach', cont: 'Our focus is always on delivering the best experience for our customers.' },
        { num: '05', title: 'Proven Results', cont: 'Our track record speaks for itself with numerous satisfied customers and successful projects.' },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center ">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Why Choose Us</h1>
                        <p className="text-lg text-gray-600">
                            Whether you&apos;re looking to switch to solar energy or upgrade your electrical systems, we are committed to providing top-notch solutions tailored to your needs.
                        </p>
                    </div>

                    {/* Cards */}

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 ${index === 1 ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
                                }`}
                        >
                            <div className="text-4xl font-bold mb-4 text-indigo-500">{card.num}</div>
                            <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                            <p className="text-base">{card.cont}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
