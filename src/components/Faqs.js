import React, { useState, useRef, useEffect } from "react";
import "./Faqs.css";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";

  

function Faqs(props) {
    const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <div className="my-2">
          <button
            className={`question-section  ${active} bg-white`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  {props.q}
                </h4>
                <Icon icon={plus} className={active ? `question-icon rotate` : `question-icon`}/>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>{props.a}</p>
              </div>
            </div>
          </button>
        </div>
  )
}

export default Faqs;