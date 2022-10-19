import React, { useState } from "react";

const Accordion = ({ items }) => {
  
  // use state
    const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClicked = (index) => {
    setActiveIndex(index)
  };

  // map list
  const renderedItems = items.map((item, index) => {

    // choose seidha item active aha irukka

    const active = index === activeIndex ? 'active' : '';
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className= {`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div className="ui styled accordion">
    {renderedItems}
    {/* <h1>{activeIndex}</h1> */}
    </div>;
};

export default Accordion;
