import logo1 from "../assets/19.png"
import logo2 from "../assets/17.png"
import logo3 from "../assets/18.png"
import logo4 from "../assets/20.png"
import logo5 from "../assets/21.png" 

function Partners() {
    
    const logos = [
       logo1,logo2,logo3,logo4,logo5];

    return(
        <>

    <div className="flex flex-col justify-center items-center bg-[#E6E6E6]">
    <div className="text-center text-[#000000] pt-10 text-3xl font-[newsreader]">Our Partners</div>
      <div className="w-4/5 overflow-hidden relative  mb-10">
        <div
          className="flex animate-scroll whitespace-nowrap "
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-none w-[150px] mx-[30px]">
              <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>

        </>
    );     
};
export default Partners