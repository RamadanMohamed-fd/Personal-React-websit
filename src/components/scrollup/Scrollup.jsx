import React from "react";
import "./scrollup.css";
const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const s = document.querySelector(".scrollup");
    if (this.scrollY >= 560) s.classList.add("show-scroll");
    else s.classList.remove("show-scroll");
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
