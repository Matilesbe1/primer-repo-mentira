import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DEFAULT, {sumar, restar} from './math.js'

let num1=10
let num2=20
console.log (sumar(num1, num2))

//funcion que permite enlazar mi aplicacion de react con mi index.html
createRoot(document.getElementById('root')).render(
    <App />
)
