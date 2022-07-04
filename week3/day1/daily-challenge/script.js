//daily challenge

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
let divMercury = document.createElement('div');
divMercury.setAttribute("class", "planet")

let divVenus = document.createElement('div');
divVenus.setAttribute("class", "planet")
let divEarth = document.createElement('div');
divEarth.setAttribute("class", "planet")
let divMars = document.createElement('div');
divMars.setAttribute("class", "planet")
let divJupiter = document.createElement('div');
divJupiter.setAttribute("class", "planet")
let divSaturn = document.createElement('div');
divSaturn.setAttribute("class", "planet")
let divUranus = document.createElement('div');
divUranus.setAttribute("class", "planet")
let divNeptune = document.createElement('div');
divNeptune.setAttribute("class", "planet")
let divPluto = document.createElement('div');
divPluto.setAttribute("class", "planet")

document.getElementsByClassName('listPlanets')[0].style.backgroundColor = "black";

let mercuryAppend = document.getElementsByClassName('listPlanets')[0];
divMercury.style.backgroundColor = 'green';
mercuryAppend.appendChild(divMercury); 

let venusAppend = document.getElementsByClassName('listPlanets')[0];
divVenus.style.backgroundColor = 'red';
venusAppend.appendChild(divVenus);

let earthAppend = document.getElementsByClassName('listPlanets')[0];
divEarth.style.backgroundColor = 'blue';
earthAppend.appendChild(divEarth); 

let marsAppend = document.getElementsByClassName('listPlanets')[0];
divMars.style.backgroundColor = 'white';
marsAppend.appendChild(divMars);

let jupiterAppend = document.getElementsByClassName('listPlanets')[0];
divJupiter.style.backgroundColor = 'orange';
jupiterAppend.appendChild(divJupiter); 

let saturnAppend = document.getElementsByClassName('listPlanets')[0];
divSaturn.style.backgroundColor = 'pink';
saturnAppend.appendChild(divSaturn);

let uranusAppend = document.getElementsByClassName('listPlanets')[0];
divUranus.style.backgroundColor = 'cyan';
uranusAppend.appendChild(divUranus); 

let neptuneAppend = document.getElementsByClassName('listPlanets')[0];
divNeptune.style.backgroundColor = 'brown';
neptuneAppend.appendChild(divNeptune);

let plutoAppend = document.getElementsByClassName('listPlanets')[0];
divPluto.style.backgroundColor = 'lightblue';
plutoAppend.appendChild(divPluto); 



//im having trouble creating the moons.
