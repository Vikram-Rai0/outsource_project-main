import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function Renovation() {
    return (
        <>
        <Head>
            <title>Renovation Cleaning</title>
            <meta name="description" content="more info about the Renovation Cleaning services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Renovation Cleaning,Renovation Cleaning,au,australia , Renovation Cleaning in australia, Renovation Cleaning services company in australia, Renovation Cleaning company in australia, Renovation Cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/gallery1.jpg"
                alt="a clean bathroom"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Francisca from Unsplash"
                quality={100}
            />
            <h2 className={ServiceStyle.header_text}>
                Renovation Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our renovation cleaning services are designed to help homeowners and contractors clean up after a construction or renovation project. We understand that the aftermath of a renovation or construction project can be overwhelming and time-consuming, which is why we are here to help.
            <br></br>
            <br></br>
            At Our House cleaning service, we are committed to providing our customers with a high-quality renovation cleaning service that meets their unique needs. Whether you are a homeowner or contractor, we are here to help make your construction or renovation project a success by providing a clean and safe environment. Contact us today to learn more about our renovation cleaning services and how we can help with your next project.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our experienced cleaning staff are trained to handle all types of construction debris, including drywall dust, sawdust, and other construction-related debris. We use specialized equipment and techniques to ensure that all debris is removed from the construction site, leaving the area clean and ready for use.
            Our renovation cleaning services typically include:
            </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Surface Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        We clean all surfaces, including walls, ceilings, and floors, to remove any leftover debris.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Dusting & Vaccuming
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We dust and vacuum all areas of the property to remove construction-related debris, including drywall dust and sawdust.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Disinfecting Surface
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use specialized cleaning solutions to disinfect all surfaces, ensuring that the property is safe and ready for use.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Hauling Debris
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We haul away all construction-related debris, including drywall, wood, and other materials.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        window cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    Our window cleaning service is designed to provide a streak-free and sparkling clean to all windows, including hard-to-reach windows.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Final Inspection
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We perform a final inspection to ensure that the property is clean and ready for use.    
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default Renovation;