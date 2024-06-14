const CarDetails = ({brand, km, color}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>
            <li >Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </li>
      </ul>
    </div>
  )
}

export default CarDetails
