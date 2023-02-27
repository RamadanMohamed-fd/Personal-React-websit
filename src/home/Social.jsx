import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/profile.php?id=100022061774566"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-meta"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ramadan-mohamed-536b67262/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/RamadanMohamed-fd?tab=repositories"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
