import React from "react";
import Marquee from "react-fast-marquee";
import '../styles/Sponsors.css'
const Sponsors = () => {

let arraySponsors = [
    {
        id:"01",
        img:"http://drive.google.com/uc?export=view&id=1sCwN7yvgbwhr_qEM2ZOvV1WzVwhGaC15"
    },
    {
        id:"02",
        img:"http://drive.google.com/uc?export=view&id=18Ne8znwzGdW1lf4PmoKxdZKy04JcMHi5"
    },
    {
        id:"03",
        img:"http://drive.google.com/uc?export=view&id=1AiwGSO_CeA56_1Z905xC9I-nxf8hjSfn"
    },
    {
        id:"01",
        img:"http://drive.google.com/uc?export=view&id=1sCwN7yvgbwhr_qEM2ZOvV1WzVwhGaC15"
    },
    {
        id:"02",
        img:"http://drive.google.com/uc?export=view&id=18Ne8znwzGdW1lf4PmoKxdZKy04JcMHi5"
    },
    {
        id:"03",
        img:"http://drive.google.com/uc?export=view&id=1AiwGSO_CeA56_1Z905xC9I-nxf8hjSfn"
    }
]

  return (
    <>
      <div className="div-programas">
        <h2>Quienes Apoyan Nuestra Fundación</h2>
      </div>

        <Marquee className="marquee-div w-100 gap-5 " gradient={false} speed={30} >
            {
                arraySponsors.map((sponsor)=>{
                    return (
                        <img className="img-sponsor mx-5" src={sponsor.img} key={sponsor.id} alt={sponsor.id} />
                    )
                })
            }
        </Marquee>
    </>
  );
};

export default Sponsors;
