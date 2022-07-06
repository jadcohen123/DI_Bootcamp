// exercise I
let a = document.getElementsByTagName('h1');
console.log(a);
let b = document.querySelectorAll('article')[0];
b.removeChild(b.children[6]);
console.log(b);
function h2Click() {
let c = document.querySelectorAll('h2')[0];
c.style.backgroundColor = 'red';
}
function h3Click(){
let d = document.querySelectorAll("h3")[0];
d.style.display = "none";
}
function txtClick(){
    let e = document.querySelectorAll("article")[0];
    e.style.fontWeight = 'bold';
    }


    // execise II
let form = document.forms[0];
console.log(form);
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"))
console.log(document.getElementsByName('fname'));
console.log(document.getElementsByName('lname'));
form.addEventListener("submit", List);
function List(ev) {
  ev.preventDefault();
    firstName = form.elements.fname.value;
    lastName = form.elements.lname.value;
    if (firstName != "" && lastName != "") {
        ul = document.getElementsByClassName("usersAnswer")[0];
        fNameAnswer = document.createElement("li");
        fNameAnswer.innerText = firstName;
        lNameAnswer = document.createElement("li");
        lNameAnswer.innerText = lastName;
        ul.appendChild(fNameAnswer);
        ul.appendChild(lNameAnswer);
    }
}





    // exercise III
let allBoldItems;
function getBold_items() {
  allBoldItems = document.querySelectorAll('strong'); 
}
function highlight(){
    for (let i=0; i<allBoldItems.length; i++)
    {                                                    
     allBoldItems[i].style.color = "blue";
     }
}
function return_normal()
{
  for (let i=0; i<allBoldItems.length; i++) 
  {
       allBoldItems[i].style.color = "black";
  }
}
getBold_items();
highlight();
return_normal();



// exercise IV
let forms = document.forms[1];
forms.addEventListener("submit", volumeCalculater);
function volumeCalculater(ev){
    let radius = forms.radius.value;
    let volume = 4/3*Math.PI*Math.pow(radius,3);
    ev.preventDefault();
    console.log(`Radius = ${radius}, Volume = ${volume} `);
    forms.volume.value = volume;
}
