export function menu(event) {
    event.target.style.backgroundColor = 'teal';

    const homeButton = document.querySelector('.home');
    homeButton.style.backgroundColor = 'white';

    const aboutButton = document.querySelector('.about');
    aboutButton.style.backgroundColor = 'white';

    const contentDiv = document.querySelector('.content');
    contentDiv.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const list = document.createElement('ol');
    list.textContent = 'Today\'s specials';

    const firstItem = document.createElement('li');
    firstItem.textContent = 'Blah Blah';

    const secondItem = document.createElement('li');
    secondItem.textContent = 'Halb Halb';
    
    list.append(firstItem, secondItem);

    contentDiv.appendChild(list);

}