const contact = (() => {
    let contentElement;

    function init() {
        contentElement = document.getElementById("content");
        addTitle();
        addContactContents();
    }

    function addTitle () {
        let jollibeeName = document.createElement('div');
        jollibeeName.setAttribute('id', 'jollibee-name');

        let title = document.createElement('div');
        title.id= 'title';
        title.innerText = 'Contact';

        let signature = document.createElement('div');
        signature.id = 'signature';
        signature.innerText = 'Delicious is the Main Character XD';

        jollibeeName.appendChild(title);
        jollibeeName.appendChild(signature);

        contentElement.appendChild(jollibeeName);
    }

    function addContactContents() {
        let contactContent = document.createElement('div');
        contactContent.className = 'row';

        let homeBodyText = document.createElement('div');
        homeBodyText.className = 'home-body-text';

        let contactJollibeeHeader = document.createElement('h3');
        contactJollibeeHeader.innerText = 'Contact Jollibee';

        let twitterContact = document.createElement('a');
        twitterContact.className = 'twitter-follow-button';
        twitterContact.setAttribute('href', 'https://twitter.com/jollibee?ref_src=twsrc%5Etfw');
        twitterContact.setAttribute('data-show-count', 'false');
        twitterContact.innerText = 'Follow @jollibee';

        let twitterScript = document.createElement('script');
        twitterScript.setAttribute('async', 'async');
        twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        twitterScript.setAttribute('charset', 'utf-8');


        homeBodyText.appendChild(contactJollibeeHeader);
        homeBodyText.appendChild(twitterContact);
        homeBodyText.appendChild(twitterScript);
        homeBodyText.appendChild(breakElement());
        homeBodyText.appendChild(spanElement('654-098-999'));
        homeBodyText.appendChild(breakElement());
        homeBodyText.appendChild(spanElement('All over Philippines'));

        contactContent.appendChild(homeBodyText);

        contentElement.appendChild(contactContent);

    }

    function breakElement() {
        return document.createElement('br');
    }

    function spanElement(str) {
        let spanElement = document.createElement('span');
        spanElement.innerText = str;

        return spanElement;
    }

    init();
});

export {contact}