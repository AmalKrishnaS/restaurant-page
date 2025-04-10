import fernTreeImage from './ferns.jpg';

export function home(event) {

    if (event.target instanceof HTMLElement) {
        event.target.style.backgroundColor = 'teal';
    }

    const menuButton = document.querySelector('.menu');
    menuButton.style.backgroundColor = 'white';

    const aboutButton = document.querySelector('.about');
    aboutButton.style.backgroundColor = 'white';

    const contentDiv = document.querySelector('.content');
    contentDiv.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Valkyrie\'s Valhalla';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to Valkyrie\'s Valhalla, the finest in Valhalla. We sell premium Valhalla food with whatever.'
    
    const image = document.createElement('img');
    image.src = fernTreeImage;
    image.alt = 'fern tree';

    contentDiv.append(heading, paragraph, image);
}
