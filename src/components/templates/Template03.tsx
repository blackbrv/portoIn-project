import { motion } from "framer-motion";

export const InteractivePortfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="h-screen flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-8 border rounded-lg cursor-pointer"
        >
          <h2 className="text-4xl mb-4">3D Animation Project</h2>
          <p className="text-gray-400">Hover to interact</p>
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center bg-blue-900">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          className="p-8"
        >
          <h2 className="text-4xl">Scroll Animation</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};
