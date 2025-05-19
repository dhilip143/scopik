import image from "../assets/WWHIcon1.png";
import ima from "../assets/WWHIcon3.png";
import img from "../assets/WWHIcon3.png";
import iage from "../assets/WWHIcon4.png";

const dataFetch=[
  {
     img:image,
     value:12836,
     des:"Students"
  },
  {
     img:ima,
     value:"Detailed",
     des:"Classes"
  },
  {
     img:img,
     value:"35+",
     des:"Courses"
  },
  {
     img:iage,
     value:"Professional",
     des:"Staffs"
  }
]


function Future()
{
    return(<>
        <div className="px-32 mt-5">
            <h1 className="font-news font-medium text-[#084D90] text-3xl text-center">Building the Future of Learning</h1>
            <p className="text-center mt-2 font-inter text-[18px] text-[#5B5B5B]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div className="flex justify-evenly items-center mt-4 gap-10">
            {
                dataFetch.map((item,index)=>{
                    return(<div key={index} className="flex flex-col items-center">
                        <img src={item.img} alt="" />
                        <p className="text-[#D17418] font-news font-semibold text-[30px] mt-2">{item.value}</p>
                        <p className="text-[#084D90] font-news text-[26px]   border-b-blue-500">{item.des}</p>
                    </div>)

                })
            }
        </div>
    </>)

}
export default Future