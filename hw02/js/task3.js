(function () {
    "use strict";

    function click_lorem(ev) {
        ev.preventDefault();
        let lorems = document.getElementsByClassName('lorem');
        let bottles = document.getElementsByClassName('bottles');
        let last = document.getElementsByClassName('last')[0];

        for (let i = 0; i < lorems.length; ++i) {
            lorems[i].style.display = 'block';
        }
        for (let i = 0; i < bottles.length; ++i) {
            bottles[i].style.display = 'none';
        }
        last.style.display = 'none';
    }

    function click_bottle(ev) {
        ev.preventDefault();
        let lorems = document.getElementsByClassName('lorem');
        let bottles = document.getElementsByClassName('bottles');
        let last = document.getElementsByClassName('last')[0];

        for (let i = 0; i < lorems.length; ++i) {
            lorems[i].style.display = 'none';
        }
        for (let i = 0; i < bottles.length; ++i) {
            bottles[i].style.display = 'block';
        }
        last.style.display = 'none';
    }

    function click_last(ev) {
        ev.preventDefault();
        let lorems = document.getElementsByClassName('lorem');
        let bottles = document.getElementsByClassName('bottles');
        let last = document.getElementsByClassName('last')[0];

        for (let i = 0; i < lorems.length; ++i) {
            lorems[i].style.display = 'none';
        }
        for (let i = 0; i < bottles.length; ++i) {
            bottles[i].style.display = 'none';
        }
        last.style.display = 'block';
    }

    function setup_links() {
        let lorem = document.getElementById('lorem');
        let bottle = document.getElementById('bottles');
        let last = document.getElementById('last');

        // Two ways both work.
        lorem.onclick = click_lorem;
        bottle.onclick = click_bottle;
        last.addEventListener('click', click_last, false);
    }

    window.addEventListener('load', setup_links, false);
})();