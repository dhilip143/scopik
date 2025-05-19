
function Partners() {
    
    const logos = [
        '/src/assets/19.png',
        '/src/assets/17.png',
        '/src/assets/18.png',
        '/src/assets/20.png',
        '/src/assets/21.png',
      ];

    return(
        <>

    <div className="flex flex-col justify-center items-center bg-white">
    <div className="text-center text-[#00005C] pt-10 text-3xl font-[newsreader]">Our Partners</div>
      <div className="w-4/5 overflow-hidden relative mt-10 mb-10">
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