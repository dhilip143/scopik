import learn from "../assets/learning Process image.png";
import use from "../assets/user-edit.png";
import book from "../assets/archive-book.png";
import mobile from "../assets/mobile-programming.png";

function LearningProcess() {
    return (
        <div
            className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${learn})` }}
        >
            <div className="text-[46px] font-medium mb-10 font-news">
            <span className=" text-[#FFFFFF] ">Learning</span> <spam className="text-[#F97316]">Process</spam>
            </div>
            <div className="flex items-start justify-center gap-16">
                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={use} alt="edit" className=" mb-4 rounded-xl p-4" />
                    <h1 className="text-white text-3xl font-semibold mb-2 font-inter">Enrolling the Course</h1>
                    <p className="text-white text-xl ">
                        Find quick answers to the most  <br />
                        questions. Browse below to get the <br />
                        information you need fast.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={book} alt="edit" className=" mb-4 rounded-xl p-4" />
                    <h1 className="text-white text-3xl font-semibold mb-2 font-inter">Attend Assessment’s</h1>
                    <p className="text-white text-xl font-light">
                        Find quick answers to the most  <br />
                        questions. Browse below to get the <br />
                        information you need fast.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={mobile} alt="edit" className=" mb-4 rounded-xl p-4" />
                    <h1 className="text-white text-3xl font-semibold mb-2 font-inter">Collect the Certificate</h1>
                    <p className="text-white text-xl font-light">
                        Find quick answers to the most  <br />
                        questions. Browse below to get the <br />
                        information you need fast.
                    </p>
                </div>
            </div>

            <img src={learn} alt="sco" className="hidden" />
        </div>
    );
}

export default LearningProcess;
