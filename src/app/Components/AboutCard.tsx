import Image from "next/image";
import { Card } from "./AboutComponents/Card";
import {motion} from "framer-motion";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Who } from "./AboutComponents/Who";
import { Skill } from "./AboutComponents/Skill";
import { useTheme } from "../Providers/ThemeProvider";
const AboutCard = ()=>{
    const [showCard,setShowCard] = useState<boolean>(false);
    const [currentCard,setCurrentCard] = useState<string>("");
    const {isDarkTheme} = useTheme();
    const handleShowCard = (card:string) =>{
        setCurrentCard(card);
        setShowCard(!showCard);
    }
    return (
        <motion.div 
            initial={
                {
                    translateY:-100
                }
            }
            animate={{
                translateY:0
            }}
            transition={{
                duration:1,
                type:"tween"
            }}
        className={` font-specailElite w-full relative flex flex-col  justify-center`}>
            {!showCard&&<p className={`mt-10 ml-8 absolute  max-md:relative max-sm:relative top-0 left-0 text-5xl`}>About Me</p>}
            <motion.span
                animate={{
                    rotateZ:[0,25,0,-25,0]
                }}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    repeatType:"loop"
                }}
                className="p-0 absolute right-10 top-10"
            >
                <Image src={"/gamepad.png"} alt="*" width={80} height={80}/>
            </motion.span>
            <motion.span
                className={`absolute left-5 bottom-5`}
                animate={{
                    scale:[1,0.8,1.2,1]
                }}
                transition={{
                    duration:1,
                    repeat:Infinity,
                    repeatType:"loop"
                }}
            >
                <Image src={"/skill_about.png"} alt="*" width={50} height={50} />
            </motion.span>
            {
                !showCard &&
                <div className={`p-6 flex max-md:grid 
                justify-evenly
                 w-full
                max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4 max-sm:gap-4
                max-md:justify-center max-sm:justify-center max-sm:overflow-auto max-md:overflow-auto`}>
                <Card handleShowCard={handleShowCard} title="Who am I"/>
                <Card handleShowCard={handleShowCard} title="Skills"/>
                <Card handleShowCard={handleShowCard} title="Focus"/>
            </div>
            }
            {
                showCard &&
                <div className={`w-full transition-all ease-in-out flex justify-center items-center h-screen absolute bg-transparent`}>
                    <CgClose size={40} onClick={()=>setShowCard(false)} className="absolute right-5 top-5 cursor-pointer"/>
                    {
                        //who am i
                        currentCard ==="Who am I" ? <Who/> :
                        currentCard === "Skills" ? <Skill/> : <></>
                    }
                </div>
            }
            
        </motion.div>
    );
}

export default AboutCard;