import Link from "next/link";

function Footer() {

    return (
        <footer>
            <div id="footer-details">
                <h2 style={{cursor: "pointer"}} onClick={() => window.location.href = "/"}>
                    Good-Day Professional Cleaning
                </h2>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link href="/booking">
                            Booking
                        </Link>
                    </li>
                </ul>
            </div>
            <p>
                copyright 2024 Good-Day Professional services. ALl rights reserved.
            </p>
        </footer>
    )
}

function ExternalFooters() {
    return (
        <>
            <ol>
                <li>
                    <Link href="/privacy-policy">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/terms_and_conditions">
                        Terms and Conditions
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        FAQS
                    </Link>
                </li>
            </ol>
        </>
    )
}

export default Footer;
