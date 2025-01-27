import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function Service2Page() {
    return (
        <>
        <Head>
            <title>Exit Cleaning (End of Lease)</title>
            <meta name="description" content="more info about the Exit Cleaning (End of Lease) cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Exit Cleaning (End of Lease) , Exit Cleaning (End of Lease) in australia, Exit Cleaning (End of Lease) cleaning services company in australia, Exit Cleaning (End of Lease) cleaing company in australia, Exit Cleaning (End of Lease) cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/office_cleaning_header.jpg"
                alt="a clean office space with a bunch of chairs and desks"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Adlfo from Unsplash"
            />
            <h2 className={ServiceStyle.header_text}>
                Exit Cleaning (End of Lease)
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our exit cleaning services are designed to provide homeowners and renters with a thorough and reliable cleaning solution when they are moving out of a property. Our experienced cleaning staff are trained to clean all areas of the property, ensuring that it is left in a clean and presentable condition for the next occupants or to ensure the return of security deposits.
            <br></br>
            <br></br>
            At Our House cleaning service, we understand that moving can be a stressful process, which is why we offer flexible scheduling and affordable pricing to make the exit cleaning process as stress-free as possible. Our goal is to provide our customers with a reliable and efficient cleaning service that meets their unique needs and ensures a smooth transition from one property to the next.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our Exit cleaning services are designed to provide a comprehensive cleaning solution for homeowners. Our services typically include:
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

export default Service2Page;