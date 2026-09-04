
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start the exit animation after the image has been displayed
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000); // Image stays for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (isExiting) {
      navigate("/account", { replace: true });
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      <motion.img
  src="/assets/welcome.png"
  alt="Welcome"
  className="w-full h-full object-contain"
  initial={{ y: "100%" }}
  animate={{
    y: isExiting ? "-100%" : "0%",
  }}
  transition={{
    duration: 1.8,
    ease: "easeInOut",
  }}
  onAnimationComplete={handleAnimationComplete}
/>
    </div>
  );
};

export default Welcome;
