import Head from "next/head";
import Image from "next/image";
import {RiCustomerService2Fill} from "react-icons/ri";
import {HiUserGroup} from "react-icons/hi";
import {AiOutlineFieldTime} from "react-icons/ai"
import ContactUs from "@/components/contact";

function AboutUs() {
    return (
        <>
        <Head>
            <title>About Us</title>
            <meta name="description" content="Getting to know more about us as a cleaning service located in Australia providing Major Cleaning services like Home cleaning, Office cleaning, School cleaning and many more." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="Good-day proffesional services,Good-day,about our company, about us, cleaning services company in australia, cleaing company in australia, cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
            <div id="about-us">
                <h2>
                    About <span>Us</span>
                </h2>

                <Image
                    src="/services_header1.jpg"
                    width={400}
                    height={400}
                    alt="picture about us"
                    id="top-image"
                    quality={100}
                />
                <br></br>
                <br></br>
                <p>
                Welcome to Good-day Professional Services, a leading cleaning service business located in Sydney, Australia. At Good-day Professional Services, we offer a wide range of cleaning services, including house cleaning, commercial cleaning, and more, all of which are designed to meet the unique needs of our clients. Our team of experienced cleaning professionals is dedicated to delivering exceptional results, using only the best equipment and cleaning solutions available. With a commitment to providing the highest levels of customer service, we work closely with our clients to understand their individual needs and tailor our services accordingly.
                <br></br><br></br>
                Good-day Professional Services is a trusted name in the cleaning industry, and we take great pride in delivering top-notch services to our clients. Our team of cleaning experts undergoes extensive training and has the knowledge and skills required to tackle even the toughest cleaning challenges. We use eco-friendly cleaning products that are safe for the environment and do not pose any harm to the health of our clients or their pets.
                <br></br><br></br>
                We understand that every client has unique cleaning needs, and that is why we offer customized cleaning solutions tailored to meet their specific requirements. Whether you need regular cleaning services for your home or office, or a one-time deep clean, we have got you covered. Our professional cleaners work diligently to ensure that every corner of your space is spotless and sparkling clean.
                <br></br><br></br>
                At Good-day Professional Services, we believe that communication is key to delivering exceptional services. That is why we maintain open and transparent communication with our clients, ensuring that they are kept informed every step of the way. We take all feedback seriously and continuously strive to improve our services to meet the evolving needs of our clients.
                <br></br><br></br>
                If you are looking for a reliable and professional cleaning service in Sydney, look no further than Good-day Professional Services. Contact us today to schedule a cleaning appointment and experience the difference for yourself.
                </p>

                <h3>Why Choose us?</h3>
                <WhyChooseUse />
            </div>
            <br></br>
            <ContactUs />
        </>
    )
}

export function WhyChooseUse() {
    return (
        <ul>
                    <li>
                        <AiOutlineFieldTime className="icon"></AiOutlineFieldTime>
                        <div>
                            <h4>24 hour service</h4>
                            <p>
                                We provide 24 hour services for your everyday needs and assist you to provide solutions for your needs.
                            </p>
                        </div>
                    </li>
                    <li>
                        <RiCustomerService2Fill className="icon"></RiCustomerService2Fill>
                        <div>
                            <h4>Excelent Customer Service</h4>
                            <p>We provide excelent customer service and help you hand by hand towards ultimate solutions for your needs.</p>
                        </div>
                    </li>
                    <li>
                        <HiUserGroup className="icon"></HiUserGroup>
                        <div>
                            <h4>Experienced Team</h4>
                            <p>We consist of highly qualified trained team of workers with years of experience to better handle your needs.</p>
                        </div>
                    </li>
                    
                </ul>
    )
}

export default AboutUs;