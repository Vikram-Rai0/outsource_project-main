import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function Commercial() {
    return (
        <>
        <Head>
            <title>Commercial Cleaning</title>
            <meta name="description" content="more info about the Commercial Cleaning cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Commercial Cleaning , Commercial Cleaning in australia, Commercial Cleaning cleaning services company in australia, Commercial Cleaning cleaing company in australia, Commercial Cleaning cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/commercial_cleaning_header.jpg"
                alt="an animated couple cleaning thier room for others"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
            />
            <h2 className={ServiceStyle.header_text}>
                Commercial Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our commercial cleaning services are designed to provide businesses with a reliable and efficient cleaning solution that helps to maintain a clean and presentable working environment. We understand that a clean and well-maintained workspace is essential to the success of any business, which is why we offer flexible scheduling and affordable pricing to meet the unique needs of our commercial customers.
            <br></br>
            <br></br>
            At Our House cleaning service, we are committed to providing our commercial customers with a reliable and efficient cleaning solution that meets their unique needs. We understand that a clean and well-maintained workspace is essential to the success of any business, and we strive to ensure that our commercial customers can focus on their business operations while we take care of the cleaning.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our experienced cleaning staff are trained to clean all areas of commercial spaces, including offices, warehouses, retail spaces, and more. Our commercial cleaning services typically include:    
            </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Dusting
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We dust all surfaces throughout the commercial space, including furniture, shelves, and baseboards.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Vaccuming & Sweeping
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We vacuum carpets and sweep floors throughout the commercial space to remove dirt and debris.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Trash Removal
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We remove all the trash and recycling from the commercial space wihout any residual.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Restroom Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean and sanitize restrooms, including toilets, sinks, mirrors, and floors.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Kitchen & Breakroom Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean and sanitize kitchen and breakroom areas, including countertops, sinks, microwaves, and refrigerators.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Window Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean windows and glass surfaces throughout the commercial space.    
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default Commercial;