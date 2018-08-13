const app = {
  title: "Visibility Toggle",
  showDetails: true
}

const onShowDetails = () => {
  app.showDetails= false
  render()
}

const onHideDetails = () => {
  app.showDetails= true
  render()
}

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.showDetails ? 
          <button onClick={onShowDetails}>Show Details</button> :
          <div><button onClick={onHideDetails}>Hide Details</button>
          <p>Here are the details</p></div>
      }
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()