console.log("Weather function invoked");
async function getWeather()
{
    var key = '1c8e8bb0b6a02c074b1de0c11a9264e7';
    var city = document.getElementById("city").value;
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="
    url = url.concat(city).concat("&appid=").concat(key).concat('&units=metric');
    let result = await fetch(url);
    let obj = await result.json();
    var country = obj.city.country;
    var ans = document.getElementById("result");
    ans.innerHTML = '<p id = "country">'+'Country name: '+country+'</p>';
    label = [];
    data = [];
    var res = document.getElementById("result");
    res.innerHTML = '<p id = "country">'+'Country name: '+country+'</p>'+'<p id = "result">Max Temp is: '+obj.list[0].main.temp_max+'<sup>&#9675;</sup>C<br>Min Temp is: '+obj.list[0].main.temp_min+'<sup>&#9675;</sup>C</p>';
    for(i=0;i<40;i+=8)
    {
        var date = obj.list[i].dt_txt.split(" ");
        label.push(date[0]);
        data.push(obj.list[i].main.temp);
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Temperature',
                data: data,
                backgroundColor: [
                    'red','blue','green','violet','teal'
                ],
                borderColor: [
                    'black','black','black','black','black'
                ]
            }]
        },
    });
    
}