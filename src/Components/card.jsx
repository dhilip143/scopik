import image1 from "../assets/ima1.png";
import image2 from "../assets/ima2.png";
import image3 from "../assets/ima3.png";
import image4 from "../assets/ima4.png";
import Home from "../assets/hma1.png"; // ✅ Import background

function Card() {
  const cards = [
    {
      id: 1,
      name: "3D Design",
      description: "Explore the fundamentals of 3D modeling and animation techniques.",
      image: image1,
    },
    {
      id: 2,
      name: "AI Basics",
      description: "Dive into artificial intelligence and machine learning essentials.",
      image: image2,
    },
    {
      id: 3,
      name: "Web Dev",
      description: "Learn how to build responsive and modern web applications.",
      image: image3,
    },
    {
      id: 4,
      name: "AR/VR",
      description: "Understand immersive technologies for AR and VR development.",
      image: image4,
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Home})` }} // ✅ Apply background
    >
      <div className="flex flex-wrap justify-center text-[46px] font-news  fount-medium mb-10 pt-10">
        <span className="text-[#ffffff] mr-2">Choose By</span>
        <span className="text-[#D17418]">Category</span>
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-4 pb-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] h-[400px] relative overflow-hidden rounded-lg shadow-lg group transform transition duration-500 hover:scale-105"
          >
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="absolute inset-0 bg-cover bg-center"
            ></div>

            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent"></div>

            {/* Content */}
            <div
              className="absolute bottom-0 w-full z-20 text-black 
                         translate-y-1/2 group-hover:translate-y-0 
                         transition-transform duration-500 ease-in-out px-4 py-3 flex flex-col"
            >
              <h2 className="text-4xl font-bold mb-28 font-news">
                {card.name}
              </h2>
              <p className="text-sm -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {card.description.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
