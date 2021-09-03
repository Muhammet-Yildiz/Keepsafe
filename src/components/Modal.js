import { motion } from "framer-motion";


const Modal = ({selectedImage , setSelectedImage}) => {


    const handlerClick = (e) => {

        if (e.target.className.includes("backdrop")) {
            setSelectedImage(null)
        }

    }


    return (
        <motion.div
        initial={{opacity: 0}}
        animate ={{opacity:1}}
        className= "backdrop" onClick={handlerClick} >
            <motion.img src={ selectedImage } alt="larged pic "
            initial ={{y  :'-100vh'}}
            animate ={{y : 0 }}
            />
        </motion.div>
    )
}

export default Modal ; 