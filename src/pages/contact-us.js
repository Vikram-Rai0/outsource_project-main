import Head from "next/head";
import ContactUs from "@/components/contact";

function ContactUsPage() {
    return (
        <>
        <Head>
            <title>Contact Us</title>
            <meta name="description" content="Getting to know more about us by contacting us as a cleaning service located in Australia providing Major Cleaning services like Home cleaning, Office cleaning, School cleaning and many more." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="contact our company, contact us, contact our cleaning services company in australia," />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
            <div id="contact-us">
                <h2>No <span>Doubt</span> on Quality, <span>Contact</span> Us Now</h2>
                <p>
                Thank you for considering Our House cleaning service for your cleaning needs. We are dedicated to providing high-quality cleaning services to our customers, and we look forward to the opportunity to serve you.

If you have any questions about our cleaning services or would like to schedule a cleaning appointment, please do not hesitate to contact us. You can reach us by phone, email, or through our website contact form, and one of our friendly and knowledgeable representatives will be happy to assist you.

When you contact us, we will take the time to listen to your needs and provide you with a personalized cleaning plan that meets your specific requirements. We will also provide you with a free estimate so that you can make an informed decision about our services.

At Our House cleaning service, we are committed to providing our customers with a seamless and stress-free experience. We understand that your time is valuable, and we will work with you to schedule cleaning appointments that are convenient for you.

                </p>
                <div id="world_map">
                    
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default ContactUsPage;