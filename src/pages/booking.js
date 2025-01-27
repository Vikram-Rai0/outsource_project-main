import Head from "next/head";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Booking() {
    return (
        <>
        <Head>
            <title>Get a Booking</title>
            <meta name="description" content="Get a booking with us to evaluate a quote for your cleanng services requirements with us." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="booking services, booking cleaning services, booking cleaning services company in australia, quote for cleaing company in australia, get a quote,book a cleaning services in au" />
            <link rel="icon" href="/trans_logo.png" type="image/icon type" />
        </Head>
        <div id="booking-container">
            <h2>
                Book Now for instant <span>Quote</span>
            </h2>
            <p>
                Thank you for considering our cleaning services if you want to get the best of the best please complete below booking form and get proffessional help from us.
            </p>
            <h3>
                Fill Below Form
            </h3>
            <BookingForm />
        </div>
        </>
    )
}

function BookingForm() {
    const [fullname,setFullname] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [date,setDate] = useState("");
    const [info,setInfo] = useState("");

    const [loading,setLoading] = useState(false);

    const packageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true);

        let bookingData = {
            from_name: fullname,
            from_address: address,
            from_email: email,
            from_phone: phone,
            from_date: date,
            from_additional_info: info,
            from_service_package: packageRef.current.value,
            from_booking_date: new Date().toLocaleDateString()
        }

        // send email here for booking
        emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.BOOKING_TEMPLATE_ID,
            bookingData,
            process.env.EMAILJS_PUBLIC_KEY
        ).then( async (response) => {
            toast.success('Successfully Booked. Thank You.', { hideProgressBar: true, autoClose: 1500});

            setFullname("");
            setEmail("")
            setAddress("");
            setDate("");
            setInfo("");
            setPhone("");

            setLoading(false);

        }).catch((err) => {
            toast.error('Oops! Something gone wrong! Try Again', { hideProgressBar: true, autoClose: 1500});

            setLoading(false);
        });
        setFullname("");
        setEmail("")
        setAddress("");
        setDate("");
        setInfo("");
        setPhone("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>
                <span>
                    <label htmlFor="fullname">
                        Your Name:
                    </label>
                    <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="jhon doe" required />
                </span>

                <span>
                    <label htmlFor="address">
                        Your Address :
                    </label>
                    <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="st-1001,Melbourne" required />
                </span>
            </span>

            <label htmlFor="date">
                Your Prefered Date :
            </label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <span>
                <span>
                    <label htmlFor="email">
                        Your Email :
                    </label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jhondoe@gmail.com" required />
                </span>

                <span>
                    <label htmlFor="phone">
                        Your Phone Number :
                    </label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="2901-201-203-03" required />
                </span>
            </span>

            <label htmlFor="level">
                Prefered Service:
            </label>
            <select name="level" id="level" ref={packageRef}>
                <option value="House_Cleaning">House Cleaning</option>
                <option value="Exit_Cleaning">Exit Cleaning</option>
                <option value="Strata_Cleaning">Strata Cleaning</option>
                <option value="Commercial_Cleaning">Commercial Cleaning</option>
                <option value="High_Pressure_Wash_Cleaning">High Pressure Wash Cleaning</option>
                <option value="Renovation_Cleaning">Renovation Cleaning</option>
                <option value="Carpet_Steam_Cleaning">Carpet Steam Cleaning</option>
                <option value="Grout_Renewal_and_Mould_Cleaning">Grout Renewal and Mould Cleaning</option>
            </select>

            <label htmlFor="info">
                Some Additional Info: 
            </label>
            <textarea type="text" id="info" name="info" value={info} onChange={(e) => setInfo(e.target.value)} placeholder="here goes some of your additional info to us.." required />

            <button type="submit">
                {
                    loading ? "loading..." : "Send Booking"
                }
            </button>
        </form>
    )
}

export default Booking;