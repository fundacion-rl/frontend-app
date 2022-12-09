import React from 'react'
import '../styles/DivProgramas.css'
export default function DivProgramas() {

    const arrayProgramasInfo = [
        {
            id:"retolibertad",
            img:"http://drive.google.com/uc?export=view&id=1mZrMYq5zX-oeIIQtNlWFrumYyTC7qRKh",
            title: 'Programa “TODOS SOMOS RETOLIBERTAD"',
            className:"left",
            text:"El programa Todos Somos RETOLIBERTAD, perteneciente al área de inclusión social, realizar un proceso de intervención interdisciplinar (Trabajo social, Psicología, Medicina, Derecho entre otros) con los beneficiarios de la fundación Retorno a la libertad, identificando aspectos personales y familiares que inciden en su situación actual, elaborando un plan de trabajo desde un enfoque diferencial y de derechos humanos que permita su respectivo acompañamiento, involucrando a sus familias, migrantes y grupos poblaciones en condición de vulnerabilidad; en procesos de desarrollo humano, educativos, generación de ingresos, el cuidado del medio ambiente, el cuidado de la salud mental y física, el aprovechamiento del tiempo libre, con el acompañamiento y seguimiento del orden legal, contribuyendo a mejorar su calidad de vida de manera integral"
        },
        {
            id:"derechosHumanos",
            img:"http://drive.google.com/uc?export=view&id=1-XrWvJYksNRMFWUKH5N3Es9K5Vr5gCgy",
            title:'Programa “REALIDAD PARA EL CAMBIO”',            
            className:"right",
            text:"El programa realidad para el cambio, vinculado al área de Derechos Humanos, busca contribuir al goce efectivo de los derechos humanos universales, para la población carcelaria (nacional y extranjera), a través del seguimiento, análisis y monitoreo a las políticas públicas nacionales, el establecimiento de estrategias de orden sociopolítico y espacios de transformación democrática."
        },
        {
            id:"cooperacion",
            img:"http://drive.google.com/uc?export=view&id=1JnN5XqFkWn5TCguzzkJCWaHYjD3poAau",
            title: 'Programa "LIBERTAD SIN FRONTERAS"',
            className:"left",
            text:"El programa libertad sin fronteras, vinculado al área de cooperación internacional, determina los procesos y procedimientos actuales ejecutados en los países aliados a la fundación para consolidar un trabajo en redes, que permita apoyar el proceso de restablecimiento de derechos de las personas privadas de la libertad, de manera nacional e internacional, por medio de la participación interinstitucional y la transferencia de conocimientos, ofreciendo bienestar integral y una mejora en su calidad de vida."
        },
        {
            id:"brazosAbiertos",
            img:"http://drive.google.com/uc?export=view&id=1eCmwU4BVzJzyrDR0ObLGjeMyS_rcBrk7",
            title: 'Programa "BRAZOS ABIERTOS"',
            className:"right",
            text:"El programa Brazos abiertos, vinculado al área de sostenibilidad, gestiona y desarrolla acciones que conlleven a la auto sostenibilidad de RETOLIBERTAD; a través de la celebración de alianzas, convenios, contratos, subvenciones, donaciones, mercadeo social, prestación de servicios o cualquier otra figura de cooperación socioeconómica, comprometiendo e involucrando diferentes voluntariados y utilizando las tecnologías de la información y la comunicación, para la máxima consecución e inversión de los diferentes recursos."
        },
    ]



  return (
<>
    <div className='container'>
        {
            arrayProgramasInfo.map((e)=>{
                return (
                    <div className='div-container-program my-5' key={e.id} id={e.id} >
                        
                        <div className={e.className} >
                            <img  className='my-4 img-div-programa' src={e.img} alt={e.title} />
                            <div>
                            <h2 className='text-title'>{e.title}</h2>
                            <p className='text-dark' >{e.text}</p>
                            </div>
                           
                        </div>
                    </div>
                )
            })
        }
    </div>

</>
  )
}
