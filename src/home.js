const home = (() => {
    let contentElement;

    function init() {
        contentElement = document.getElementById("content");
        addTitle();
        addHomeContents();
    }

    function addTitle () {
        let jollibeeName = document.createElement('div');
        jollibeeName.setAttribute('id', 'jollibee-name');

        let title = document.createElement('div');
        title.id= 'title';
        title.innerText = 'Jollibee';

        let signature = document.createElement('div');
        signature.id = 'signature';
        signature.innerText = 'Delicious is the Main Character XD';

        jollibeeName.appendChild(title);
        jollibeeName.appendChild(signature);

        contentElement.appendChild(jollibeeName);
    }

    function addHomeContents() {
        let homeBodyRow = document.createElement('div');
        homeBodyRow.className = 'home-body row';

        let column1 = document.createElement('div');
        column1.className = 'column';
        column1.appendChild(createHomeBodyText('Deliciously satisfying spaghetti'));
        column1.appendChild(createHomeBodyText('Superior-tasting Chickenjoy'));
        column1.appendChild(createHomeBodyText('Mouth-watering Yumburger'));
        
        let column2 = document.createElement('div');
        column2.className = 'column';

        let jollibeePic = document.createElement('img');
        jollibeePic.id = 'jollibee-pic';
        jollibeePic.setAttribute('src', 'images/jabee.png');

        column2.appendChild(jollibeePic);

        homeBodyRow.appendChild(column1);
        homeBodyRow.appendChild(column2);

        contentElement.appendChild(homeBodyRow);
    }

    function createHomeBodyText(text) {
        let homeBodyText = document.createElement('div');
        homeBodyText.className = 'home-body-text';

        let italicizedText = document.createElement('em');
        italicizedText.innerText = text;

        homeBodyText.appendChild(italicizedText);

        return homeBodyText;
    }

    init();
});

export {home}