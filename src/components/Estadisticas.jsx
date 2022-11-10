import React from "react";
import "../styles/Estadisticas.css";

const Estadisticas = () => {
  return (
    <div className="div-stats py-5">
      <div className=" container text-white py-5 mt-2 d-flex align-items-center justify-content-center flex-wrap">
        <div className="w-25 p-5 my-5 div-stats-numbers ">
          <div className="border-stats">
            <div className="stats-number">
              <p>5</p>
            </div>
          </div>
          <div className="w-100 text-center">
            <p>Departamentos de Colombia con presencia constante.</p>
          </div>
        </div>

        <div className="w-25 p-5 my-5 div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>350</p>
            </div>
          </div>
          <div className="w-100 text-center">
            <p>De Beneficiarios extranjeros en nuestra fundación.</p>
          </div>
        </div>

        <div className="w-25 p-5 my-5 div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>1000</p>
            </div>
          </div>
          <div className="w-100 text-center">
            <p>Beneficiarios de población privada de LIBERTAD.</p>
          </div>
        </div>

        <div className="w-25 p-5 my-5 div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>7000</p>
            </div>
          </div>
          <div className="w-100 text-center">
            <p>Beneficiarios de población vulnerable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
