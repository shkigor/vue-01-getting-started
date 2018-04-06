document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var el_div = document.getElementById('nativejs');
    var el_input = el_div.firstElementChild;
    var el_p = el_input.nextElementSibling;
    console.dir(el_p);
    el_input.oninput = function (event) {
        console.log(event);
        el_p.innerText = event.target.value;
    };

    var myitem = document.createElement('li');
    var mytext = document.createTextNode("New list item");
    myitem.appendChild(mytext);
    document.body.appendChild(myitem);
}

