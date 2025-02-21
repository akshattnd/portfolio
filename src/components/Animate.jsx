import React, { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

const Animate = ({ children }) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        scope.current,
        { opacity: 1, y: 0 },
        { duration: 0.75, delay: 0.25, ease: "easeInOut" }
      );
    }
  }, [inView, animate]);

  return (
    <div className="overflow-hidden w-fit relative">
      <motion.div
        ref={scope}
        initial={{ opacity: 0, y: -30 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animate;
