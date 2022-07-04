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


    // execise II/////////////////





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



// exercise IV//////////////////