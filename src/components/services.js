import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
    let router = useRouter();
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0}}
    }
    const animationVariants1 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.1}}
    }
    const animationVariants2 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.2}}
    }
    const animationVariants3 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.3}}
    }
    const animationVariants4 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.4}}
    }
    const animationVariants5 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.5}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/services");
    }
    return (
        <>
            <div id="services-container">
                <Image
                    src="/bw.webp"
                    width={500}
                    height={500}
                    alt="Picture about the people cleaning room"
                    quality={100}
                />
                <h2>Our Services</h2>
                <p>
                    Our business provides numerious cleaning services each with perfect and quality workers. We here have more than 8 types of cleaning and we also can twist around your any request about cleaing services.
                </p>
                <button onClick={handleClick}>
                    Learn more
                </button>
                <div id="service-list">
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants0}
                        animate={control}
                    >
                        <span>&#127969;</span>
                        <h3>House Cleaning</h3>
                    </motion.div>
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants1}
                        animate={control}
                    >
                        <span>&#127970;</span>
                        <h3>Exit Cleaning</h3>
                    </motion.div>
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants2}
                        animate={control}
                    >
                        <span>&#x1F3EC;</span>
                        <h3>Strata Maintenance</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants3}
                        animate={control}
                    >
                        <span>&#127981;</span>
                        <h3>Commercial Cleaning</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants4}
                        animate={control}
                    >
                        <span>&#x1F528;</span>
                        <h3>Renovation Cleaning</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants5}
                        animate={control}
                    >
                        <span>&#x1F6BF;</span>
                        <h3>Steam Cleaning</h3>
                    </motion.div>
                    
                </div>
            </div>
        </>
    )
}

export default Services;