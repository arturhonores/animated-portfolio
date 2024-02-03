import "./services.scss"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const ref = useRef()
    const isInview = useInView(ref, { margin: "-100px" })
    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // whileInView="animate" animación inicia cuando inicia la vista
            ref={ref}
            // animate={isInview && "animate"} no funciona en mobile
            animate={"animate"}

        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow <br />and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere pariatur, ipsa quaerat sapiente rem harum repudiandae nihil magnam praesentium nam asperiores sed, soluta magni?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere pariatur, ipsa quaerat sapiente rem harum repudiandae nihil magnam praesentium nam asperiores sed, soluta magni?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere pariatur, ipsa quaerat sapiente rem harum repudiandae nihil magnam praesentium nam asperiores sed, soluta magni?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere pariatur, ipsa quaerat sapiente rem harum repudiandae nihil magnam praesentium nam asperiores sed, soluta magni?
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Services