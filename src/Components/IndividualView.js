import React from "react";
import { useEffect, useState } from "react";
import Gift from "../Miscellaneous/gift.png";
import Coin from "../Miscellaneous/coin.png";
import calender from "../Miscellaneous/Group.svg";
import gmailicon from "../Miscellaneous/Gmail_icon_(2020) 1.svg";
import drive from "../Miscellaneous/image 9.svg";
import logo from "../Miscellaneous/LOGO 9.svg";
import tick from "../Miscellaneous/Tick.svg";
import gmailblack from "../Miscellaneous/gmailblack.svg";
import whatsappblack from "../Miscellaneous/whatsappblack.svg";
import copy from "../Miscellaneous/copy.svg";
import share from "../Miscellaneous/shareblack.svg";
import pencil from "../Miscellaneous/image 46.svg";
const IndividualView = () => {
    const [dataofdate, setdataofdate] = useState();
    const [show, setshow] = useState(0);
    const [name, setname] = "chetan";
    const [togle, settogle] = useState(0);
    useEffect(() => {
        setdataofdate(today);
        document.getElementById("date").addEventListener("change", function () {
            const cd = this.value;
            setdataofdate(cd);
            if (cd === today) {
                setshow(0);
            } else if (cd === yesterday) {
                setshow(1);
            } else {
                document.getElementById("yesterday").style.backgroundColor =
                    "#EFEFEFCC";
                document.getElementById("today").style.backgroundColor = "#EFEFEFCC";
            }
        });
    }, []);
    useEffect(() => {
        console.log("hello");
        console.log(dataofdate);
        console.log(today);
        if (dataofdate === today) {
            setshow(0);
        } else if (dataofdate === yesterday) {
            setshow(1);
        } else {
            setshow(2);
        }
    }, [dataofdate]);
    useEffect(() => {
        console.log("third");
        if (show === 0) {
            setdataofdate(today);
            document.getElementById("today").style.backgroundColor = "#FFE071";
            document.getElementById("yesterday").style.backgroundColor = "#EFEFEFCC";
        } else if (show === 1) {
            setdataofdate(yesterday);
            document.getElementById("yesterday").style.backgroundColor = "#FFE071";
            document.getElementById("today").style.backgroundColor = "#EFEFEFCC";
        }
    }, [show]);
    const tamp = new Date();
    const day = ("0" + tamp.getDate()).slice(-2);
    const month = ("0" + (tamp.getMonth() + 1)).slice(-2);
    const year = tamp.getFullYear();
    const today = `${year}-${month}-${day}`;
    tamp.setDate(tamp.getDate() - 1);
    const pday = ("0" + tamp.getDate()).slice(-2);
    const pmonth = ("0" + (tamp.getMonth() + 1)).slice(-2);
    const pyear = tamp.getFullYear();
    const yesterday = `${pyear}-${pmonth}-${pday}`;

    return (
        <>
            {/* heading */}
            <div className="flex justify-center items-center py-5 gap-x-4 w-screen">
                <img src={logo} className="w-[55px] h-[60px]" alt="logo" />
                <h1 className="font-fredoka text-[35px] font-semibold">
                    We Report Work
                </h1>
            </div>

            <div className="flex justify-between w-[1160px] mx-auto">
                {/* plan icon  */}
                <div className="border-blue-500 border-[2px] flex space-x-2 item-center bg-white rounded-xl p-2 w-[281px] h-[89px] ">
                    <img
                        src={Gift}
                        alt="gift-icon"
                        className="w-[36px] h-[37px] my-auto m-2"
                    ></img>
                    <div className="my-auto leading-8">
                        <p className="text-[16px] leading-3 font-dmSans font-bold">
                            Your Plan: FREE (LIMITED)
                        </p>
                        <a
                            className="text-[16px] font-dmSans text-blue-600 underline font-bold cursor-pointer"
                            href="#"
                        >
                            Explore plans / Top Up
                        </a>
                    </div>
                </div>
                {/* coins icon  */}
                <div className="border-blue-500 border-[2px] flex space-x-2 item-center bg-white rounded-xl  w-[233px] h-[89px] p-2 ">
                    <img
                        className="w-[62px] h-[62px] my-auto"
                        src={Coin}
                        alt="coin-icon"
                    ></img>
                    <div className="leading-8">
                        <p className="text-[20px] font-dmSans font-bold">CREDITS</p>
                        <p className="text-[40px] font-black  font-noto">1000</p>
                    </div>
                </div>
            </div>

            <div className="w-[1160px] h-[636px]  mx-auto space-y-8">
                {/* user description  */}
                <h1 className="font-bold text-[50px] font-dmsans pt-20">
                    Welcome, {name}
                </h1>

                <div className="flex justify-between">
                    {/* your work summary  */}
                    <div className="flex gap-x-3">
                        <div className="w-[10px] h-[63px] bg-[#FBBC05]"></div>
                        <div>
                            <h3 className="font-bold text-[25px]">Your work summary</h3>
                            <p className="text-[12px]">
                                Connect your <span className="text-[#4285F4]">Google</span>
                                accounts to see the summary of your work activities. Ready?
                            </p>
                        </div>
                    </div>

                    {/* date changer  */}
                    <div className="flex space-x-3">
                        <button
                            className="flex px-2  py-1 rounded-lg h-[32px] text-center cursor-pointer "
                            onClick={() => {
                                setshow(1);
                            }}
                            id="yesterday"
                        >
                            {show == 1 ? <img src={tick} alt="tickmark"></img> : <></>}
                            Yesterday
                        </button>
                        <button
                            className="flex px-2  py-1 rounded-lg h-[32px] cursor-pointer"
                            onClick={() => {
                                setshow(0);
                            }}
                            id="today"
                        >
                            {show == 0 ? <img src={tick} alt="tickmark"></img> : <></>}
                            Today
                        </button>
                        <span className="inline-block relative w-[18px] h-[18px] cursor-pointer">
                            <span className="absolute left-0 top-0 w-full h-full  p-4  bg-center bg-no-repeat rounded-lg  bg-[#EFEFEFCC] cursor-pointer"></span>

                            <input
                                id="date"
                                type="date"
                                max={today}
                                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer box-border m-2 scale-150 "
                            ></input>
                        </span>
                    </div>
                </div>

                {/* summary toggler */}
                <div className="w-[1161px] h-[50px] flex justify-between items-center bg-white rounded-full border-[1px] shadow-md">
                    <div
                        className="font-dmSans font-bold text-[20px] flex justify-center items-center w-full h-full rounded-full relative cursor-pointer"
                        onClick={() => {
                            settogle(0);
                        }}
                        id="togleAll"
                    >
                        {togle == 0 ? (
                            <div className="absolute   w-full h-full rounded-full border-[#D9D9D9] border-[1px] shadow-lg"></div>
                        ) : (
                            <></>
                        )}{" "}
                        All Tools
                    </div>
                    <div
                        className="flex font-dmSans font-bold text-[20px] justify-center items-center   w-full h-full gap-x-3 rounded-full relative cursor-pointer"
                        onClick={() => {
                            console.log("hello");
                            settogle(1);
                        }}
                        id="togleGmail"
                    >
                        {togle == 1 ? (
                            <div className="absolute   w-full h-full rounded-full border-[#D9D9D9] border-[1px] shadow-lg"></div>
                        ) : (
                            <></>
                        )}
                        <img src={gmailicon} className="h-[18px] w-[24px]"></img>
                        Gmail
                    </div>
                    <div
                        className="flex font-dmSans font-bold text-[20px] justify-center items-center  w-full h-full gap-x-3 rounded-full relative cursor-pointer"
                        onClick={() => {
                            settogle(2);
                        }}
                        id="togleCalendar"
                    >
                        {togle == 2 ? (
                            <div className="absolute   w-full h-full rounded-full border-[#D9D9D9] border-[1px] shadow-lg"></div>
                        ) : (
                            <></>
                        )}
                        <img src={calender} className="h-[18px] "></img>
                        Calender
                    </div>
                    <div
                        className="flex font-dmSans font-bold text-[20px] items-center justify-center  w-full h-full gap-x-3 rounded-full relative cursor-pointer"
                        onClick={() => {
                            settogle(3);
                        }}
                        id="togleDrive"
                    >
                        {togle == 3 ? (
                            <div className="absolute   w-full h-full rounded-full border-[#D9D9D9] border-[1px] shadow-lg"></div>
                        ) : (
                            <></>
                        )}
                        <img src={drive} className="h-[18px]"></img>
                        Drive
                    </div>
                </div>

                {/* summary display box  */}
                <div className=" w-full h-[648px] rounded-lg bg-white flex items-center justify-center relative">
                    {/* summary desc before summarizing the data  */}
                    <div className="">
                        <div className="flex gap-x-4 justify-center items-center">
                            <img src={gmailicon} alt="gmail-icon"></img>
                            <img src={calender} alt="calendar-icon"></img>
                            <img src={drive} alt="drive-icon" className="w-6"></img>
                        </div>
                        <p className="font-bold text-[18px] justify-center items-center text-center font-dmSans w-[20vw] tracking-wider leading-8">
                            Your<span className="text-[#4285F4]"> work summary </span>will
                            populate here, connect your Google Tools in the input section
                            below.
                        </p>
                    </div>

                    {/* share summary and edit template  */}
                    <div className="flex justify-between  items-center absolute bottom-0 w-full m-6 px-10">
                        <div className="space-x-3">
                            <button className="w-[50px] h-[50px] bg-[#D4D9DCCF] rounded-xl shadow-md shadow-gray-600">
                                {" "}
                                <img src={gmailblack} alt="gmail" className="w-6 mx-auto"></img>
                            </button>
                            <button className="w-[50px] h-[50px] bg-[#D4D9DCCF] rounded-xl shadow-md shadow-gray-600">
                                {" "}
                                <img
                                    src={whatsappblack}
                                    alt="whatsapp"
                                    className="w-6 mx-auto"
                                ></img>
                            </button>
                            <button className="w-[50px] h-[50px] bg-[#D4D9DCCF] rounded-xl shadow-md shadow-gray-600">
                                {" "}
                                <img src={copy} alt="copy" className="w-6 mx-auto"></img>
                            </button>
                            <button className="w-[50px] h-[50px] bg-[#D4D9DCCF] rounded-xl shadow-md shadow-gray-600">
                                {" "}
                                <img src={share} alt="share" className="w-6 mx-auto"></img>
                            </button>
                        </div>
                        <button className="font-dmSans font-bold text-[20px] w-[146px] h-[49px] bg-[#D4D9DCCF] rounded-xl shadow-md shadow-gray-600">
                            Summarize
                        </button>
                        <button className="flex font-dmSans font-bold text-[15px] w-[184px] h-[53px] rounded-xl bg-[#D4D9DCCF] justify-center items-center shadow-md shadow-gray-600">
                            <img src={pencil}></img>EDIT TEMPLATE
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default IndividualView;
