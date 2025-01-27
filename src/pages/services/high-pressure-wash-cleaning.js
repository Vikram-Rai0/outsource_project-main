import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function HighPressure() {
    return (
        <>
        <Head>
            <title>High Pressure Wash Cleaning</title>
            <meta name="description" content="more info about the High Pressure Wash Cleaning services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="High Pressure Wash Cleaning,High Pressure Wash Cleaning,au,australia , High Pressure Wash Cleaning in australia, High Pressure Wash Cleaning services company in australia,High Pressure Wash Cleaning company in australia,High Pressure Wash Cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/gallery3.jpg"
                alt="a person hand holding sanitizer and cleaning with papers"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Francisca from Unsplash"
                quality={100}
            />
            <h2 className={ServiceStyle.header_text}>
                High Pressure Wash Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our high pressure wash cleaning service is designed to remove stubborn dirt and grime from a variety of surfaces, including walls, driveways, sidewalks, and more. We use state-of-the-art equipment and techniques to ensure that your surfaces are left looking clean and refreshed.
            <br></br>
            <br></br>
            At Our House cleaning service, we are committed to providing our customers with a high quality and effective high pressure wash cleaning service. We understand that each surface requires a different approach, which is why we take the time to assess each surface before beginning the cleaning process. Our goal is to leave your property looking clean and refreshed, while also ensuring that our high pressure wash cleaning service is safe and effective for your property.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our experienced cleaning staff are trained to identify the appropriate pressure and cleaning solution for each surface, ensuring that the high pressure wash cleaning service is both effective and safe. Our high pressure wash cleaning service typically includes:    
            </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Wall & Exterior Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use high pressure washing to remove dirt, grime, and stains from the exterior walls of your property.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Driveway & Sidewalk cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use high pressure washing to remove dirt, oil stains, and other contaminants from your driveway and sidewalks.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Patio & Deck Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use high pressure washing to remove dirt and grime from patios and decks, leaving them looking clean and refreshed.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Pool Deck Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use high pressure washing to remove algae, dirt, and other contaminants from your pool deck.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Roof Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use high pressure washing to remove dirt, moss, and other contaminants from your roofs.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        upholstery cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    Our upholstery cleaning service is designed to remove dirt, stains, and odors from furniture upholstery.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default HighPressure;