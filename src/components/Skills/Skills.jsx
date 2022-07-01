import { React, Fragment } from "react";
import "./Skills.css";
import coding from "../../img/coding.svg";
export default function Skills() {
  return (
    <Fragment>
      <div
        className="skills d-flex justify-content-center align-items-center"
        id="skills"
        name="skills"
      >
        <div className="container row">
          <div className="col-md-12 ">
            <h1 className="text-center">My skills</h1>
            <div className="w-100  flex-row  d-flex flex-wrap justify-content-center align-items-center">
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                Mongo
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                Express
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                React
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />{" "}
              </div>
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                Node
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                MySQL
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>{" "}
              <div class="m-4 width-200px d-flex flex-column justify-content-center align-items-center">
                AWS
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>
              <div className="m-4 width-200px d-flex flex-column justify-content-center align-items-center ">
                Dockers
                <img
                  src={process.env.PUBLIC_URL + "/favicon.ico"}
                  alt="hi"
                  style={{ "pointer-events": "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
