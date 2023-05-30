import React, {useRef, useState} from "react";
import "../styles/DrawingPanel.css";
import { Row } from "./Row";
import { exportComponentAsPNG } from "react-component-export-image"

export const DrawingPanel = (props) => {
  const [isRemoved, setRemoved] = useState(false)
  
  const { width, height, selectedColor } = props;

  const panelRef = useRef()
  
  let rows = [];
  
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  const gridRemove = () => {
    console.log("clicked");
    const pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.borderColor = "white";
    }
    setRemoved(true)
  }

  const gridAdd = () => {
    console.log("clicked");
    const pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.borderColor = "lightgrey";
    }
    setRemoved(false)
  }
      
    return (
      <div id="drawingPanel">
        <div id="pixels" ref={panelRef}>
          {rows}
        </div>
        <div>
        <button className="button" onClick={()=> exportComponentAsPNG(panelRef)}>
            Export as PNG
        </button>
        {isRemoved  ? <button className="button" onClick={gridAdd}>Add grid</button> 
                    : <button className="button" onClick={gridRemove}>Remove grid</button> }
        </div>
      </div>
    );
  }