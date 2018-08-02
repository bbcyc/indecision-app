console.log('App.js is running')

// JSX - JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
}
var template = (
  <div>
    <h1>{page.title}</h1>
    <p>{page.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26, 
  location: 'Philadelphia'
}
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);