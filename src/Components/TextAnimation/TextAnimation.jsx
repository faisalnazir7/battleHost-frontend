import { motion } from "framer-motion";


const TextAnimation = () => {
  const text = "Flaunt Your Talent!";
  return (
    <motion.div>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.08 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default TextAnimation;