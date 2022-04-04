//to change the name of city when it is input

function getInfo() {
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
    

const button = document.querySelector(".search");
button.addEventListener("click"), function () {

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=962785f671489b57dbf66ef34008daec")
.then((response) => response.json())
    .then ((response) => {
    console.log(response);
})

// icons display by weather
.then(data =>{
   console.log(data); 
    for(i=0;i<5; i++){
        document.getElementById("img"+ (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})
};
}
// array for each day 
const d =new Date();
const weekday =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function checkDay(day){
for (i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay]
}
}