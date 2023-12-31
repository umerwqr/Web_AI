import React, { useState, useEffect } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { BsBookmarkHeart, BsBookmarkStar } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { BiSolidLock } from "react-icons/bi";
import { db } from "@/config/firebase";
import Link from "next/link";
import cookie from "js-cookie"
import { collection, getDocs } from 'firebase/firestore';
import Loader from "../Loader";
const TopAiTools = ({ searchTerm, Category }) => {

    const [loading, setLoading] = useState(true)

    const router = useRouter();
    const [tools, setTool] = useState(null)

    const filteredTools = tools && tools.filter(item => {
        if (Category) {
            return (
                item.category.toLowerCase() === Category.toLowerCase() &&
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.subCategory.toLowerCase().includes(Category.toLowerCase())
            );
        } else {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });
    const TrendingTools = tools && tools.filter(tool => tool.mode === 'Trending');



    function truncateText(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + ' ...';
        }
        return text;
    }

    
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            console.log("helloo")
            try {
                const querySnapshot = await getDocs(collection(db, "tools"));
                const toolList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTool(toolList);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching users:', error, " error end");
            }
        };
        fetchUsers();
    }, []);

    const [showMore, setShowMore] = useState(false);
    const maxToolsToShow = 4;


    const handleMoreClick = () => {
        setShowMore(!showMore);
    };





    const dateCorrector = (seconds) => {
        let sec = seconds * 1000; // Convert to milliseconds
        let normalDate = new Date(sec).toLocaleDateString('en-GB', { timeZone: 'UTC' });
        return normalDate
    }
    return (
        <>
            {loading ? (
                <div style={{ color: "black", width: "100%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", }}>

                    <Loader />
                </div>
            ) : (
                <div className="relative pb-20">
                    <div className="">
                        <div className="absolute bg-white/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
                    </div>

                    <Wrapper>

                        <div className="flex flex-col justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

                                {/* card  */}
                                <div

                                    className="cursor-pointer w-[330px] md:w-[350px] bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md mx-auto p-[1px]  "
                                >
                                    <div className="flex flex-col  text-center w-full p-1 backdrop-blur-2xl bg-white dark:bg-primary-dark h-full rounded-md">
                                        <h1 className="pt-7">Trending Tools</h1>
                                        <div className="pt-5">
                                            {TrendingTools.slice(0, showMore ? TrendingTools.length : maxToolsToShow).map((tool, toolIndex) => (
                                                <div
                                                    onClick={() => router.push({ pathname: `discover-dynamic`, query: { subject: JSON.stringify(tool && tool) } })}

                                                    key={toolIndex} className="grid grid-cols-2 grid-rows-2 justify-start text-left  py-[30px] px-3">
                                                    <div className="pl-0">
                                                        <p>{dateCorrector(tool.joiningDate.seconds)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-blue-400 hover:text-blue-700">{tool.title}</p>
                                                    </div>
                                                    <div>
                                                        <p className="z-[5] absolute hover:text-primary-blue dark:hover:text-primary-blue transition-all ease-linear duration-200">{tool.user}</p>
                                                    </div>
                                                    <div className="flex gap-1 items-center  ">
                                                        <BsBookmarkStar size={22} />
                                                        <p>{tool.category}</p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        {!showMore && TrendingTools.length > maxToolsToShow ? (
                                            <button onClick={handleMoreClick} className="mt-1 bg-blue-500 text-white px-4 py-1 rounded-md">
                                                More
                                            </button>
                                        ) : TrendingTools.length > maxToolsToShow && (
                                            <button onClick={handleMoreClick} className="mt-1 bg-blue-500 text-white px-4 py-1 rounded-md">
                                                Less
                                            </button>
                                        )
                                        }
                                    </div>
                                </div>

                                {filteredTools && filteredTools.map((item, index) => {



                                    return (
                                        <div
                                            onClick={() => { cookie.set("tool", JSON.stringify(item && item)); router.push({ pathname: `discover-dynamic`, query: { subject: JSON.stringify(item && item) } }) }}
                                            key={index}
                                            className="z-[2] cursor-pointer w-[330px] md:w-[350px] bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md mx-auto p-[1px]  "
                                        >
                                            <div className="w-full  p-1 backdrop-blur-2xl bg-white dark:bg-primary-dark/90 h-full rounded-md">
                                                <Image
                                                    src={item.imageUrl}
                                                    width={1080}
                                                    height={1080}
                                                    alt=""
                                                    className="w-[300px] transition duration-250 hover:scale-[102%] h-[220px] md:w-[320px] md:h-[220px] rounded-[10px] mx-auto  my-3 object-cover"
                                                />
                                                <div className="px-5 flex items-center gap-3">
                                                    <p className="text-[24px] font-[700]">{item.title}</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M18.0348 7.46109C17.7109 7.1225 17.3757 6.77359 17.2494 6.4668C17.1325 6.18578 17.1256 5.72 17.1187 5.26883C17.1059 4.43008 17.0921 3.47961 16.4312 2.81875C15.7704 2.15789 14.8199 2.14414 13.9812 2.13125C13.53 2.12437 13.0642 2.1175 12.7832 2.00062C12.4773 1.8743 12.1275 1.53914 11.7889 1.21516C11.1959 0.645391 10.5222 0 9.625 0C8.72781 0 8.05492 0.645391 7.46109 1.21516C7.1225 1.53914 6.77359 1.8743 6.4668 2.00062C6.1875 2.1175 5.72 2.12437 5.26883 2.13125C4.43008 2.14414 3.47961 2.15789 2.81875 2.81875C2.15789 3.47961 2.14844 4.43008 2.13125 5.26883C2.12437 5.72 2.1175 6.18578 2.00062 6.4668C1.8743 6.77273 1.53914 7.1225 1.21516 7.46109C0.645391 8.05406 0 8.72781 0 9.625C0 10.5222 0.645391 11.1951 1.21516 11.7889C1.53914 12.1275 1.8743 12.4764 2.00062 12.7832C2.1175 13.0642 2.12437 13.53 2.13125 13.9812C2.14414 14.8199 2.15789 15.7704 2.81875 16.4312C3.47961 17.0921 4.43008 17.1059 5.26883 17.1187C5.72 17.1256 6.18578 17.1325 6.4668 17.2494C6.77273 17.3757 7.1225 17.7109 7.46109 18.0348C8.05406 18.6046 8.72781 19.25 9.625 19.25C10.5222 19.25 11.1951 18.6046 11.7889 18.0348C12.1275 17.7109 12.4764 17.3757 12.7832 17.2494C13.0642 17.1325 13.53 17.1256 13.9812 17.1187C14.8199 17.1059 15.7704 17.0921 16.4312 16.4312C17.0921 15.7704 17.1059 14.8199 17.1187 13.9812C17.1256 13.53 17.1325 13.0642 17.2494 12.7832C17.3757 12.4773 17.7109 12.1275 18.0348 11.7889C18.6046 11.1959 19.25 10.5222 19.25 9.625C19.25 8.72781 18.6046 8.05492 18.0348 7.46109ZM13.5489 8.04891L8.73641 12.8614C8.67256 12.9253 8.59673 12.976 8.51327 13.0106C8.42981 13.0452 8.34035 13.063 8.25 13.063C8.15965 13.063 8.07019 13.0452 7.98673 13.0106C7.90327 12.976 7.82744 12.9253 7.76359 12.8614L5.70109 10.7989C5.57209 10.6699 5.49962 10.4949 5.49962 10.3125C5.49962 10.1301 5.57209 9.9551 5.70109 9.82609C5.8301 9.69709 6.00506 9.62462 6.1875 9.62462C6.36994 9.62462 6.5449 9.69709 6.67391 9.82609L8.25 11.403L12.5761 7.07609C12.64 7.01222 12.7158 6.96155 12.7993 6.92698C12.8827 6.89241 12.9722 6.87462 13.0625 6.87462C13.1528 6.87462 13.2423 6.89241 13.3257 6.92698C13.4092 6.96155 13.485 7.01222 13.5489 7.07609C13.6128 7.13997 13.6635 7.2158 13.698 7.29926C13.7326 7.38272 13.7504 7.47217 13.7504 7.5625C13.7504 7.65283 13.7326 7.74228 13.698 7.82574C13.6635 7.9092 13.6128 7.98503 13.5489 8.04891Z"
                                                            fill="#11CFD9"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex px-5 py-2 gap-2 text-[18px] items-start">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span
                                                            key={star}
                                                            className={`star ${item.rating >= star ? 'filled' : ''}`}
                                                        >
                                                            &#9733;
                                                        </span>
                                                    ))}
                                                    <p className="text-gray-500 text-[16px] fot-[400]">
                                                        ( {item.reviews} )
                                                    </p>
                                                </div>
                                                <div className="h-[80px]">
                                                    <p className="text-left pl-5 text-[14px] font-[400]">
                                                        {truncateText(item.detail, 30)}
                                                    </p>
                                                </div>
                                                <div className="ml-5 mt-3 max-w-[120px] bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md p-[1px] ">
                                                    <button className="dark:bg-primary-dark bg-white flex justify-center items-center gap-3  py-1 w-full rounded-md">
                                                        <BiSolidLock size={20} />
                                                        Premium
                                                    </button>
                                                </div>
                                                <div className="pl-5 flex gap-4 mt-3 text-[16px] font-[400]">
                                                    <p>#loremipsum</p>
                                                    <p>#aitool</p>
                                                    <p>#besttool</p>
                                                </div>
                                                <div className="flex gap-4 mx-5  items-center mt-3 mb-3">


                                                    <button className="w-full flex items-center px-10 py-2 justify-center gap-3 text-white dark:text-white rounded-md  bg-gradient-to-r from-blue-400 via-green-500 to-blue-500">
                                                        Visit Website
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="15"
                                                            height="13"
                                                            viewBox="0 0 15 13"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M15 6.25L8.75 -2.73196e-07L7.86875 0.88125L12.6062 5.625L-2.45877e-07 5.625L-3.00516e-07 6.875L12.6062 6.875L7.86875 11.6187L8.75 12.5L15 6.25Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                )}
                            </div>
                            <div className="absolute r bg-white/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
                            <div className="mt-10">
                                {/* <button className="flex items-center gap-3 justify-center w-[217px] h-[50px] border dark:text-white text-primary-blue  border-primary-blue  rounded-md">
                                    Visit Website
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="13"
                                        viewBox="0 0 15 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M15 6.25L8.75 -2.73196e-07L7.86875 0.88125L12.6062 5.625L-2.45877e-07 5.625L-3.00516e-07 6.875L12.6062 6.875L7.86875 11.6187L8.75 12.5L15 6.25Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </Wrapper>
                </div>)}</>
    );
};

export default TopAiTools;
