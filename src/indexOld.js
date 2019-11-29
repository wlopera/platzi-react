// const element = document.createElement('h1')
// element.innerText = "Bienvenidos a Platzi - React"

// const container = document.getElementById('app')

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render( < BadgeNew / > , container);

// const jsx = <h1>Bienvenidos a Platzi - Bages - React</h1>

// const element = React.createElement('a', {href: 'http://platzi.com'}, 'Ir a platzi');

// const nombre = "wlopera";

// const element = React.createElement('h1', {}, `hola, soy  ${nombre}`);
//const element = <h1>Hola, soy  {nombre}</h1>;

// const suma = () => 25 + 25;

// const element = <h1>25 + 25 : {suma()}</h1>;

// const jsx = (
//     <div>
//         <h1>Datos de prueba</h1>
//         <hr/>
//         <p>Ventana de prueba</p>
//     </div>
// );

//ReactDOM.render(jsx, container);

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{}, 'Datos de prueba'),
//     React.createElement('hr',{}, undefined),
//     React.createElement('p',{}, 'Ventana de prueba')
// )

// const container = document.getElementById('app');