import React from "react";
import Marquee from "react-fast-marquee";
import '../styles/Sponsors.css'
import globalCompactLogo from '../assets/globalCompactLogo.png'
const Sponsors = () => {

    let arraySponsors = [
        {
            id: "01",
            img: globalCompactLogo,
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
            id:"05",
            img:"http://drive.google.com/uc?export=view&id=1UVPCz_ENTcYDyFf6BGDWLRRV0RZc0d0g",
            src:"#"
        },
        {
            id:"06",
            img:"http://drive.google.com/uc?export=view&id=1VXXfrwrqs9VV8pBE70aUJIV0969vNJ18",
            src:"#"
        },
        {
            id:"07",
            img:"http://drive.google.com/uc?export=view&id=1T1iM5Y5RvyPauSABSfPz0z7joI_7wo6x",
            src:"#"
        },
        {
            id:"08",
            img:"http://drive.google.com/uc?export=view&id=1SxPJue_0eCJEzfriQs739eRpgQxzFE0r",
            src:"#"
        },
        {
            id:"09",
            img:"http://drive.google.com/uc?export=view&id=1UFObuO01uIq9foMi1qfrEfg94gQhSRgq",
            src:"#"
        },
        {
            id:"10",
            img:"http://drive.google.com/uc?export=view&id=1W_cB9zq1L4JxQqmhii1AvgSHJtSoxutm",
            src:"#"
        },
        {
            id:"11",
            img:"http://drive.google.com/uc?export=view&id=1Hm4XJ9FMtdcT3pia1g2auenDZut_3Bwi",
            src:"#"
        },
        {
            id:"12",
            img:"http://drive.google.com/uc?export=view&id=1GpUGZlucKs9UoLBfwlJQIOaLVvS_2IIG",
            src:"#"
        },
        {
            id:"13",
            img:"http://drive.google.com/uc?export=view&id=1H2gj5kEAWEccZ0nq-NjPxe_JRt7gomIT",
            src:"#"
        }
        ,
        {
            id:"14",
            img:"http://drive.google.com/uc?export=view&id=1fFl-Fdf90KixogriJt7DJtmQe3_r1v41",
            src:"#"
        }

    ]

    return (
        <>
            <div className="div-programas">
                <h2>Hacemos parte de</h2>
            </div>

            <Marquee className="marquee-div w-100 gap-5 " gradient={false} speed={30} pauseOnHover={true} >
                {
                    arraySponsors.map((sponsor) => {
                        return (
                            <a href={sponsor.src} target="_blank" rel="noreferrer" key={sponsor.id}>
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
