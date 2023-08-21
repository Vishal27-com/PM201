import StatusBar from "./Components/StatusBar"

const App = () => {
  return (
    <div>
      <StatusBar type = "info" message='Its for information' onClose={()=>console.log('Hi')} />
    </div>
  )
}

export default App