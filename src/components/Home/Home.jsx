import React from "react";
import { Fragment, useEffect } from "react";
import { typeit } from "../../utils/utils.js";
import blobimg from "../../img/blob.svg";
import blobskyblue from "../../img/blob-skyblue.svg";
import rocketman from "../../img/rocketman.svg";
import "../../utils/blobz.min.css";
import "./Home.css";
export default function Home() {
  useEffect(() => {
    typeit();
  }, []);
  return (
    <Fragment>
      <div
        className="home d-flex justify-content-center align-items-center pb-5"
        id="home"
      >
        <div className="container  row d-flex flex-row align-self-center justify-content-center  p-0">
          <div className="col-md-4 rocketman-image-div  d-flex justify-content-center align-items-center p-0">
            <img
              className="move-animation"
              src={rocketman}
              height="500px"
              width="500px"
            />
            <div
              className="col-md-4  tk-blob  blob-animated"
              style={{
                "--fill": "#884dff",
                "--time": "90s",
                "--amount": "5",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
                <path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
              </svg>
            </div>
          </div>{" "}
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-center  self-button-div p-0">
            <h1 id="name" className="m-4 text-center">
              José Luis Sequeira Góngora
            </h1>
            <h2 id="typeit-self-introduction" className="m-4"></h2>{" "}
            <div className="cv-button-div m-4">
              <button className="outline-button">Descargar mi CV</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
