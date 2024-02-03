import React, { useState } from "react";
import tick from "../Miscellaneous/image 4.svg";
import logo from "../Miscellaneous/LOGO 9.svg"
import google from "../Miscellaneous/google.svg"
import { useNavigate } from "react-router-dom";

const LoginUi = () => {
    const [disclaimer, setdisclaimer] = useState(true)
    const navigate = useNavigate();
    return (
        <>
            {/* heading */}
            <div className="flex gap-x-10 justify-center pt-[4vw] mb-[6vw]">
                <img src={logo} alt="company-logo"></img>
                <h1 className=" text-[60px] font-fredoka font-extrabold">We Report Work</h1>
            </div>
            <div className="flex mx-[15vw] justify-between">
                {/* list  */}
                <ul className="space-y-[20px] ">
                    <li className="flex space-x-8 items-center">
                        <img src={tick}></img>
                        <p className="font-bold text-2xl font-noto text-center">
                            Daily Summary Automated
                        </p>
                    </li>
                    <li className="flex space-x-8 items-center">
                        <img src={tick}></img>
                        <p className="font-bold text-2xl font-noto text-center">
                            No Manual Work
                        </p>
                    </li>
                    <li className="flex space-x-8 items-center">
                        <img src={tick}></img>
                        <p className="font-bold text-2xl font-noto text-center">
                            Never miss repoting deadlines
                        </p>
                    </li>

                </ul>
                <div className="w-[458px] h-[285px] border-[#009EF8CF] border-[2px] rounded-md bg-white ">
                    {/* signup div */}

                    <div className="mt-6 mx-8">
                        <h1 className="text-[25px] font-bold font-dmSans">Get Started</h1>
                        <p className="text-[12px] font-normal font-dmSans mt-2 leading-[20px] pr-8">
                            Connect your <span className="text-[#4285F4]">Google</span> account and begin to access your info in a
                            <span className="text-[#4285F4]"> quick</span> and <span className="text[#4285F4]">easy </span>manner.
                        </p>
                        <button type="button" className="test-[14px] font-normal flex font-dmSans border-[#EAEAEACF] border-[0.5px] h-[35px] w-[355.98px] item-center rounded-md  justify-center py-1.5 shadow-md gap-x-2 mt-16 cursor-pointer hover:bg-slate-50" onClick={() => {
                            navigate('/individualView')
                        }}>
                            <img src={google} className="w-5" alt="google-icon"></img>
                            Use Google Account
                        </button>
                        <div className="relative flex justify-center items-center gap-x-2 mt-6">
                            <a className="text-[12px] font-dmSans" href="#">Privacy Policy</a>
                            <div className="w-[2px] h-[18px] bg-[#009EF8CF]"></div>
                            <a className="text-[12px] font-dmSans" href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* disclaimer */}
            {
                disclaimer ? <div className="absolute bg-black bottom-0 p-3 space-y-4">
                    <h1 className="absolute text-white right-0 m-3 text-xl cursor-pointer" onClick={() => {
                        setdisclaimer(!disclaimer);
                    }}>x</h1>
                    <p className="text-[16px] font-medium font-fredoka text-white"><span className="underline">Disclosure</span>: At We Report Work, your trust is important to us. 🫶</p>
                    <p className="text-[16px] font-medium font-fredoka text-white">We are dedicated to maintaining the highest standards of data privacy and security. In alignment to this commitment, our app strictly adheres to the Google API Services User Data Policy, including the Limited Use requirements. We ensure that handling, processing, and storage of such data is conducted in a manner that is fully compliant with the specified policies and requirements. For more information we encourage our users to review the policy.</p>

                </div> : <></>
            }

        </>
    );
};

export default LoginUi;
