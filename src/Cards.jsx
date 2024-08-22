import { motion } from "framer-motion";

function Cards(props) {
    return (
        <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            
                <img style={{ width: '60%', borderRadius: '10px' }} src={props.Pic}></img>
                <br />
                <a href={props.link}>{props.name}</a>
        </motion.div>
    )
}

export default Cards

