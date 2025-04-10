import './styles.css';
import { menu } from './menu.js';
import { about } from './about.js';
import { home } from './home.js';

document.addEventListener("DOMContentLoaded", home);

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
aboutButton.addEventListener('click', about);