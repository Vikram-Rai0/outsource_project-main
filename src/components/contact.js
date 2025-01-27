import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function ContactUs() {
    return (
        <div id="contactus-container">
            <div id="contactus-list">
                <div id="contact-details">
                <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <span className="emoji">&#x1F4DE;</span>
                            <div>
                                <p>Phone</p>
                                <strong>+61414545660,+61431750900</strong>
                            </div>
                        </li>
                        <li>
                            <span className="emoji">&#x1F4E7;</span>
                            <div>
                                <p>Contact Email</p>
                                <strong>info@gooddayprofessionalcleaning.com.au</strong>
                            </div>
                        </li>

                        <li>
                            <span className="emoji">&#x1F30F;</span>
                            <div>
                                <p>Our Address</p>
                                <strong> 905/99 Forest Road, Hurstville, NSW, 2220</strong>
                            </div>
                        </li>
                    </ul>
                    <Image
                        src="/sydney.webp"
                        width={400}
                        height={400}
                        alt="map of our servie station"
                        onClick={() => window.location = "https://www.google.com/maps/place/36%2F438+Forest+Rd,+Hurstville+NSW+2220,+Australia/@-33.9639902,151.0941009,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12b9a0498212dd:0x74c379a21e8fd5ca!8m2!3d-33.9639947!4d151.0962949"}
                    />
                </div>

                <ContactForm />
            </div>
        </div>
    )
}

export function ContactForm() {
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [location,setLocation] = useState("");

    const serviceRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let resParams = {
            from_email: email,
            from_phone: phone,
            from_location: location,
            from_service: serviceRef.current.value
        }
        // send email here
        emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.CONTACT_TEMPLATE_ID,
            resParams,
            process.env.EMAILJS_PUBLIC_KEY
        ).then((response) => {
            setEmail("");
            setPhone("");
            setLocation("");
            toast.success('Successfully sent the contact form.', { hideProgressBar: true, autoClose: 1500});
            setInterval(() => {
                window.location.reload();
            },2000);
        }).catch((err) => {
            console.log("ERROR",err);
            toast.error("Some Error Occured! Try Again",{hideProgressBar: true,autoClose: 1500})
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>
                Contact us heres
            </h3>
            <p>
                Contact us for inquiry about your cleaning concerns by completing below form.
            </p>
            <label htmlFor="email">
                Your Email:
            </label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="wxy@gmail.com" required />
            <label htmlFor="phone">
                Your Phone:
            </label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="450-493-4938" required />
            <label htmlFor="location">
                Your location:
            </label>
            <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="perth city road,Perth,Au" required />
            <label htmlFor="service">
                Select Service:
            </label>
            <select id="service" name="service" ref={serviceRef}>
                <option value="House Cleaning">House Cleaning</option>
                <option value="Commercial Cleaning2">Commercial Cleaning</option>
                <option value="Exit Cleaning3">Exit Cleaning</option>
                <option value="Renovation Cleaning">Renovation Cleaning</option>
                <option value="Strata Maintenance">Strata Maintenance</option>
                <option value="High Pressure Wash Cleaning4">High Pressure Wash Cleaning</option>
                <option value="Carpet Steam Cleaning4">Carpet Steam Cleaning</option>
                <option value="Grout Renewal and Mould Cleaning">Grout Renewal and Mould Cleaning</option>
            </select>
            <button type="submit">
                Submit Request
            </button>
        </form>
    )
}

export default ContactUs;
