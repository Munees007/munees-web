'use client'
import { ReactHTML, useState } from "react";
import NavBar from "../Components/NavBar";
import HomeCard from "../Components/HomeCard";
import AboutCard from "../Components/AboutCard";
import {motion} from 'framer-motion';
import { useTheme } from "../Providers/ThemeProvider";


const Main = ()=>{
    //background path acording to light or dark mode
    const bg:String = '/finalBg.jpg';
    const {isDarkTheme} = useTheme();
    const [currentPage,setCurrentPage] = useState<JSX.Element>(<HomeCard/>);//state to change page

    const handleCurrentPage = (page:JSX.Element)=>
    {
        setCurrentPage(page);
    }
    return (
        <div 
        className={`transition-all duration-[1s] ease-in-out w-full h-screen ${isDarkTheme ? "dark" : "light"} relative flex overflow-hidden`}
        >
            {
            currentPage.type === HomeCard &&
            <motion.div 
                className="bg absolute cursor-pointer w-full h-screen"
                animate = {{
                    scale: isDarkTheme ? [1,1.01] : [1,0.99],
                }}
                transition={{
                    duration:0.8,
                    repeat:Infinity,
                    repeatType:"mirror",
                    ease:"easeInOut"
                }}
            >       
          </motion.div>
            }
            <NavBar
                handlePageChange={handleCurrentPage}
            />            
            {currentPage}
        </div>
    );
}

export default Main;