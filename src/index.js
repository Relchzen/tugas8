var React = require("react");
var ReactDOM = require("react-dom");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var fName = "Aurelius";
var lName = "Abuthan";

const header = {
  color: getRandomColor()
};
const Style1 = {
  color: getRandomColor()
};
const Style2 = {
  color: getRandomColor()
};
const Style3 = {
  color: getRandomColor()
};
const Style4 = {
  color: getRandomColor()
};
const Style5 = {
  color: getRandomColor()
};

ReactDOM.render(
  <div>
    <h1 style={header}>Hello World!</h1>
    <p style={Style1}>
      My name is {fName} {lName}
    </p>
    <p style={Style2}>I am a handsome human being</p>
    <p style={Style3}>I love to learn Javascript</p>
    <p style={Style4}>I am a super high quality student</p>
    <p style={Style5}>I am going to be a super star</p>
  </div>,
  document.getElementById("root")
);
