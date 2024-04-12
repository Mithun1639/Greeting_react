import React from "react";


const App = () => {
  const date = new Date();
  const cssStyle = {};
  let hours = date.getHours();
  let get = "";
  if (hours >= 1 && hours < 11) {
    get = "Good Morning";
    cssStyle.color = "green";
  } else if (hours >= 11 && hours < 18) {
    get = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    get = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{get}</span>
      </h1>
    </div>
  );
};

export default App;
