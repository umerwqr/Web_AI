import Image from "next/image";
import React from "react";

const Review = () => {
  const data = [
    {
      userimg: "/images/user1.png",
      username: "James Williams",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg1.png",
    },
    {
      userimg: "/images/user2.png",
      username: "Company Name",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg2.png",
    },
    {
      userimg: "/images/userimg3.jpeg",
      username: "John Doe",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg3.png",
    },
    {
      userimg: "/images/user1.png",
      username: "James Williams",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg1.png",
    },
    {
      userimg: "/images/user2.png",
      username: "Company Name",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg2.png",
    },
    {
      userimg: "/images/userimg3.jpeg",
      username: "John Doe",
      regname: "@james788",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cardimg: "/images/cardimg3.png",
    },
  ];
  return (
    <div className="">
      <div className="absolute md:block hidden left-0 bg-[#2CD7834F]/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
      <div className="absolute md:block hidden r bg-[#2CD7834F]/10 w-[338px] h-[338px] right-0 rounded-full blur-3xl"></div>
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-[32px] md:text-[40px] font-[800] bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Review List
        </h1>

        <p className="text-[18px] font-[500] text-black dark:text-[#FFF] md:px-[15rem] pt-5">
          These are the tools and posts you have favourited. You can remove them
          from your favourites by clicking the bookmark icon.{" "}
        </p>

        <div className="mt-16 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[330px] md:w-[393px] bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md mx-auto p-[1px]"
            >
              <div className="w-full p-1 backdrop-blur-2xl bg-white dark:bg-primary-dark/90 h-full rounded-md">
                <div className="flex flex-col mx-3 my-3">
                  <div className="flex gap-4">
                    <Image
                      src={item.userimg}
                      alt=""
                      width={1080}
                      height={1080}
                      className="w-[50px] h-[50px] object-contain rounded-full"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <p className="text-[24px] font-[600]">{item.username}</p>
                      <p className="text-[16px] font-[400] text-slate-500">
                        {item.regname}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="my-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="107"
                    height="15"
                    viewBox="0 0 107 15"
                    fill="none"
                  >
                    <path
                      d="M7.32445 11.7246L10.8767 13.873C11.5272 14.2668 12.3233 13.6847 12.1521 12.9486L11.2105 8.90845L14.3519 6.18649C14.9254 5.69003 14.6173 4.74846 13.864 4.68855L9.72972 4.3376L8.11194 0.519999C7.82091 -0.173333 6.82799 -0.173333 6.53697 0.519999L4.91919 4.32904L0.784883 4.67999C0.0316343 4.7399 -0.276513 5.68147 0.296983 6.17793L3.43837 8.89989L2.49681 12.94C2.32562 13.6762 3.12167 14.2582 3.7722 13.8645L7.32445 11.7246Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M30.3245 11.7246L33.8767 13.873C34.5272 14.2668 35.3233 13.6847 35.1521 12.9486L34.2105 8.90845L37.3519 6.18649C37.9254 5.69003 37.6173 4.74846 36.864 4.68855L32.7297 4.3376L31.1119 0.519999C30.8209 -0.173333 29.828 -0.173333 29.537 0.519999L27.9192 4.32904L23.7849 4.67999C23.0316 4.7399 22.7235 5.68147 23.297 6.17793L26.4384 8.89989L25.4968 12.94C25.3256 13.6762 26.1217 14.2582 26.7722 13.8645L30.3245 11.7246Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M53.3245 11.7246L56.8767 13.873C57.5272 14.2668 58.3233 13.6847 58.1521 12.9486L57.2105 8.90845L60.3519 6.18649C60.9254 5.69003 60.6173 4.74846 59.864 4.68855L55.7297 4.3376L54.1119 0.519999C53.8209 -0.173333 52.828 -0.173333 52.537 0.519999L50.9192 4.32904L46.7849 4.67999C46.0316 4.7399 45.7235 5.68147 46.297 6.17793L49.4384 8.89989L48.4968 12.94C48.3256 13.6762 49.1217 14.2582 49.7722 13.8645L53.3245 11.7246Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M76.3245 12.1521L79.8767 14.3005C80.5272 14.6943 81.3233 14.1122 81.1521 13.3761L80.2105 9.33595L83.3519 6.61398C83.9254 6.11752 83.6173 5.17596 82.864 5.11604L78.7297 4.7651L77.1119 0.947496C76.8209 0.254165 75.828 0.254165 75.537 0.947496L73.9192 4.75654L69.7849 5.10749C69.0316 5.1674 68.7235 6.10896 69.297 6.60542L72.4384 9.32739L71.4968 13.3675C71.3256 14.1037 72.1217 14.6857 72.7722 14.292L76.3245 12.1521Z"
                      fill="#FF8A00"
                    />
                    <path
                      d="M99.3245 11.7246L102.877 13.873C103.527 14.2668 104.323 13.6847 104.152 12.9486L103.211 8.90845L106.352 6.18649C106.925 5.69003 106.617 4.74846 105.864 4.68855L101.73 4.3376L100.112 0.519999C99.8209 -0.173333 98.828 -0.173333 98.537 0.519999L96.9192 4.32904L92.7849 4.67999C92.0316 4.7399 91.7235 5.68147 92.297 6.17793L95.4384 8.89989L94.4968 12.94C94.3256 13.6762 95.1217 14.2582 95.7722 13.8645L99.3245 11.7246Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <div>
                    <p className="text-left">{item.desc}</p>
                  </div>
                  <div className="my-5">
                    <Image
                      src={item.cardimg}
                      alt=""
                      width={1080}
                      height={1080}
                      className="md:max-w-[340px] md:max-h-[184px] object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute md:block hidden left-0 bg-[#2CD7834F]/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Review;
