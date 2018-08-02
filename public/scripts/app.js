"use strict";

console.log('App.js is running');

// JSX - JavaScript XML

var page = {
  title: "Brian's App",
  subtitle: "A great place to visit"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    page.title
  ),
  React.createElement(
    "p",
    null,
    page.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
