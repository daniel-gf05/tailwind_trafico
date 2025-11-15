import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="w-full max-w-[600px] bg-purple-600">
    <header class="flex justify-between items-center gap-20 text-[18px]">
      <div class="flex flex-col items-center">
        <div class="text-[24px] font-bold" id="time">9:59</div>
        <div class="self-end" id="temp">15ºC</div>
      </div>
      <div class="uppercase font-bold text-[15px]">concello de vigo</div>
      <div class="flex flex-col items-center font-bold">
        <div class="date-month-day" id="date-month-day">29 Octubre 2025</div>
      </div>
    </header>
    <h1 class="text-[40px] font-normal mb-15">Av. Camelias</h1>
    <div class="flex justify-between items-center">
      <div class="border border-gray-600 rounded-md p-5 gap-5">
        <div><img src="bike.svg"/></div>
        <div>91</div>
        <div>Actualizado 9:56</div>
      </div>
      <div class="text-[20px]">
        <div>4%</div>
        <div>vs</div>
      </div>
      <div class="border border-gray-600 rounded-md p-[5px] gap-[5px] justify-between">
        <div class="text-[40px]">🚘</div>
        <div class="text-[40px]>1.899</div>
        <div class="text-[12px]>Actualizado 9:47</div>
      </div>
    </div>
    <div>
      grafico
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-10">
      <div class="bg-gray-600 flex flex-col justify-center mt-5"> <div>438</div> <div>Onte</div> </div>
      <div class="bg-gray-600 flex flex-col justify-center mt-5"> <div>1105</div> <div>Semana</div> </div>
      <div class="bg-gray-600 flex flex-col justify-center mt-5"> <div>13992</div> <div>Mes</div> </div>
      <div class="bg-gray-600 flex flex-col justify-center mt-5"> <div>138394</div> <div>Ano</div> </div>
    </div>
    <div class="flex bg-gray-600 flex-col justify-center mt-20">
      <div class="text-left pl-10 border border-t-black border-b-black">ℹ Información</div>
      <div class="h-100 size-30">Peón non invada o carril bici</div>
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
  document.getElementById("time")!.textContent=hours+':'+minutes
  document.getElementById("date-month-day")!.textContent=day+' '+month+' '+year;
}

async function updateTemp(){
  const response = await fetch('https://wttr.in/Vigo?format=j1')
  const data = await response.json()
  document.getElementById('temp')!.textContent=data.current_condition[0].temp_C + ' ºC'
}


updateDateTime()
updateTemp()
setInterval(updateDateTime, 1000*60) // Actualizo cada minuto
setInterval(updateTemp, 1000*60*30) // Actualizo cada media hora