const menu = (() => {
    let contentElement;

    function init() {
        contentElement = document.getElementById("content");
        addTitle();
        addMenuContents();
    }

    function addTitle () {
        let jollibeeName = document.createElement('div');
        jollibeeName.setAttribute('id', 'jollibee-name');

        let title = document.createElement('div');
        title.id= 'title';
        title.innerText = 'Menu';

        let signature = document.createElement('div');
        signature.id = 'signature';
        signature.innerText = 'Delicious is the Main Character XD';

        jollibeeName.appendChild(title);
        jollibeeName.appendChild(signature);

        contentElement.appendChild(jollibeeName);
    }

    function addMenuContents() {
        let divRow = document.createElement('div');
        divRow.className = 'row';

        let divRowWithRowDirection = document.createElement('div');
        divRowWithRowDirection.className = 'row-row-direction';

        let column1 = document.createElement('div');
        column1.className = 'column';
        column1.appendChild(menuPic('images/spaghetti.jpeg', 'Jolly Spaghetti'));
        column1.appendChild(menuPic('images/chickenjoy.png', 'Chicken Joy'));
        column1.appendChild(menuPic('images/umburg.jpg', 'Yumburger'));

        let column2 = document.createElement('div');
        column2.className = 'column';
        column2.appendChild(menuDescription('JOLLY SPAG', 
            'Deliciously satisfying spaghetti'));
        column2.appendChild(menuDescription('CHICKEN JOY',
            'Superior tasting Chickenjoy'));
        column2.appendChild(menuDescription('YUM BURGER',
            'Mouth-watering Yumburger'));

        divRowWithRowDirection.appendChild(column1);
        divRowWithRowDirection.appendChild(column2);

        divRow.appendChild(divRowWithRowDirection);
        contentElement.appendChild(divRow);
    }

    function menuPic(src, alt) {
        let menuPic = document.createElement('img');
        menuPic.className = 'menu-pic column';
        menuPic.setAttribute('src', src);
        menuPic.setAttribute('alt', alt);

        return menuPic;
    }

    function menuDescription(h2, description) {
        let menuDescription = document.createElement('div');
        menuDescription.className = 'pic-description column';

        let homeBodyText = document.createElement('div');
        homeBodyText.className = 'home-body-text';

        let header = document.createElement('h2');
        header.innerText = h2;

        let breakElement = document.createElement('br');
        let desc = document.createElement('span');
        desc.innerText = description;

        homeBodyText.appendChild(header);
        homeBodyText.appendChild(breakElement);
        homeBodyText.appendChild(desc);

        menuDescription.appendChild(homeBodyText);

        return menuDescription;
    }

    init();
});

export {menu};