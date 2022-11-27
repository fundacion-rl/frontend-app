import React from "react";
import Marquee from "react-fast-marquee";
import '../styles/Sponsors.css'
const Sponsors = () => {

    let arraySponsors = [
        {
            id: "01",
            img: "http://drive.google.com/uc?export=view&id=1sCwN7yvgbwhr_qEM2ZOvV1WzVwhGaC15",
            src: "https://www.unglobalcompact.org/"
        },
        {
            id: "02",
            img: "http://drive.google.com/uc?export=view&id=18Ne8znwzGdW1lf4PmoKxdZKy04JcMHi5",
            src: "https://www.europarl.europa.eu/portal/es"
        },
        {
            id: "03",
            img: "http://drive.google.com/uc?export=view&id=1AiwGSO_CeA56_1Z905xC9I-nxf8hjSfn",
            src: "https://www.minjusticia.gov.co/"
        },
        {
            id: "04",
            img: "http://drive.google.com/uc?export=view&id=1E2yjqIYKehSIiuCwkk1OGiGbYRcp5xvq",
            src: "https://www.inpec.gov.co/"
        },
        {
            id: "01",
            img: "http://drive.google.com/uc?export=view&id=1sCwN7yvgbwhr_qEM2ZOvV1WzVwhGaC15",
            src: "https://www.unglobalcompact.org/"
        },
        {
            id: "02",
            img: "http://drive.google.com/uc?export=view&id=18Ne8znwzGdW1lf4PmoKxdZKy04JcMHi5",
            src: "https://www.europarl.europa.eu/portal/es"
        },
        {
            id: "03",
            img: "http://drive.google.com/uc?export=view&id=1AiwGSO_CeA56_1Z905xC9I-nxf8hjSfn",
            src: "https://www.minjusticia.gov.co/"
        },
        {
            id: "04",
            img: "http://drive.google.com/uc?export=view&id=1E2yjqIYKehSIiuCwkk1OGiGbYRcp5xvq",
            src: "https://www.inpec.gov.co/"
        }
    ]

    return (
        <>
            <div className="div-programas">
                <h2>Quienes Apoyan Nuestra Fundación</h2>
            </div>

            <Marquee className="marquee-div w-100 gap-5 " gradient={false} speed={30} pauseOnHover={true} >
                {
                    arraySponsors.map((sponsor) => {
                        return (
                            <a href={sponsor.src} target="_blank">
                                <img className="img-sponsor mx-5" src={sponsor.img} key={sponsor.id} alt={sponsor.id} />
                            </a>
                        )
                    })
                }
            </Marquee>
        </>
    );
};

export default Sponsors;
