import React from "react";
import "../styles/Estadisticas.css";

const Estadisticas = () => {
  return (
    <div className="div-stats">
      
        <div className=" div-stats-numbers ">
          <div className="border-stats">
            <div className="stats-number">
              <p>5</p>
            </div>
          </div>
          <div className="div-p-stats">
            <p className="text-stats">Departamentos de Colombia con presencia constante.</p>
          </div>
        </div>

        <div className="div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>350</p>
            </div>
          </div>
          <div className="div-p-stats">
            <p className="text-stats">De Beneficiarios extranjeros en nuestra fundación.</p>
          </div>
        </div>

        <div className="div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>1000</p>
            </div>
          </div>
          <div className="div-p-stats">
            <p className="text-stats">Beneficiarios de población privada de LIBERTAD.</p>
          </div>
        </div>

        <div className="div-stats-numbers ">
        <div className="border-stats">
            <div className="stats-number">
              <p>7000</p>
            </div>
          </div>
          <div className="div-p-stats">
            <p className="text-stats">Beneficiarios de población vulnerable.</p>
          </div>
        </div>

    </div>
  );
};

export default Estadisticas;
