import Title from "./components/Title.jsx"
import NewTaskContainer from "./components/Inputs.jsx"

function App() {
  const appStyle = {
    background: '#292837ff',
    minHeight: "100vh",
    borderRadius: "8px",
    margin : '0'
  }
 return(
  <div style={appStyle}>
    <Title name="Toni" />
    <NewTaskContainer />
  </div>
 )
}

export default App
