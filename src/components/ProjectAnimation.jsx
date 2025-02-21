import React, { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

const ProjectAnimation = ({ children }) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        scope.current,
        { opacity: 1, scale: 1 },
        { duration: 0.5, delay: 0.25 }
      );
    }
  }, [inView, animate]);

  return (
    <div className="overflow-hidden w-fit relative">
      <motion.div
        ref={scope}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectAnimation;
