import { useTheme } from "@/app/Providers/ThemeProvider";
import {motion} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { Info } from "./info";
import { BCA } from "./bca";
import { ME } from "./me";

export const Who = ()=>{
    const {isDarkTheme} = useTheme();
    const [onHover,setHover] = useState<boolean>(false);
    const [whichInfo,setWhichInfo] = useState<string>();

    const handleHover = (val:boolean,info:string)=>{
        setHover(val);
        setWhichInfo(info);
    }
    return(
        <motion.div 
            className="who relative w-[28.5rem] h-[35rem] max-sm:w-[18.5rem] max-sm:h-[25rem] max-md:w-[22.5rem] max-md:h-[29rem] flex flex-col items-center gap-3 justify-center"
            initial={{
                translateX :-500,
                scale:0
            }}
            animate={{
                translateX:0,
                scale:1
            }}
            transition={{
                duration:1,
                ease:"easeInOut"
            }}
        >
            <p className="absolute right-8 top-14
            max-sm:right-2 max-sm:top-8 max-sm:text-xl
            max-md:right-4 max-md:top-10 max-md:text-2xl
            text-black text-3xl font-bold">Dev ID</p>
            {
                isDarkTheme ? 
                <Image src={"/darkpic.png"} alt="pic" width={180} height={180}
                    className="max-md:w-32 max-sm:w-30"
                />
                :
                <Image src={"/lightpic.png"} className="mr-10 max-md:mr-5 max-md:w-36 max-sm:w-30" alt="pic" width={220} height={220}/>
            }
            <div className="flex">
            <p className="text-2xl font-bold cursor-pointer text-black"
                onMouseEnter={()=>handleHover(true,"me")}
                onMouseLeave={()=>handleHover(false,"me")}
            >Muneeswaran P</p>
            {
                    onHover && whichInfo ==="me" ? <Info child={<ME/>} className="w-64 ml-48"/> :<></>
            }
            </div>
            <div className="flex">
            <p className="text-2xl font-bold text-black cursor-pointer" onMouseEnter={()=>handleHover(true,"who")}
                    onMouseLeave={()=>handleHover(false,"who")}
                >BCA</p>
                {
                    onHover && whichInfo ==="who" ? <Info child={<BCA/>} className="w-60 ml-16"/> :<></>
                }
            </div>
            <BsQrCode size={80} className="text-black"/>
            <p className="absolute bottom-4 text-2xl text-white max-sm:bottom-1">Developer</p>
        </motion.div>
    );    
}