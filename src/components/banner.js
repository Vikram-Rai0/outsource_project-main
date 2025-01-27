import { BsTelephone } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function Banner() {
  return (
    <>
      <div id="banner-container">
        <div className="single-banner">
          <a href="booking">
            <span>
              <BiTimeFive />
            </span>
            <strong> Get an instant quote </strong>
            <small> we provide instant quote for everyone </small>
          </a>
        </div>
        <div className="single-banner">
          <a href="tel:+61414545660, +61431750900">
            <span>
              <BsTelephone />
            </span>
            <strong> Call Us Now </strong> <small> +61414545660,+61431750900 </small>
          </a>
        </div>
        <div className="single-banner">
          <a href="mailto:gooddayprofessionalcleaning@gmail.com">
            <span>
              <HiOutlineMail />
            </span>
            <strong> contact us via email </strong>
            <small> info@gooddayprofessionalcleaning.com.au </small>
          </a>
        </div>
      </div>{" "}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,64L40,106.7C80,149,160,235,240,240C320,245,400,171,480,133.3C560,96,640,96,720,122.7C800,149,880,203,960,224C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        >
        </path>
      </svg>
    </>
  );
}

export default Banner;
