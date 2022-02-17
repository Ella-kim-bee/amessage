// ========== menu toggle ==========
let btnToggle = document.getElementById("btnToggle");
let $header = document.getElementById("header");
let $span = document.querySelector("button#btnToggle > span");

btnToggle.addEventListener('click', function(e){
    let e2 = e ? e : window.event;
$header.classList.toggle('on');
    if($header.classList.contains('on')){
        $span.innerHTML = "&Cross;";
    }
    else{
        $span.innerHTML = "&equiv;";
    }        
});

// ========== button.chkBox toggle ==========
let btnChkBox = document.querySelectorAll(".chkBox");

for(let i = 0; i < btnChkBox.length; i++){
  btnChkBox[i].addEventListener('click', function(e){
    let e2 = e ? e : window.event;
    btnChkBox[i].classList.toggle('chk');
  });
}



// ========== button.star toggle ==========
let btnStar = document.querySelectorAll(".star");

for(let i = 0; i < btnChkBox.length; i++){
  btnStar[i].addEventListener('click', function(e){
    let e2 = e ? e : window.event;
    btnStar[i].classList.toggle('chk');
  });
}

        
        

