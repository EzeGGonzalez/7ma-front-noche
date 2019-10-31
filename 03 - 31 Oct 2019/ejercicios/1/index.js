document.querySelector('button').onclick= function() {
  var heading = document.querySelector('h1').innerText;
  var capital = heading[0].toUpperCase() + heading.slice(1);
  document.querySelector('h1').innerText = capital;
};