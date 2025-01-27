import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function StratMaintenance() {
    return (
        <>
        <Head>
            <title>Strata Maintenance</title>
            <meta name="description" content="more info about the Strata Maintenance cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Strata Maintenance , Strata Maintenance in australia, Strata Maintenance cleaning services company in australia, Strata Maintenance cleaing company in australia, Strata Maintenance cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/hospital_cleaning_header.jpg"
                alt="a clean hospital room with hospital beds"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Adhy from Unsplash"
            />
            <h2 className={ServiceStyle.header_text}>
                Strata Maintenance
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our Strata maintenance services are designed to provide homeowners with a proactive cleaning solution that helps to maintain the cleanliness and appearance of their property over time. By regularly scheduling our strata maintenance services, homeowners can ensure that their property stays in a clean and presentable condition without the need for more extensive cleaning services in the future. At Good-Day Professional Services, we are committed to providing our customers with a reliable and efficient cleaning solution that meets their unique needs and helps to maintain the value of their property over time.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our strata maintenance services typically include:    
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
                        Vaccuming
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We vacuum carpets and floors throughout the home to remove dirt and debris.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Bathroom Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean all surfaces in the bathroom, including toilets, showers, tubs, sinks, and floors.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Dusting
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We dust all surfaces throughout the home, including furniture, shelves, and baseboards.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Trash Removal
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We remove all the trash and recycling from the home without any residual.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        window cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We clean windows and glass surfaces throughout the home.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default StratMaintenance;