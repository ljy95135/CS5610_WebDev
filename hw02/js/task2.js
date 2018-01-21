(function () {
    "use strict";

    function alert_value() {
        let num = document.getElementById('header').innerText;
        alert('Current value:' + num);
    }

    function increment() {
        let header = document.getElementById('header');
        let num = Number(header.innerText);
        header.innerText = String(num + 1);
    }

    function add_paragraph() {
        let body = document.children[0].children[1];
        let new_p = document.createElement('p');
        new_p.innerText = document.getElementById('header').innerText;
        //existing node is null to add up at the bottom.
        body.insertBefore(new_p, null);
    }

    function setup_buttons() {
        let alert = document.getElementById('alert');
        let add1 = document.getElementById('add1');
        let makep = document.getElementById('makep');

        alert.addEventListener('click', alert_value, false);
        add1.addEventListener('click', increment, false);
        makep.addEventListener('click', add_paragraph, false);
    }

    window.addEventListener('load', setup_buttons, false);

})();