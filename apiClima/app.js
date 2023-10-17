const Apikey='0c5203a2d2be4341210053e6a7e637da';
const UrlBase='https://api.openweathermap.org/data/2.5/weather';

const btnCity=document.querySelector('#btncity');
const inputCity=document.querySelector('#city');


const fetchapi = url => fetch(url).then(response=>response.json());

async function getClima(lat, lon, apikey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchapi(url)
    const temperatura=(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML=temperatura+'°C -'+clima.name;
    pintaFondo(temperatura);
    pintaemoji(temperatura);
}

async function getClimabyCity(city,apikey){
    const url = `${UrlBase}?q=${city}&appid=${apikey}`;
    const clima= await fetchapi(url);
    const temperatura=(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML=temperatura+'°C -'+clima.name;
    pintaFondo(temperatura);
    pintaemoji(temperatura);
}

function pintaemoji(temp){
    const emo =document.querySelector('#emoji');
    if (temp<13){
        emo.innerHTML='🥶🥶';
    } else if(emo <22){
        emo.innerHTML='🌤️🌅';
    }else{
        emo.innerHTML='🥵☀️';
    }
}

// Obtener geolocalizacion 
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, Apikey);
  });

function buttonAction(){
    const city= inputCity.value;
    if(city){
        getClimabyCity(city, Apikey);
    }
}
btnCity.addEventListener('click', buttonAction);

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp<13){
        fondo.style.background='aqua';
    } else if(temp<22){
        fondo.style.background= 'orange';
    }else{
        fondo.style.background= 'red';
    }
}