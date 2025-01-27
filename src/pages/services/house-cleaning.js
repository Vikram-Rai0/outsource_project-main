import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function Service1Page() {
    return (
        <>
        <Head>
            <title>Service1</title>
            <meta name="description" content="more info about the House cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="house cleaing,home cleaing,au,australia , house cleaning in australia, house cleaning services company in australia, house cleaing company in australia, home cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/house_cleaning_header.jpg"
                alt="a clean house living room"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Francisca from Unsplash"
                quality={100}
            />
            <h2 className={ServiceStyle.header_text}>
                House Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our house cleaning service is a professional and reliable cleaning solution that is designed to meet the unique needs of homeowners. Our experienced cleaning staff are trained to clean all areas of the home, including kitchens, bathrooms, bedrooms, and common areas, using eco-friendly cleaning products and techniques. We offer a range of services, including regular cleaning, deep cleaning, and move-in/move-out cleaning. Our move-in/move-out cleaning service is designed to help homeowners ensure that their property is left in a clean and presentable condition, helping to ensure the return of security deposits and a stress-free move-out process. We also offer specialized cleaning services such as carpet cleaning, grout renewal, and mould cleaning to address specific cleaning needs in the home. With our flexible scheduling and affordable pricing, we make it easy for homeowners to keep their homes clean and comfortable. At Our House cleaning service, we are committed to providing our customers with the highest level of service and satisfaction.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our house cleaning services are designed to provide a comprehensive cleaning solution for homeowners. Our services typically include:
                
                 </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Kitchen Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        We clean all surfaces in the kitchen, including countertops, cabinets, appliances, and floors.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Bathroom Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean all surfaces in the bathroom, including toilets, showers, tubs, sinks, and floors    
                      </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Dusting
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We dust all surfaces throughout the home, including furniture, shelves, and baseboards.
                       </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Vaccuming
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We vacuum carpets and sweep floors throughout the home to remove dirt and debris.
                       </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Window Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean windows and glass surfaces throughout the home.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Trash Removal
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We remove all the trash and recycling from the home without any residual.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default Service1Page;