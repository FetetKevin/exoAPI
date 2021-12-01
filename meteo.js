var callBackGetSuccess = function(data) {
    console.log("donnees api :", data)
    var element = document.getElementById("resultat");
    var weather = data.weather[0].description;
    var bg = document.getElementById("bg");
    element.innerHTML = "It's " + data.main.temp + "° in " + data.name + " !";
    
if (weather == "clear sky") {
        bg.className = ''
        bg.classList.add("soleil");
    }
    else if (weather == "few clouds" || weather == "scattered clouds" || weather == "broken clouds" || weather == "overcast clouds") {
        bg.className = ''
        bg.classList.add("nuageux");
    }
    else if (weather == "rain" || weather == "shower rain" || weather == "light rain") {
        bg.className = ''
        bg.classList.add("pluie");
    }
    else if (weather == "thunderstorm") {
        bg.className = ''
        bg.classList.add("orage");
    }
    else if (weather == "snow") {
        bg.className = ''
        bg.classList.add("neige");
    }
    else if (weather == "mist") {
        bg.className = ''
        bg.classList.add("vent");
    }  
}

function getWeather() {
    
    var userQuery = document.getElementById("userQuery").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+userQuery+"&units=metric&appid=82ce023a35ef5ea9a9a216f786878f6a"
    
    $.get(url, callBackGetSuccess).done(function() {
            //alert( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            //alert( "finished" );
        });
}

// Replace ./data.json with your JSON feed
fetch('./cities.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    //console.log(data)
    
    function create_btn(){
        let select = document.createElement('select');
        select.className = 'city';
        select.id= 'userQuery';
        let elem = document.getElementById('cities');
        elem.prepend(select);
        for(i=0; i<data.length;i++){
            let op = document.createElement('option');
            op.setAttribute('value', `${data[i].name}`);
            op.innerHTML = `${data[i].name}`;
            select.appendChild(op);
        }
    }
    function show(){
        let btn = document.querySelector('.btn');
        btn.addEventListener("click", function(){
            let value = document.querySelector('.city').value;
            document.getElementById('res').innerHTML = value;
        })
    }
    create_btn();
    show();
  })
  .catch((err) => {
    // Do something for an error here
  })