class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false 
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here are the details</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


/* const app = {
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

render() */