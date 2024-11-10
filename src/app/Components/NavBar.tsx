import { FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import HomeCard from "./HomeCard";
import AboutCard from "./AboutCard";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../Providers/ThemeProvider";
import {motion} from "framer-motion";
import { Tooltip } from "react-tooltip";

interface NavBarProps
{
    handlePageChange: (page:JSX.Element) => void,
}

const NavBar:React.FC<NavBarProps> = ({handlePageChange})=>{
    const {isDarkTheme,toggleDarkTheme} = useTheme();
    return (
        <div className={`relative transition-all duration-[1s] items-center w-fit h-screen ${isDarkTheme ? "border-white text-white" : "border-black text-black"} border-r-2 shadow-md shadow-white flex flex-col gap-10 px-2 justify-center`}>
            {
                isDarkTheme ?
                <motion.button className={`absolute top-5 cursor-pointer hover:text-gray-400 active:scale-90`} 
                    onClick={toggleDarkTheme}
                    title="Toggle LightMode"
                    whileTap={{
                        rotate:180
                    }}
                    transition={{
                        duration:1,
                        repeatType:"mirror",
                        repeat:2
                    }}
                >
                    <MdLightMode size={35}/> 
                </motion.button>:
                <motion.button 
                className={`absolute top-5 cursor-pointer hover:text-gray-400 active:scale-90`} 
                onClick={toggleDarkTheme}
                title="Toggle DarkMode"
                whileTap={{
                    rotate:180
                }}
                transition={{
                    duration:1,
                    repeatType:"mirror",
                    repeat:2
                }}
                >
                    <MdDarkMode size={35}/> 
                </motion.button>
            }
            
            <FaHome size={40}   className={` cursor-pointer hover:text-gray-400 active:scale-90`}
                onClick={()=>{handlePageChange(<HomeCard/>)}}
                data-tooltip-id="home"
            />
            <Tooltip content="Home" id="home" className="z-10"></Tooltip>
            <FaPerson size={40} className={` cursor-pointer hover:text-gray-400 active:scale-90`}
                onClick={()=>{handlePageChange(<AboutCard/>)}}
                data-tooltip-id="about"
            />
            <Tooltip content="About Me" id="about" className="z-10"></Tooltip>
        </div>
    );
}

export default NavBar;