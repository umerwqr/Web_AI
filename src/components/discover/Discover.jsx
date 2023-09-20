import Image from "next/image";
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Discover = () => {
    const router = useRouter();
    const data = [
        {
            id: 1,
            img: "/images/tool1.png",
            title: "Copywriting",
            tools: "220 Tools",
        },
        {
            id: 2,
            img: "/images/tool2.png",
            title: "Email Assisting",
            tools: "220 Tools",
        },
        {
            id: 3,
            img: "/images/tool3.png",
            title: "General Writing",
            tools: "220 Tools",
        },
        {
            id: 4,
            img: "/images/tool4.png",
            title: "Paraphaser",
            tools: "220 Tools",
        },
        {
            id: 5,
            img: "/images/tool1.png",
            title: "Copywriting",
            tools: "220 Tools",
        },
        {
            id: 6,
            img: "/images/tool2.png",
            title: "Email Assisting",
            tools: "220 Tools",
        },
        {
            id: 7,
            img: "/images/tool3.png",
            title: "General Writing",
            tools: "220 Tools",
        },
        {
            id: 8,
            img: "/images/tool4.png",
            title: "Paraphaser",
            tools: "220 Tools",
        },
    ];
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <h1 className="text-[32px] md:text-[40px] font-[800] bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    Categories
                </h1>
                <p className="text-[18px] font-[500] text-black dark:text-[#FFF] md:px-[15rem] pt-5">
                    These are the tools and posts you have favourited. You can remove them
                    from your favourites by clicking the bookmark icon.{" "}
                </p>
                <div className="mt-10 flex items-center gap-2 md:gap-5">
                    <div className="relative w-[230px] md:w-[490px]  bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md mx-auto p-[1px]">
                        <div className="bg-white dark:bg-primary-dark rounded-md">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <AiOutlineSearch size={25} />
                            </div>
                            <input
                                className="block md:text-[16px] text-[12px] w-full pl-5 pr-3 h-[50px] rounded-md border-none  bg-opacity-5 bg-transparent focus:ring-0 focus:outline-none focus:ring-opacity-0"
                                type="text"
                                placeholder="Text"
                            />
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <div className=" bg-gradient-to-br from-[#27B6D7] via-[#526bc454] to-[#15CADF54] bg-opacity-50 rounded-md mx-auto p-[1px]">
                            <button
                                className="dark:bg-primary-dark bg-white flex  justify-center items-center gap-3 w-[100px] h-[50px] rounded-md"
                                onClick={toggleDropdown}
                            >
                                Filter
                                <IoFilter size={20} className="text-[#2CD880]" />
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-[100%] w-full py-5 z-10 left-0 mt-2 px-2 backdrop-blur-lg   rounded-[6px] shadow"
                                    style={{ background: "rgba(181, 212, 255, 0.14)" }}
                                >
                                     <div className="flex flex-col justify-start items-start px-3 gap-3 ">
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Text
                                                    </button>
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880]  hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Image
                                                    </button>
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Code
                                                    </button>
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Video
                                                    </button>
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Audio
                                                    </button>
                                                    <button onClick={toggleDropdown} className="dark:text-white text-[14px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in">
                                                        Business
                                                    </button>
                                                </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bg-[#2CD7834F]/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
                <div className="absolute r bg-[#2CD7834F]/10 w-[300px] h-[338px] right-0 rounded-full blur-3xl"></div>
                <div className="flex justify-center items-center my-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="w-[287px] h-[206px] bg-gradient-to-br from-[#15CADF] via-[#13287254] to-[#15CADF] bg-opacity-50 rounded-md mx-auto p-[1px]  "
                            >
                                <div className="w-full p-1 backdrop-blur-2xl bg-white dark:bg-primary-dark/90 h-full rounded-md">
                                    <div className="flex flex-col justify-center items-center py-10  gap-3">
                                        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-primary-dark/80 dark:bg-[#2CD88021]">
                                            <Image
                                                src={item.img}
                                                alt=""
                                                width={512}
                                                height={512}
                                                className=" h-[30px] w-[30px]"
                                            />
                                        </div>
                                        <h1 className="text-[24px] font-[600] ">{item.title}</h1>
                                        <p className="text-[16px] font-[400]">{item.tools}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
