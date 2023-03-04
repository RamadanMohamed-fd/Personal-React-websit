import React, { useState } from "react";
import "./qualificatin.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>
      <div className="qualification__container container">
        <div className="qualifiction__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualifiction__data">
              <div>
                <h3 className="qualification__title"> Web Design</h3>
                <span className="qualiification__subtitle">
                 Egypt - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualifiction__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualiification__subtitle">
                  Egypt - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2017 - 2021
                </div>
              </div>
            </div>

            {/* ------------------------------------- */}
            <div className="qualifiction__data">
              <div>
                <h3 className="qualification__title"> Web Development</h3>
                <span className="qualiification__subtitle">
                  Egypt- Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualifiction__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI UX </h3>
                <span className="qualiification__subtitle">
                 Egypt - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>present
                </div>
              </div>
            </div>
          </div>
          {/* ====================================== */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualifiction__data">
              <div>
                <h3 className="qualification__title"> Product Designer</h3>
                <span className="qualiification__subtitle">Not Yet</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualifiction__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualiification__subtitle">
                  Apple Inc -Egypt
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - present
                </div>
              </div>
            </div>

            {/* ------------------------------------- */}
            <div className="qualifiction__data">
              <div>
                <h3 className="qualification__title"> Web Designer</h3>
                <span className="qualiification__subtitle">Not Yet</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualifiction__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX </h3>
                <span className="qualiification__subtitle">Not Yet</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
