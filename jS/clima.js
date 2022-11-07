
let clima = {
    apiKey: "7b0adcefb24db69dac13b43bde81045b",
    fetchClima: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=es`)
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
let geocode={
    reverseGeocode: function(latitude,longitude){
        
        var api_key = '5f76aa3f109b4201a55d6ac418de6ed9';
       
        var api_url = 'https://api.opencagedata.com/geocode/v1/json'

        var request_url = api_url
            + '?'
            + 'key=' + api_key
            + '&q=' + encodeURIComponent(latitude + ',' + longitude)
            + '&pretty=1'
            + '&no_annotations=1';

        // see full list of required and optional parameters:
        // https://opencagedata.com/api#forward

        var request = new XMLHttpRequest();
        request.open('GET', request_url, true);

        request.onload = function() {
            // see full list of possible response codes:
            // https://opencagedata.com/api#codes

            if (request.status === 200){
            // Success!
            var data = JSON.parse(request.responseText);
            // print the location
            clima.fetchClima(data.results[0].components.city)

            } else if (request.status <= 500){
            // We reached our target server, but it returned an error

            console.log("unable to geocode! Response code: " + request.status);
            var data = JSON.parse(request.responseText);
            console.log('error msg: ' + data.status.message);
            } else {
            console.log("server error");
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            console.log("unable to connect to server");
        };

        request.send();  // make the request

    },
    getLocation: function(){
        function success(data) {
            geocode.reverseGeocode(data.coords.latitude,data.coords.longitude)            
            }
                if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(success,console.error)
                }
                else{
                    clima.fetchClima("cusco")
                }
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


geocode.getLocation()