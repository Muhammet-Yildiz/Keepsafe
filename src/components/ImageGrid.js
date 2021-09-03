
import React from "react";

import useFirestore from "../hooks/useFirestore";

import { motion } from "framer-motion";


const ImageGrid =({setSelectedImage}) => {

    const {docs} = useFirestore('images') ; 


    return (

        <div className="ImageGrid">

            {docs && docs.map(doc => {
                return (

                <motion.div className="image" key ={doc.id}   
                layout 
                whileHover={{opacity :1 }}
                onClick={()=> setSelectedImage(doc.url)}>

                 <motion.img
                 initial ={{opacity : 0 }}
                 animate ={{opacity :1 }}
                 transition={{delay : 1 }}
                 width="200px" src={doc.url} alt="uploaded pic " />

                </motion.div>)
                

            })}
        </div>
    )

}


export default ImageGrid  ;
