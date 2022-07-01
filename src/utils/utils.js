import TypeIt from "typeit";

export function typeit() {
  new TypeIt("#typeit-self-introduction", {
    strings: "Programador junior",
    speed: 60,
    waitUntilVisible: true,
  }).go();
}
export function hideScrollWhenOpenResponisveMenu() {
  const collapsedElement = document.getElementsByClassName("collapsed");
  console.log(collapsedElement.length);
  if (!collapsedElement.length) {
    var markup = document.documentElement;
    markup.style.overflowY = "visible";
    console.log("visible");
    document.getElementById("shrink-nav").style = "background:tranparent";
  } else {
    var markup = document.documentElement;
    markup.style.overflowY = "hidden";
    console.log("hindden");
    document.getElementById("shrink-nav").style = "backdrop-filter: blur(15px)";
  }
}
export function visibleScrollWhenCloseToggleButton() {
  var x = window.matchMedia("(max-width: 992px)");
  validateScreenWidth(x);
  x.addListener(validateScreenWidth);
}
function validateScreenWidth(x) {
  console.log(x.matches);
  if (x.matches) {
    const collapsedElement = document.getElementsByClassName("collapsed");
    console.log(collapsedElement.length);
    if (collapsedElement.length) {
      var markup = document.documentElement;
      markup.style.overflowY = "visible";
      console.log("visible");
    }
    if (!collapsedElement.length) {
      var markup = document.documentElement;
      markup.style.overflowY = "hidden";
      console.log("visible");
    }
  } else {
    var markup = document.documentElement;
    markup.style.overflowY = "visible";
  }
}
/* -------------------------------------------------------------------------- */
/*                                 shrink nav                                 */
/* -------------------------------------------------------------------------- */
export function shrinkNav() {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("shrink-nav").style =
        "font-size:19px;backdrop-filter: blur(1.5px);background-color: rgba(137, 255, 200, 0.3)";
    } else {
      document.getElementById("shrink-nav").style = "font-size:20px;";
      document.getElementById("shrink-nav").style =
        "background-color:transparent;";
    }
  }
}
