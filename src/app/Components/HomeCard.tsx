import Image from "next/image";
import { useTheme } from "../Providers/ThemeProvider";
import {motion} from "framer-motion";

const HomeCard = () => {
  const  {isDarkTheme} = useTheme();

  
  return (
    <motion.div
      initial={{
        translateY:500
      }}
      animate={{
        translateY:0
      }}
      transition={{
        duration:1,
        type:"spring",
        ease:"easeInOut"
      }}
    className={`transition-all duration-[1s] z-0 ease-in-out flex flex-col w-full items-center ${isDarkTheme ? "text-white" : "text-black"}  justify-center overflow-y-hidden`}>
      <div className={`w-full font-specailElite flex  items-center justify-between`}>
        <div className="flex m-10 ">
          <div className="flex flex-col  gap-10">
            <p className="ml-10 text-4xl">Hi, I am Muneeswaran</p>
            <p className="tracking-widest justify-end text-2xl text-center">
              Driven to Create impact through innovative digital solutions,
              forging memorable experiences that resonate.
            </p>
          </div>
        </div>
        <div>
          <div className={`w-72 mr-10  h-72 ${isDarkTheme ? "border-white" : "border-black"} rounded-full border-2 items-center justify-center flex`}>
            <Image src={"/next.svg"} alt="nextJS_Logo" width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="relative">
        <button className={`absolute mt-20 bg-[#006C70] border-2 border-white px-5 rounded-md py-1`}>Resume</button>
      </div>
    
    </motion.div>
  );
};

export default HomeCard;
