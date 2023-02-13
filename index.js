var range = document.getElementsByClassName("size")[0];
var img = document.getElementsByClassName("img")[0];
var text = document.getElementsByClassName("text")[0];
var _value = document.getElementsByClassName("value")[0];
var button = document.getElementsByClassName("button")[0];

var pixelSize = range.value
_value.innerHTML = range.value
var characters;

range.oninput = ({ target: { value } }) => {
    pixelSize = value

    var pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.width = `${pixelSize}px`
        pixels[i].style.height = `${pixelSize}px`
    }

    _value.innerHTML = value
}

button.onclick = function () {
    var sqrt = Math.round(Math.sqrt(characters.length));
    var found = false;
    var amount = 0;
    var num1;
    var num2;
    // console.log(sqrt);
    // pixelSize = ;
    // possible = [];
    // for (let i = 0; i < characters.length/2; i++) {
    //     console.log(`${i}:${characters.length} | ${(characters.length/i)%1 == 0}`);
    //     if ((characters.length/i)%1 == 0)
    //         possible.push(i);
    // }

    while (!found) {
        neg = false
        pos = false

        if (Math.sqrt(characters.length)%1 == 0) {
            found = true;
            num1 = Math.sqrt(characters.length);
        } else {
            if ((characters.length/sqrt-amount)%1 == 0) // 1 minus
                neg = true;
            if ((characters.length/sqrt+amount)%1 == 0) // 1 plus
                pos = true;

            if (neg && !pos) {
                num1 = sqrt-amount;
                found = true;
            }
            else if (!neg && pos) {
                num2 = sqrt+amount;
                found = true;
            }
            else if (neg && pos) {
                num1 = sqrt-amount;
                found = true;
            }
            else if (!neg && !pos)
                amount += 1;
        }

        console.log(neg);
        console.log(pos);
    }

    console.log(num1);
    console.log(num2);

    // var pixels = document.getElementsByClassName("pixel");
    // for (let i = 0; i < pixels.length; i++) {
    //     pixels[i].style.width = `${pixelSize}px`
    //     pixels[i].style.height = `${pixelSize}px`
    // }

    // _value.innerHTML = pixelSize
};

text.oninput = ({ target: { value } }) => {
    characters = value.split('');

    for (let i = 0; i < characters.length; i++) {
        characters[i] = characters[i].charCodeAt(0) - 32;
        if (characters[i] > 255) characters[i] = 255;
        if (characters[i] < 0) characters[i] = 0;
    }

    if (characters.length % 3 != 0) {
        for (let i = 0; i < characters.length % 3; i++) {
            characters.push(0);
        }
    }

    img.innerHTML = ``;
    for (let i = 0; i < characters.length / 3; i++) {
        img.innerHTML +=
            `<div style="background-color: rgb(${characters[i * 3]}, ${characters[i * 3 + 1]}, ${characters[i * 3 + 2]}); width:${pixelSize}px; height:${pixelSize}px", class="pixel"></div>`
    }

}