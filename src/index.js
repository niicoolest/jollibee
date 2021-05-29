import { contact } from './contact.js';
import {home} from './home.js'
import { menu } from './menu.js';

function addListenerToNavigation() {
    let home = document.getElementById('home');
    let menu = document.getElementById('menu');
    let contact = document.getElementById('contact');

    home.addEventListener('click', homeTabListener);
    menu.addEventListener('click', menuTabListener);
    contact.addEventListener('click', contactTabListener);
}

function homeTabListener() {
    removeContainerContents();
    this.className = 'chosen';
    document.getElementById('menu').className = '';
    document.getElementById('contact').className = '';
    home();
}

function menuTabListener() {
    removeContainerContents();
    this.className = 'chosen';
    document.getElementById('home').className = '';
    document.getElementById('contact').className = '';
    menu();
}

function contactTabListener() {
    removeContainerContents();
    this.className = 'chosen';
    document.getElementById('menu').className = '';
    document.getElementById('home').className = '';
    contact();
}

function removeContainerContents() {
    document.getElementById('content').innerHTML = '';
}

function init() {
    addListenerToNavigation();
    document.getElementById('home').className = 'chosen';
    home();
}

init();