import React from 'react';
import '../styles/Estadisticas.css'

const Estadisticas = () => {
    return (
        <div className='div-stats py-5' >
            <div className='container text-white py-5 mt-2 d-flex align-items-center justify-content-center gap-5 flex-wrap'>
                <div className='p-5 my-5'>Stat 1</div>
                <div className='p-5 my-5'>Stat 2</div>
                <div className='p-5 my-5'>Stat 3</div>
                <div className='p-5 my-5'>Stat 4</div>
            </div>
        </div>
    );
}

export default Estadisticas;
