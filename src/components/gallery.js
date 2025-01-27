const { default: Image } = require("next/image");

function Gallery() {
    return (
        <>
        <div id="gallery-container">
            <h2>
                Our latest workcase
            </h2>
            <div id="gallery-list-row">
            <div className="gallery-list-column">
                    <Image
                        height={400}
                        width={400}
                        src="/gallery1.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/house_cleaning1.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/gallery2.jpg"
                        alt="house cleaning women"
                    />
                    
                </div>
                <div className="gallery-list-column">
                    <Image
                        height={400}
                        width={400}
                        src="/gallery6.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/office_cleaning.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/gallery4.jpg"
                        alt="house cleaning women"
                    />
                    
                </div>
                <div className="gallery-list-column">
                    
                    <Image
                        height={400}
                        width={400}
                        src="/commercial_cleaning.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/gallery5.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/office_cleaning_header.jpg"
                        alt="house cleaning women"
                    />
                </div>

                <div className="gallery-list-column">
                    <Image
                        height={400}
                        width={400}
                        src="/gallery8.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/hospital_cleaning.jpg"
                        alt="house cleaning women"
                    />
                    <Image
                        height={400}
                        width={400}
                        src="/gallery7.jpg"
                        alt="house cleaning women"
                    />
                    
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,64L30,58.7C60,53,120,43,180,74.7C240,107,300,181,360,213.3C420,245,480,235,540,202.7C600,171,660,117,720,122.7C780,128,840,192,900,208C960,224,1020,192,1080,154.7C1140,117,1200,75,1260,85.3C1320,96,1380,160,1410,192L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </>
    )
}

export default Gallery;