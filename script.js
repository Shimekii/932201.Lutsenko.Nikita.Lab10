const zanaves = document.getElementById('image');
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');
const witch = document.getElementById('witch');
const hat = document.getElementById('hat');
const rabbit = document.getElementById('rabbit');
const bird = document.getElementById('bird');

let l, a;

zanaves.addEventListener('click', function(){
    zanaves.classList.remove('zanaves');
    zanaves.classList.add('raised');
})

lamp.addEventListener('click', function(){
    if (l == true){
        light.style.opacity = 0;
        l = false;
        witch.style.opacity = 0;
    }
    else{
        light.style.opacity = 1;
        light.style.transform = 'translateX(-50%) translateY(-50px)';
        l = true;
        witch.style.opacity = 1;
    }
})

function move(){
    if (a == true){
        rabbit.style.transform = 'translateY(-50px)';
        bird.style.transform = 'translateY(25px)';
        a = false;
    }
    else{
        rabbit.style.transform = 'translateY(50px)';
        bird.style.transform = 'translateY(-75px)';
        a = true;
    }
}

hat.addEventListener('click', function(){
    setInterval(move, 1000);
})

