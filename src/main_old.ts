import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
    <header class="header">
      <div class="time-temp">
        <div class="time" id="time">9:59</div>
        <div class="temp" id="temp">15ºC</div>
      </div>
      <div class="city">concello de vigo</div>
      <div class="date">
        <div class="date-month-day" id="date-month-day">29 Octubre 2025</div>
      </div>
    </header>
    <h1 class="street">Av. Camelias</h1>
    <div class="traffic">
      <div class="car-data">
        <div><img src="bike.svg"/></div>
        <div>91</div>
        <div>Actualizado 9:56</div>
      </div>
      <div class="vs">
        <div>4%</div>
        <div>vs</div>
      </div>
      <div class="car-data">
        <div>🚘</div>
        <div>1.899</div>
        <div>Actualizado 9:47</div>
      </div>
    </div>
    <div>
      grafico
    </div>
    <div class="tabla">
      <div> <div>438</div> <div>Onte</div> </div>
      <div> <div>1105</div> <div>Semana</div> </div>
      <div> <div>13992</div> <div>Mes</div> </div>
      <div> <div>138394</div> <div>Ano</div> </div>
    </div>
    <div class="mensaje">
      <div>ℹ Información</div>
      <div>Peón non invada o carril bici</div>
    </div>

    <div>

    </div>
  </div>
`


function updateDateTime(){
  const now = new Date()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const day = now.getDay()
  const month = now.toLocaleString('es-ES',{month:'long'})
  const year = now.getFullYear()
  document.getElementById("time").textContent=hours+':'+minutes
  document.getElementById("date-month-day").textContent=day+' '+month+' '+year;
}

async function updateTemp(){
  const response = await fetch('https://wttr.in/Vigo?format=j1')
  const data = await response.json()
  document.getElementById('temp').textContent=data.current_condition[0].temp_C + ' ºC'
}


updateDateTime()
updateTemp()
setInterval(updateDateTime, 1000*60) // Actualizo cada minuto
setInterval(updateTemp, 1000*60*30) // Actualizo cada media hora