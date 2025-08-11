import CircleWithDot from "@/Assets/Images/CircleDot.png";
import GrassGrow from "@/Assets/video/GrassGrow.mp4";
import Movie from "@/Components/Movie/Movie.js";
import React from "react";
import { Link } from "react-router-dom";

import "./circleDotV2.scss";

const CircleDotV2 = ({ text, littleDot, video, phone }) => {
  const phoneNumber = phone ? "06 98 88 15 55" : "";
  const textDisplay = text ? text : "";

  const Innercontent = (
    <>
      <div className="allTextV2">
        <div className="mainTextV2">
          {text ? (
            <p className="textPerso">
              {textDisplay}
              <br />
              <b>{phoneNumber}</b>
            </p>
          ) : (
            ""
          )}
          <p className="textAuto">
            Je contacte
            <br />
            <b>
              ATTRIBUT
              <br />
              CONSEILS
            </b>{" "}
          </p>
        </div>
        <div className="circleDotV2">
          <img
            src={CircleWithDot}
            alt="cercle de petit point"
            width={265}
            height={265}
          />
        </div>
        {littleDot ? <div className="yellowCircleV2"></div> : ""}
      </div>
      <div className="videoContainerV2">
        <Movie src={video || GrassGrow} />
      </div>
    </>
  );
  return phone ? (
    <a href={`tel:${phoneNumber}`} className="circleDotCont">
      {Innercontent}
    </a>
  ) : (
    <Link to="/contact" className="circleDotCont">
      {Innercontent}
    </Link>
  );
};

export default CircleDotV2;
