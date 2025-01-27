import Head from "next/head";
import ContactUs from "@/components/contact";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const servicesData = [
    {
        title: "House Cleaning",
        desc: "House cleaning is the process of removing dirt, dust, and clutter from a home to keep it clean and organized. Regular house cleaning involves tasks such as vacuuming, dusting, and sweeping to maintain a tidy living space. Deep cleaning is a more thorough cleaning that involves cleaning areas that are typically overlooked during regular cleaning, such as baseboards, window sills, and light fixtures. Move-in/move-out cleaning is a specialized service that is designed for individuals who are moving into or out of a home. By keeping a home clean and organized, individuals can enjoy a comfortable and healthy living space.",
        position: "left",
        linkSrc: "/services/house-cleaning",
        imgSrc : "/house_cleaning1.jpg",
        alt: "a women cleanig window of a house with sprays and gloves",
        id: "1"
    },
    {
        title: "Exit Cleaning (End of Lease)",
        desc: "Exit cleaning, also known as move-out cleaning, is a specialized cleaning service that is designed for individuals who are moving out of a rental property. This type of cleaning ensures that the property is left in a clean and presentable condition, helping to ensure the return of the security deposit. Exit cleaning typically involves a thorough cleaning of the entire property, including the kitchen, bathrooms, bedrooms, and common areas. It may also involve additional services such as carpet cleaning or window washing.",
        position: "right",
        linkSrc: "/services/exit-cleaning",
        imgSrc : "/hospital_cleaning.jpg",
        alt: "a person cleaning a hospital equipments",
        id: 2
    },
    {
        title: "Strata Maintenance",
        desc: "Strata maintenance refers to the practice of regularly performing maintenance tasks on equipment or machinery to ensure that it continues to function properly. This type of maintenance is typically performed at regular intervals, such as monthly or quarterly, and involves tasks such as cleaning, lubricating, and inspecting equipment for signs of wear and tear. By performing strata maintenance on a regular basis, businesses can help prevent unexpected equipment failures and extend the lifespan of their equipment.",
        position: "left",
        linkSrc: "/services/strata-maintenance",
        imgSrc : "/office_cleaning.jpg",
        alt: "a man cleaning office spaces",
        id: 3
    },
    {
        title: "Commercial Cleaning",
        desc: "Commercial cleaning refers to the professional cleaning of commercial spaces such as offices, retail stores, and warehouses. This type of cleaning involves specialized equipment and techniques that are designed to clean large, high-traffic areas efficiently and effectively. Commercial cleaning services typically offer a range of cleaning solutions, including regular cleaning, deep cleaning, and specialized cleaning services such as carpet cleaning or window washing. By maintaining a clean and hygienic commercial space, businesses can create a more welcoming and productive environment for employees and customers alike. ",
        position: "right",
        linkSrc: "/services/commercial-cleaning",
        imgSrc : "/commercial_cleaning.jpg",
        alt: "a person mopping and cleanig floor",
        id: 4
    },
    {
        title: "High Pressure Wash Cleaning",
        desc: "High pressure wash cleaning, also known as power washing, is a cleaning method that uses high-pressure water to remove dirt, grime, and other contaminants from surfaces. This method is often used for outdoor cleaning tasks such as cleaning building exteriors, sidewalks, and parking lots. High pressure wash cleaning can be an effective way to remove stubborn stains and dirt that can be difficult to remove with traditional cleaning methods. ",
        position: "left",
        linkSrc: "/services/high-pressure-wash-cleaning",
        imgSrc : "/high-pressure.jpg",
        alt: "a person's hand cleaning table",
        id: 5
    },
    {
        title: "Renovation Cleaning",
        desc: "Renovation cleaning is a specialized cleaning service that is designed for construction or renovation projects. This type of cleaning involves a deep cleaning of the property to remove all construction debris, dust, and dirt left behind by the construction or renovation process. Renovation cleaning typically involves cleaning all surfaces, including floors, walls, windows, and fixtures, as well as the removal of any debris or waste materials.",
        position: "right",
        linkSrc: "/services/renovation-cleaning",
        imgSrc : "/renovation.jpg",
        alt: "a clean room containing chairs, sofa etc",
        id: 6
    },
    {
        title: "Carpet Steam Cleaning",
        desc: "Carpet steam cleaning is a cleaning method that uses hot water extraction to remove dirt, dust, and stains from carpets. The process involves the use of a specialized machine that sprays a mixture of hot water and cleaning solution onto the carpet, and then extracts the water and dirt using a powerful vacuum. The hot water helps to break down dirt and stains, while the vacuum removes the water and dirt from the carpet",
        position: "left",
        linkSrc: "/services/carpet-steam-cleaning",
        imgSrc : "/carpet-steam.jpg",
        alt: "a shoe, carpet and vaccum cleaner",
        id: 7
    },
    {
        title: "Grout Renewal and Mould Cleaning",
        desc: "Grout renewal and mould cleaning are specialized cleaning services that are designed to address specific issues in bathrooms and kitchens. Grout renewal involves the removal of old grout and the application of new grout to restore the appearance and function of tiled surfaces. This can help to prevent water damage and other issues caused by deteriorating grout. Mould cleaning, on the other hand, involves the removal of mould and mildew from surfaces such as tile, grout, and caulking. Mould can be a health hazard, and can cause respiratory issues and other health problems.",
        position: "right",
        linkSrc: "/services/grout-renewal-and-mould-cleaning",
        imgSrc : "/mould-cleaning.jpg",
        alt: "a person cleaning mould utensils with water",
        id: 8
    }
]

