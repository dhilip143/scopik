import { Link } from "react-router-dom";
import foot from "/src/assets/footer.jpg";
import pic from "/src/assets/girl.png";
import logo from "/src/assets/Logo.png";

function Footer() {
  return (
    <>
      <div className="relative z-20 -mt-[80px]">
        <img src={foot} alt="" className="w-full h-[310px] mt-[150px]" />

        <div className="absolute -top-14 bg-gradient-to-r from-[#fcfeff] to-[#fcfdff] w-[1280px] h-[180px] mx-[110px] rounded-lg flex justify-between items-center px-10 z-20">
          <h1 className="text-[#12314a] w-[500px] font-meri text-lg">
            "Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today."
            <br />
            <span className="block mt-2">— Malcolm X</span>
          </h1>
          <div className="absolute bottom-2 right-8">
            <img src={pic} alt="Girl" className="w-[300px] h-[263px]" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[90%] mt-10">
          <div className="flex justify-evenly items-start w-full">
            <div>
              <img src={logo} className="w-24" alt="Logo" />
            </div>

            <div className="w-full max-w-[900px]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left pr-6 text-[#414141]">Links</th>
                    <th className="text-left pr-6 text-[#414141]">Contact</th>
                    <th className="text-left pr-6 text-[#414141]">Email Us</th>
                    <th className="text-left pr-6 text-[#414141]">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-[#414141]">
                      <Link to="/">Home</Link>
                    </td>
                    <td className="text-[#414141]">044- 2842 2843</td>
                    <td className="text-[#414141]">support@scopik.in</td>
                    <td className="text-[#414141]">Srinivasa Nagar,</td>
                  </tr>
                  <tr>
                    <td className="text-[#414141]">
                      <Link>About Us</Link>
                    </td>
                    <td className="text-[#414141]">‪+91 23744 29424‬</td>
                    <td><Link to={"/slogin"}>Admin</Link></td>
                    <td className="text-[#414141]">Madipakkam, Chennai,</td>
                  </tr>
                  <tr>
                    <td className="text-[#414141]">
                      <Link to="/course">Courses</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="text-[#414141]">Tamil Nadu 600091</td>
                  </tr>
                  <tr>
                    <td className="text-[#414141]">Contact</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>

          {/* Copyright Line */}
          <p className="w-full border-t border-gray-500 text-center mt-4 pt-2 text-sm text-gray-700">
            © 2025 Scopik. All rights reserved.
            
          </p>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Footer;