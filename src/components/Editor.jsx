import React, {useState} from "react";
import "../styles/Editor.css";
import { CirclePicker} from "react-color";
import { DrawingPanel } from "./DrawingPanel";

export const Editor = () => {

const [panelWidth, setPanelWidth] = useState(16);
const [panelHeight, setPanelHeight] = useState(16);
const [hideOptions, setHideOptions] = useState(false);
const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
const [buttonText, setButtonText] = useState("start drawing");
const [selectedColor, setColor] = useState("#ff9800");

const inicializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
  
    buttonText === "start drawing" ? setButtonText("reset") : setButtonText("start drawing");
  };

const changeColor = (color) => {
    setColor(color.hex);
    console.log(selectedColor);
}

return (
    <>
      <div id="editor">
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (
          <div id="options">
            <div className="option">
              <input
                className="panelInput"
                type="number"
                defaultValue={panelWidth}
                onChange={(e) => setPanelWidth(e.target.value)}
                max={40}
              />
              <span>Width</span>
            </div>
            <div className="option">
              <input
                className="panelInput"
                type="number"
                defaultValue={panelHeight}
                onChange={(e) => setPanelHeight(e.target.value)}
                max={40}
              />
              <span>Height</span>
            </div>
          </div>
        )}
        <button 
            onClick={inicializeDrawingPanel} 
            className="button">
          {buttonText}
        </button>
        {hideOptions && 
        (<CirclePicker 
            color={selectedColor}
            onChange={changeColor} />)}
        {hideOptions && 
        (<DrawingPanel 
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
        />)}
      </div>
    </>
  );
  
}