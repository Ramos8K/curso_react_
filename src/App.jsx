import './App.css'  
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecutionFunction from './components/ExecutionFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const name = "Gabriel";

  const cars = [
    {id: 1, brand: "Ferrari", color: "Preto", km: 0},
    {id: 2, brand: "Ford", color: "Branco", km: 3000},
    {id: 3, brand: "Gol", color: "Amarelo", km: 0},
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Hello  World</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={name}/>
      {/* destructing */}
      <CarDetails brand="Ferrari" km={100000} color="Cinza"/>
      <CarDetails brand="Ford" color="Preto" km={0}/>
      <CarDetails brand="Fiat" color="Branco" km={3000}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container>
        <p>Este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecutionFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App