const API_KEY = '692cf28e81a7652765c76d2e94f8a380';

const fetchData = position => {
    const { latitude, longitude } = position.coords
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}')
        .then(response => response.json())
        .then(data => console.log(data))
    

    console.log(position)

}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}