import React from "react";
import pdfIcon from '../assets/pdf.png'
import '../styles/Docs.css'

export default function Docs() {

    const arrayDocs = [
        {
            id:"001",
            src:"http://drive.google.com/uc?export=view&id=18f5MiBvM76aXVuQFEKegeqSyQ02swHn1",
            title:"Constitución Legal",
        },
        {
            id:"002",
            src:"http://drive.google.com/uc?export=view&id=1WTpRGkmsdAAlm2kXmRe38gJAhZnSzJiF",
            title:"Gestión 2020"
        },
        {
            id:"003",
            src:"http://drive.google.com/uc?export=view&id=1X0EH6x2VdrM01nilGAhwLYvQxqBTxVZq",
            title:"Gestión 2021"
        }
    ]

  return (
    <div className="container p-5 d-flex gap-5 justify-content-evenly flex-wrap">
        {
            arrayDocs.map((i)=>{
                return (
                    <div className="div-pdf shadow rounded p-3" key={i.id}>
                    <div className="div-doc-pdf  " >
                    <img className="img-pdf-icon" src={pdfIcon} alt="icon" />
                    <div className="div-text-doc">
                      <h4 className="p-1"> {i.title} </h4>
                    </div>
                  </div>
                  <div className="div-a-btn" >
                    <a className="btn btn-primary my-2" href={i.src} target="_blank" rel="noopener noreferrer"> Descargar</a>
                  </div>
                    </div>
                )
            })
        }


    </div>
  );
}
