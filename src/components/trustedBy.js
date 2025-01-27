import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function TrustedBy() {
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants1 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.1}}
    }
    const animationVariants2 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.2}}
    }
    const animationVariants3 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.3}}
    }
    const animationVariants4 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.4}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    return (
        <div 
            id="trustedby-container"
        >
            <h2>Trusted By the numerous happy clients<span id="emoji_love">&#128150;</span></h2>
            <p>
                Our business is considered highly by our fellow Sydney aussies for best job statisfaction and trust among each other.We always cater to customers every needs so there will always be a place to put trust upon for cleaning services.
            </p>
            <ul>
                <li>
                    <h4>Customers</h4>
                    <h3>1000+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants1}
                        animate={control}
                    >
                        &#128587;
                    </motion.span>
                </li>
                <li>
                    <h4>Properties</h4>
                    <h3>500+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants2}
                        animate={control}
                    >
                        &#127968;
                    </motion.span>
                </li>
                <li>
                    <h4>Sydney Based</h4>
                    <h3>10+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants3}
                        animate={control}
                    >
                        &#127757;
                    </motion.span>
                </li>
                <li>
                    <h4>Workers</h4>
                    <h3>20+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants4}
                        animate={control}
                    >
                        &#128119;
                    </motion.span>
                </li>
            </ul>
        </div>
    )
}

export default TrustedBy;