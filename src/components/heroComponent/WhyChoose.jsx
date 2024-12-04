// const WhyChoose = () => {
//     const cards = [
//         { num: '01', title: 'Expertise and Experience', cont: 'With years of experience in the sales and marketing industry, our team has a deep understanding of the market.' },
//         { num: '02', title: 'Extensive Network', cont: 'We have an extensive network of partners and clients to ensure seamless service delivery.' },
//         { num: '03', title: 'Customized Solutions', cont: 'We provide tailored solutions that meet the unique needs of every customer.' },
//         { num: '04', title: 'Customer-Centric Approach', cont: 'Our focus is always on delivering the best experience for our customers.' },
//         { num: '05', title: 'Proven Results', cont: 'Our track record speaks for itself with numerous satisfied customers and successful projects.' },
//     ];

//     return (
//         <div className="px-8 py-12">
//             <div className="text-center mb-8">
//                 <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
//                 <p className="text-gray-600">
//                     Whether you&apos;re looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300"
//                     >
//                         <div className="text-4xl font-bold text-indigo-500 mb-4">{card.num}</div>
//                         <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                         <p className="text-gray-600">{card.cont}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WhyChoose;

const WhyChoose = () => {
    const cards = [
        { num: '01', title: 'Expertise and Experience', cont: 'With years of experience in the sales and marketing industry, our team has a deep understanding of the market.' },
        { num: '02', title: 'Extensive Network', cont: 'We have an extensive network of partners and clients to ensure seamless service delivery.' },
        { num: '03', title: 'Customized Solutions', cont: 'We provide tailored solutions that meet the unique needs of every customer.' },
        { num: '04', title: 'Customer-Centric Approach', cont: 'Our focus is always on delivering the best experience for our customers.' },
        { num: '05', title: 'Proven Results', cont: 'Our track record speaks for itself with numerous satisfied customers and successful projects.' },
    ];

    return (
        <div className="px-8 py-12 h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Title and Description */}
                <div className=" text-center ">
                    <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
                    <p className="text-gray-600">
                        Whether you&apos;re looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.
                    </p>
                </div>

                {/* Cards */}
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300 ${index === 1 ? "bg-red-500 text-white" : "bg-white text-gray-600"
                            }`}
                    >
                        <div className="text-4xl font-bold text-indigo-500 mb-4">{card.num}</div>
                        <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                        <p className="text-gray-600">{card.cont}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;
