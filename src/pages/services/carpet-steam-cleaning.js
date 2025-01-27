import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function CarpetSteamCleaning() {
    return (
        <>
        <Head>
            <title>Carpet Steam Cleaning</title>
            <meta name="description" content="more info about the carpet steam cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="carpet steam cleaning , carpet steam cleaning in australia, carpet steam cleaning services company in australia, carpet steam cleaning cleaing company in australia, carpet steam cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/carpet-cleaning-header.jpg"
                alt="a women cleaning carpet with vaccum cleaner"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
            />
            <h2 className={ServiceStyle.header_text}>
                Carpet Steam Cleaning
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
            Our carpet steam cleaning service is designed to remove dirt, stains, and allergens from your carpets, leaving them looking and feeling like new. Carpets can hold onto dirt, dust, and other allergens, which can affect the air quality of your home or business. Regular cleaning can help to improve the air quality and prolong the life of your carpets.
            <br></br>
            <br></br>    
            Our experienced cleaning staff uses specialized equipment and techniques to ensure that all dirt, stains, and allergens are removed from your carpets. We begin by vacuuming your carpets to remove loose dirt and debris. We then use a hot water extraction method, also known as steam cleaning, to deep clean your carpets. The hot water is injected into the fibers of your carpet, which helps to loosen dirt, stains, and other debris. The water is then extracted, along with the dirt, using a powerful vacuum.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
            Our carpet steam cleaning service typically includes:
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
                    We inspect your carpets to determine the best cleaning method for your specific needs.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Pre-treatment
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We apply a pre-treatment solution to your carpets to help loosen dirt and stains.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Hot Wate Extraction
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We use hot water extraction to deep clean your carpets and remove dirt, stains, and other debris.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Post-treatment
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We apply a post-treatment solution to your carpets to help protect them from future stains.    
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        Final Inspection
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                    We perform a final inspection to ensure that your carpets are clean and looking their best.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default CarpetSteamCleaning;