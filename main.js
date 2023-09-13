import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/logo.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h1>Abdul Ahad Khan</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
