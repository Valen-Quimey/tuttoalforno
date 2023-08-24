import '../CartWidget/CartWidget'

function Titulo(props) {
    console.log(props)
    return(
      <div>
          <h1>
             {props.titulo}
          </h1>
          <h2>
            {props.subtitulo}
          </h2>
      </div>
      )
  

  }

  const Cart = () => {
    <i class="bi bi-cart-dash-fill"></i>
  }



  export default Titulo