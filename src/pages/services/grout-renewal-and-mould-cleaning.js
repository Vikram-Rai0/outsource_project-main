import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function GroutAndMould() {
    return (
        <>
        <Head>
            <title>Grout Renewal and Mold Cleaning</title>
            <meta name="description" content="more info about the Grout Renewal and Mold Cleaning cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Grout Renewal and Mold Cleaning , Grout Renewal and Mold Cleaning in australia, Grout Renewal and Mold Cleaning cleaning services company in australia, Grout Renewal and Mold Cleaning cleaing company in australia, Grout Renewal and Mold Cleaning cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/grout-header.jpg"
                alt="a window and a bucket of cleaning utensills"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
            />
            <h2 className={ServiceStyle.header_text}>
                Grout Renewal and Mould Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            At Our House cleaning service, we understand that grout and mold can be persistent problems in many homes and businesses. Thats why we offer a grout renewal and mold cleaning service to help keep your property looking and feeling clean and healthy.
            <br></br>
            <br></br>
            Grout is a porous material that can trap dirt, dust, and other debris, which can cause discoloration and create an unsightly appearance. Our grout renewal service involves a deep cleaning process that helps to remove dirt, grime, and other debris from your grout lines, leaving them looking clean and refreshed. We use specialized equipment and cleaning agents to ensure that all dirt and debris are removed from your grout, and we can even seal the grout to help prevent future discoloration.
            <br></br>
            <br></br>
            Mold is a common problem in many homes and businesses, and it can cause a variety of health problems, including respiratory issues and allergic reactions. Our mold cleaning service involves a thorough cleaning and disinfecting process to remove all traces of mold from your property. We use specialized equipment and cleaning agents to ensure that all mold spores are removed, and we can even perform air quality testing to ensure that your property is safe and healthy.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
                Our grout renewal and mold cleaning service typically includes:    
            </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Customer Concerns
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        We first consider your concerns before starting our cleaing so we always make good outcome.
                        </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Pre-inspection
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We inspect your property to determine the extent of the problem and the best cleaning method.   
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Pre-treatment
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We apply a pre-treatment solution to the affected areas to help loosen dirt, grime, and mold   
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Deep Cleaning
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use specialized equipment and cleaning agents to remove all dirt, grime, and mold from your grout lines and surfaces.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Disinfecting
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use disinfectants to kill all mold spores and prevent future growth.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Post treatment
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We apply a post-treatment solution to help protect your grout and prevent future discoloration.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default GroutAndMould;