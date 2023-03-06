import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'

function App() {
const keyApi = '594bc886'

const url = 'https://api.hgbrasil.com/weather?key=594bc886&city_name='


  const [climateData, setClimateData] = useState([])





const getClimate = (locationName) => {

  console.log(`${url}${keyApi}&city_name=${locationName}`)

}

// é necessario trocar o espaço por %
getClimate('SãoVicente,SP')
  return (
    <div className="App">
      <h1>Climate React App</h1>
   <Form />
    </div>
  )
}

export default App
