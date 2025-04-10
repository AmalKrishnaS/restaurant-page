export function about(event) {
    event.target.style.backgroundColor = 'teal';

    const menuButton = document.querySelector('.menu');
    menuButton.style.backgroundColor = 'white';

    const homeButton = document.querySelector('.home');
    homeButton.style.backgroundColor = 'white';

    const contentDiv = document.querySelector('.content');
    contentDiv.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'About';

    const p = document.createElement('p');
    p.textContent = 'We are blah blah blah';

    contentDiv.append(heading, p);

}