
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const leftSide = document.getElementById('leftSide-2');
const logoImg=document.getElementById('logoImg')


toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('translate-x-0');
  leftSide.classList.toggle('mr-5')
  logoImg.classList.toggle('hidden')

});

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('translate-x-0');
   leftSide.classList.add('mr-5')
  
});

document.addEventListener('click', (e) => {
  leftSide.classList.remove('mr-5')
  logoImg.classList.remove('hidden')
  
  if (!toggleBtn.contains(e.target)) sidebar.classList.remove('translate-x-0');
});



  // Digital Clock Function
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').innerText = `${hours}:${minutes}:${seconds}`;

    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Set'];
    const months=['January','Febuary','March','April','May','June','July','Auguest','Septembar','October','November','December'];
    
    const dayName=days[now.getDay()];
    const monthName=months[now.getMonth()];
    const date=now.getDate();
    const year=now.getFullYear();

    document.getElementById('date').textContent=`${dayName}-${date}-${monthName}-${year}`;

  }
  setInterval(updateClock, 1000);
  updateClock();

  // Weather API Fetch
  async function fetchWeather() {
    const apiKey = '3c347c574d00f8eb6ffea656c316f7be'; // Replace with your API key
    const city = 'Dhaka'; // Change to your city
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    const temperature = data.main.temp;
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById('weatherText').innerText = `${temperature}°C`;
    // document.getElementById('weatherIcon').src = weatherIcon;
  }
  fetchWeather();