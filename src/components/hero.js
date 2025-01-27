
import { useRouter } from "next/router";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Hero() {

    let router = useRouter();
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
        hidden: { opacity: 0,y: 100 }
      };
      
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/booking");
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView])

    return (
        <>
            <motion.div 
                className="hero-container"
                ref={ref}
                initial="hidden"
                variants={animationVariants}
                animate={control}
            >
                <div id="hero-details">
                    <h2>The Best Cleaning Service located in <span> Sydney </span>
                    </h2>
                    <p>
                        Only the best professional cleaners to get the job done.
                    </p>
                    <button onClick={handleClick}>
                        Book Now
                    </button>
                </div>

            </motion.div>
            </>
    )
}

export default Hero;
