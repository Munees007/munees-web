import { useTheme } from "@/app/Providers/ThemeProvider";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

interface CardProps{
    title:string,
    handleShowCard: (card:string) => void
}
export const Card:React.FC<CardProps> = ({title,handleShowCard}) =>{
    const [hovered,setHovered] = useState<boolean>(false);
    const {isDarkTheme} = useTheme();
    return(
        <div onClick={()=>handleShowCard(title)}
         data-tooltip-id="card"
         className={`w-64 cursor-pointer hover:scale-105 h-80 flex flex-col justify-center items-center   rounded-xl ${isDarkTheme ? "bg-[#37293F] shadow-white/15 shadow-lg" :" bg-[#F2DFFA] shadow-black shadow-2xl"} `}>
            <p className={`text-[10rem] cursor-pointer`}>?</p>
            <p className={`text-4xl cursor-pointer`}>{title}</p>
            <Tooltip id="card" content="Click Me" place="top" variant="info"></Tooltip>
        </div>
    );
}