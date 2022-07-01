import { React, Fragment } from "react";
import "./Projects.css";
import rocketman from "../../img/rocketman.svg";
import gitlabIcon from "../../icons/gitlab-icon.ico";
import webbIcon from "../../icons/web-icon.ico";
export default function Projects() {
  return (
    <Fragment>
      <div
        className="projects d-flex align-items-center justify-content-center "
        id="projects"
      >
        <div className="cards-div d-flex flex-wrap justify-content-center">
          <div class="card m-5" style={{ minWidth: "300px", width: "400px" }}>
            <img
              src={rocketman}
              className="card-img-top"
              alt="..."
              style={{ "pointer-events": "none" }}
            />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-center">
                <button className="gradient-button d-flex align-items-center">
                  Website
                  <img
                    src={webbIcon}
                    alt="hi"
                    style={{
                      "pointer-events": "none",
                    }}
                  />
                </button>

                <button className="gradient-button d-flex align-items-center">
                  Gitlab
                  <img
                    src={gitlabIcon}
                    alt="hi"
                    style={{
                      "pointer-events": "none",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-wrap justify-content-center">
            <div class="card m-5" style={{ minWidth: "300px", width: "400px" }}>
              <img
                src={rocketman}
                className="card-img-top"
                alt="..."
                style={{ "pointer-events": "none" }}
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <a
                    href="/link/to/page2"
                    style={{
                      "text-decoration": "none",
                    }}
                  >
                    <button className="gradient-button d-flex align-items-center">
                      Website
                      <img
                        src={webbIcon}
                        alt="hi"
                        style={{
                          "pointer-events": "none",
                        }}
                      />
                    </button>
                  </a>
                  <a
                    href="/link/to/page2"
                    style={{
                      "text-decoration": "none",
                    }}
                  >
                    <button className="gradient-button d-flex align-items-center">
                      Gitlab
                      <img
                        src={gitlabIcon}
                        alt="hi"
                        style={{
                          "pointer-events": "none",
                        }}
                      />
                    </button>
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-wrap justify-content-center">
            <div class="card m-5" style={{ minWidth: "300px", width: "400px" }}>
              <img
                src={rocketman}
                className="card-img-top"
                alt="..."
                style={{ "pointer-events": "none" }}
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <a
                    href="/link/to/page2"
                    style={{
                      "text-decoration": "none",
                    }}
                  >
                    <button className="gradient-button d-flex align-items-center">
                      Website
                      <img
                        src={webbIcon}
                        alt="hi"
                        style={{
                          "pointer-events": "none",
                        }}
                      />
                    </button>
                  </a>
                  <a
                    href="/link/to/page2"
                    style={{
                      "text-decoration": "none",
                    }}
                  >
                    <button className="gradient-button d-flex align-items-center">
                      Gitlab
                      <img
                        src={gitlabIcon}
                        alt="hi"
                        style={{
                          "pointer-events": "none",
                        }}
                      />
                    </button>
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
