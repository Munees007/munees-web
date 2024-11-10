import {easeInOut, motion} from "framer-motion";
import { ReactNode } from "react";
import { FaHandPointLeft } from "react-icons/fa";
interface InfoProps{
    className?:string,
    child:ReactNode
}
export const Info:React.FC<InfoProps> = ({className,child})=>{

    return(
        <motion.div 
            initial={{
                
                opacity:0,
                scale:0.8        
            }}
            drag
            dragSnapToOrigin
            animate={{
                
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1,
                ease:easeInOut,
            }}
        className={
            `flex gap-2 text-black ${className} bg-transparent absolute`}>
            <FaHandPointLeft size={30}/>
            {child}
        </motion.div>
    );

}