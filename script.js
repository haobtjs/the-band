const slider=document.querySelectorAll('.image-slider');
var sliderIndex=0;
setInterval(()=>{
    slider.forEach((e,i)=>{
        if (i==sliderIndex){
            e.style.display='block';
        }else{
            e.style.display='none';
        }
    })
    sliderIndex++;
    if (sliderIndex==3) sliderIndex=0;
},5000)
function show(){
    document.querySelector('.dialog-box').style.display='block';
}
function hinden(e){
    const dialog=document.querySelector('.dialog-box').style.display='none';
}
function a(e){console.log('run');
    e.preventDefault();}
function showMenu(){
    const header=document.querySelector('#header');
    if(header.offsetHeight!=46){
        header.style.height='46px';
    }
    else header.style.height='auto';
}