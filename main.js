console.log("Hej");

let article = document.createElement('article');
document.body.appendChild(article);

const input = document.createElement('input');
input.placeholder = 'Skriv din ålder';
input.id = 'number';
input.style.fontSize = '2rem';
input.style.textAlign = 'center';

const button = document.createElement('button');
button.innerText = 'Spara';
button.style.marginLeft = '10px';
button.style.fontSize = '2rem';

article.append(input, button);

button.addEventListener('click', () => {
    getolder();
});

function getolder() {
    let value = document.getElementById('number').value;
    let header = document.createElement('h1');
    article.appendChild(header);
    console.log(Number(value));
    if (Number(value) < 18) {
        header.innerText = 'Du är för ung! under 18 år';
    }
    else if (Number(value) <= 65) {
        header.innerText = 'Du är över 18 men yngre än 65 år, precis rätt';
    } else if (Number(value) > 66) {
        header.innerText = 'Du är för gammal';
    }
    else {
        header.innerText = 'Felaktig inmatning';
    }
}