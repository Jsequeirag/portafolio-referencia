import { React, Fragment } from "react";

export default function Slide() {
  return (
    <Fragment>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="img1.jpg" style="width:100%" />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="img2.jpg" style="width:100%" />
          <div class="text">Caption Two</div>
        </div>
      </div>
    </Fragment>
  );
}
