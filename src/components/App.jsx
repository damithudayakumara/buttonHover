import React, { useState } from "react";

function App() {
  // const [headingText,setHeadingText]=useState("clicked");
  const [headingColor, setHeadingColor] = useState(false);

  function ChangeBtnColor() {
    setHeadingColor(true);
  }
  function ChangeBtnColorOut() {
    setHeadingColor(false);
  }

  // function HeadingClicked(){
  //   setHeadingText("submitted");

  return (
    <div className="container">
      <h1>"hello"</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: headingColor ? "black" : "white" }}
        onMouseOver={ChangeBtnColor}
        onMouseOut={ChangeBtnColorOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
