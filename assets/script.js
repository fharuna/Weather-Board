//to change the name of city when it is input

function getInfo() {
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=962785f671489b57dbf66ef34008daec")
.then(response => response.json())

// icons display by weather
.then(data =>{
    for(i=0;i<5; i++){
        document.getElementById("img"+ (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

// array for each day function
