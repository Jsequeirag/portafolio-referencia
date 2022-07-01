import { React, Fragment } from "react";
import "./Contact.css";
import astronaut from "../../img/astronaut.png";
import astronautAlone from "../../img/astronaut-alone.png";
import facebookIcon from "../../icons/facebook-icon.ico";
import facebookMediumIcon from "../../icons/facebook-medium-icon.ico";
import gmailIcon from "../../icons/gmail-icon.ico";
import gmailMediumIcon from "../../icons/gmail-medium-icon.ico";
import linkedinIcon from "../../icons/linkedin-icon.ico";
import linkedinMediumIcon from "../../icons/linkedin-medium-icon.ico";
export default function Contact() {
  function openGmailForm() {
    document.getElementById("form-div").hidden = false;
    document.getElementById("contacts-div").hidden = true;
    document.getElementById("h1-contact-me").innerHTML = "Gmail";
  }
  function closeGmailForm() {
    document.getElementById("form-div").hidden = true;
    document.getElementById("contacts-div").hidden = false;
    document.getElementById("h1-contact-me").innerHTML = "Contact me";
  }
  return (
    <Fragment>
      <section id="section-1">
        <div className="row contact me d-flex  align-items-center" id="contact">
          <div className="col-xxl-3"></div>
          <div className="col-xxl-5">
            <h1 className="text-center" id="h1-contact-me">
              Contact me
            </h1>
            <div
              className="contacts-div d-frex justify-content-center"
              id="contacts-div"
            >
              <div class="m-4">
                <img src={facebookMediumIcon} alt="hi" />
              </div>{" "}
              <div class="m-4">
                <img src={linkedinMediumIcon} alt="hi" />
              </div>{" "}
              <div
                class="m-4"
                onClick={() => {
                  openGmailForm();
                }}
              >
                <img src={gmailMediumIcon} alt="hi" />
              </div>
            </div>
            <div className="form-div col-lg-6 " id="form-div" hidden>
              <div
                className="contacts-div-into-form d-flex flex-column"
                id="contacts-div"
              >
                <div class="m-1">
                  <img src={facebookIcon} alt="hi" />
                </div>
                <div class="m-1">
                  <img src={linkedinIcon} alt="hi" />
                </div>
              </div>
              <div className="child-form ">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />{" "}
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-1 text-center">
                  <button
                    type="submit"
                    class="outline-button m-3"
                    onClick={() => {
                      closeGmailForm();
                    }}
                  >
                    Close
                  </button>
                  <button type="submit" class="outline-button m-3">
                    Sent
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 astronaut-image-div">
            <img
              className="astronaut-image-animation"
              src={astronautAlone}
              alt="astronaut"
              height="400px"
              width="400px"
              min-height="200px"
              min-width="200px"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
