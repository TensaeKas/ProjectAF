const text = document.getElementById('span');
const web = "WEBSITES!"
let i = 1;

setInterval(buildWeb, 130);

function buildWeb(){
    text.innerText = web.slice(0, i);
    i++;

    if(i > web.length){
        i = 1;
    }
}
