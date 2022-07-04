// Exercise I
    let a =  document.getElementById('container');
    console.log(a);
    let peteRichard = document.getElementsByClassName('list');
    let b = document.querySelector('.list li');
    console.log(b);
    let c = b.nextElementSibling;
    c.innerText = "Richard";
    console.log(c);
    let d = document.querySelector('.list');
    console.log(d);
        let e = d.firstElementChild;
    e.innerText = "Jad";
    console.log(e);
    let f = d.nextElementSibling.firstElementChild;
    f.innerText = "Jad";
    console.log(f);
    let g = d.nextElementSibling.firstElementChild.nextElementSibling.remove();
    let h = d.nextElementSibling.firstElementChild.nextElementSibling;
    console.log(g);


   // Exercise II
    let i =  document.querySelectorAll('div')[1];
    console.log(i);
    i.style.backgroundColor = 'blue';
    i.style.padding = '10px';
    let j = document.querySelectorAll('ul')[2];
    j.removeChild(j.children[0]);
    console.log(j);
    let k = document.querySelectorAll('ul')[2];
    console.log(k);
    k.style.border = 'thick solid black';
    let L = document.getElementsByTagName('body')[0];
    console.log(L);
    L.style.fontSize = '20px';
    

// Exercise III
    let m = document.querySelector('#navBar');
    console.log(m);
    m.id = 'socialNetworkNavigation';
    let n = document.querySelectorAll('ul')[3];
    console.log(n);
    let t = document.createElement('li');
    t.innerHTML = '<a href="#">LogOut</a>';
    n.appendChild(t);
    

    

    


