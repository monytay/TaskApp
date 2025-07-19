import Title from "./components/Title.jsx"
import NewTaskContainer from "./components/Inputs.jsx"

function App() {
  const appStyle = {
    backgroundColor: "#66A9E2",
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
