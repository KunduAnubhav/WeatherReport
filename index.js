const API_KEY=`2f3889462c60c43305667742cafc861a`
const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")

const getweather= async(city)=>{
   weather.innerHTML=`<h2>Loading..... </h2>`
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f3889462c60c43305667742cafc861a&units=metric`
   const response= await fetch(url);
   const data=await response.json();//extract JSON from the http response do something with myJson
   return showWeather(data);

}

const showWeather=(data)=>{
  if(data.cod=="404"){
   weather.innerHTML=`<h2>City Not Found</h2>`
   return;
  }
   weather.innerHTML=`
         <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">  
         </div>
         <div>
            <h2>${data.main.temp}℃</h2>
            <h4>${data.weather[0].main}</h4>
         </div>
   `
}
form.addEventListener("submit",function(event){
   getweather(search.value)
   event.preventDefault();
}
)


