let clima = {
    apiKey: "7b0adcefb24db69dac13b43bde81045b",
    fetchClima: function(ciudad){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`)
        .then((response)=>response.json())
        .then((data)=>this.mostrarClima(data))
    },
    mostrarClima: function(data){
        const{name}=data
        const{country}=data.sys
        const{icon,description}=data.weather[0]
        const{temp,humidity}=data.main
        const{speed}=data.wind
        document.querySelector(".ciudad").innerHTML=`<h4>Asi esta el clima en:<h/4><h3></br> ${name}, ${country}.</h3>`
        document.querySelector(".icon").src= `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".descripcion").innerHTML=description
        document.querySelector(".temp").innerHTML=`${temp.toFixed(1)}° C`
        document.querySelector(".viento").innerHTML=`Viento: ${speed} km/h`
        document.querySelector(".humedad").innerHTML=`Humedad: ${humidity}%`
        document.querySelector(".clima").classList.remove("loading")
    },
    buscar:function(){
        this.fetchClima(document.querySelector(".buscar").value)
    }
}

document.querySelector(".buscador button").addEventListener('click',function(){
    clima.buscar()
})
document.querySelector(".buscar").addEventListener('keyup', function(e){
    if(e.key=="Enter"){
        clima.buscar()
    }
})
clima.fetchClima("cusco")