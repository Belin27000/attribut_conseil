import React from "react";
import Movie from "@/Components/Movie/Movie.js";
import GrassGrow from "@/Assets/video/GrassGrow.mp4";
import { Link } from "react-router-dom";
import CircleWithDot from "@/Assets/Images/CircleDot.png";

import "./circleDot.scss";

const CircleDot = ({ displayAll = true }) => {
  return (
    <>
      <Link to="/contact">
        <div className="allText">
          <div className="mainText">
            {displayAll && (
              <p>
                Obtenir un rendez-vous, un devis ou pour plus d’informations et
                concrétiser votre projet
              </p>
            )}
            <p>
              Je contacte
              <br />
              <b>
                ATTRIBUT
                <br />
                CONSEILS
              </b>{" "}
            </p>
          </div>
          <div className="circleDot">
            <img
              src={CircleWithDot}
              alt="cercle de petit point"
              width={265}
              height={265}
            />
          </div>
          <div className="yellowCircle"></div>
        </div>
        <div className="videoContainer">
          <Movie src={GrassGrow} />
        </div>
      </Link>
    </>
  );
};

export default CircleDot;