function Services() {


    return (
        <>
        <Head>
            <title>Our Services</title>
            <meta name="description" content="Getting to know more about us as a cleaning services located in Australia providing Major Cleaning services like Home cleaning, Office cleaning, School cleaning and many more." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="our services, cleaning services available, cleaning services company in australia, cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
            <div id="services">
                <h2>Our <span>Services</span></h2>
                <Image  
                    alt="cleaning tools"
                    width={600}
                    height={600}
                    src="/cleaning_tools.avif"
                    id="services_header"
                    quality={100}
                />
                <p>
                    At our cleaning services, we offer a wide range of professional cleaning services that are designed to meet the unique needs of our customers. Our team of experienced cleaners are dedicated to providing high-quality cleaning solutions that are effective, reliable, and affordable. Whether you need regular cleaning, deep cleaning, move-in/move-out cleaning, or post-construction cleaning, we have the expertise and equipment to get the job done right. We use eco-friendly products and specialized equipment to ensure that your home or office is cleaned to the highest standards of cleanliness and hygiene. Our commitment to customer satisfaction is unwavering, and we strive to exceed your expectations with every cleaning. Contact us today to learn more about our cleaning services and how we can help keep your space clean and healthy.
                 </p>
                <div id="services-details-list">
                    {
                        servicesData.map((service,index) => {
                            return <ServiceDetails
                                        key={service.id}
                                        title={service.title}
                                        desc={service.desc}
                                        position={service.position}
                                        linkSrc={service.linkSrc}
                                        imgSrc={service.imgSrc}
                                        alt={service.alt}
                                    />
                        } )
                    }
                </div>
            </div>
            <ContactUs />
        </>
    )
}

function ServiceDetails({title,desc,position,linkSrc,imgSrc,alt}) {

    let className = `service-details ${position}`;

    let router = useRouter();

    const hanldeClick = (e) => {
        e.preventDefault();
        router.push(linkSrc);
    }

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.8}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    },[control,inView]);

    return (
        <motion.div 
            className={className}
            ref={ref}
            animate={control}
            variants={animationVariants0}
            initial="hidden"
        >
                    <Image 
                        src={imgSrc}
                        width={400}
                        height={400}
                        alt={alt}
                    />
                    <div>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {desc}
                        </p>
                        <button onClick={hanldeClick}>
                            Read More
                        </button>
                    </div>
        </motion.div>
    )
}

export default Services;