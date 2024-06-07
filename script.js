fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    localStorage['jsonData'] = JSON.stringify(myJson);

    debugger


    for (var i = 0; i < myJson.length; i++) {
        const div = document.createElement('div');
        div.classList.add('country-item');

        const img = document.createElement('img');
        img.classList.add('flag');
        img.setAttribute('src', myJson[i].flag);
        img.setAttribute('alt', "flag-img");

        const h3 = document.createElement('h3');
        h3.textContent = myJson[i].name;

        var li_list = ["Population", "Region", "Capital"];
        var li_values = [myJson[i].population, myJson[i].region, myJson[i].capital];

        const ul = document.createElement('ul');

        for (var j = 0; j < li_list.length; j++) {
            const li = document.createElement('li');
            li.textContent = li_list[j] + ": " + li_values[j];
            ul.appendChild(li);
        }


        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(ul);

        div.addEventListener('click', function (e) {
            displayCountryDetails(e, myJson);
        })

        var c_box = document.querySelector('#countries-box');
        c_box.appendChild(div);

        // if (i === 10) {
        //     return;
        // }
    }

    console.log(c_box);
}

fetchCountries();

debugger
const search = document.forms['input-form'].querySelector('input');
search.addEventListener('keyup', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const countries = document.getElementsByTagName('h3');

    document.getElementById('regions').selectedIndex = 0;

    Array.from(countries).forEach(function (country) {
        if (country.innerText.toLowerCase().indexOf(searchTerm) != -1) {
            country.parentElement.style.display = "block";
        } else {
            country.parentElement.style.display = "none";
        }
    })
})

function selectRegions() {
    const list = document.getElementById('regions');
    debugger

    document.getElementById('search').value = "";

    const selected_region = list.options[list.selectedIndex].text.toLowerCase();

    const regions = document.getElementsByTagName('li');

    for (var i = 1; i < regions.length; i += 3) {
        if (regions[i].innerText.toLowerCase().indexOf(selected_region) != -1) {
            regions[i].parentElement.parentElement.style.display = "block";
        } else {
            regions[i].parentElement.parentElement.style.display = "none";
        }
    }

    console.log(list);
}

function toggleTheme() {
    // alert('clicked');
    debugger

    var currentTheme = document.documentElement.getAttribute('data-theme');
    var text = document.getElementById('dark-mode-text');

    if (currentTheme === 'light') {
        targetTheme = 'dark';
        text.innerText = "Light Mode";
        document.getElementsByTagName('ion-icon')[0].setAttribute('name', 'sunny-outline');
    } else if (currentTheme === 'dark') {
        targetTheme = 'light';
        text.innerText = "Dark Mode";
        document.getElementsByTagName('ion-icon')[0].setAttribute('name', 'moon-outline');
    }

    document.documentElement.setAttribute('data-theme', targetTheme);

}


function displayCountryDetails(e, myJson) {

    // console.log(myJson);

    var main = document.getElementsByClassName('main');
    var section = document.getElementsByClassName('details-section');

    debugger
    if (e.target.tagName === "IMG" || e.target.tagName === "H3" || e.target.tagName === "UL") {
        var parent = e.target.parentElement;
        var children = parent.children;
        // console.log("JSON"+ myJson);
        main[0].style.display = "none";
        section[0].style.display = "block";

        setData(myJson, children, section, false);

    } else if (e.target.tagName === "LI") {
        var parent = e.target.parentElement.parentElement;
        var children = parent.children;
        main[0].style.display = "none";
        section[0].style.display = "block";

        setData(myJson, children, section, false);

    }
}

function setData(myJson, children, section, recursion) {
    debugger
    var textgrid = document.getElementsByClassName('text-grid');
    textgrid[0].style.display = "grid";
    for (var i = 0; i < myJson.length; i++) {
        if (myJson[i].name.toLowerCase() === (recursion ? children.toLowerCase() : children[1].innerText.toLowerCase())) {
            section[0].querySelectorAll('h3')[0].innerText = myJson[i].name;
            section[0].querySelectorAll('img')[0].src = myJson[i].flag;
            section[0].querySelectorAll('img')[0].alt = "flag-image";
            section[0].querySelectorAll('.native-name')[0].innerText = myJson[i].nativeName;
            section[0].querySelectorAll('.region')[0].innerText = myJson[i].region;
            if (myJson[i] && myJson[i].capital) {
                section[0].querySelectorAll('.capital')[0].innerText = myJson[i].capital;
            } else {
                section[0].querySelectorAll('.capital')[0].innerText = "";
            }

            if (myJson[i] && myJson[i].currencies) {
                section[0].querySelectorAll('.currencies')[0].innerText = myJson[i].currencies[0].name;
            } else {
                section[0].querySelectorAll('.currencies')[0].innerText = "";
            }
            section[0].querySelectorAll('.population')[0].innerText = myJson[i].population;
            section[0].querySelectorAll('.sub-region')[0].innerText = myJson[i].subregion;
            section[0].querySelectorAll('.tld')[0].innerText = myJson[i].topLevelDomain[0];
            section[0].querySelectorAll('.languages')[0].innerText = myJson[i].languages[0].name;

            var nearbyCountryCodes = myJson[i].borders;
            var nearbyCountries = [];

            debugger
            if (myJson[i] && myJson[i].borders) {
                for (var j = 0; j < myJson.length; j++) {
                    for (k = 0; k < nearbyCountryCodes.length; k++) {
                        if (myJson[j].alpha3Code === nearbyCountryCodes[k]) {
                            nearbyCountries.push(myJson[j].name);
                        }
                    }
                }
            } else {
                nearbyCountries.push("I do not have any borders!");
            }


            const ul = document.getElementById('neighboring-countries')
            ul.innerHTML = '';

            // if(nearbyCountryCodes.length === 0) {
            //     return;
            // }

            for (var j = 0; j < nearbyCountries.length; j++) {
                var li = document.createElement('li');
                li.textContent = nearbyCountries[j];

                li.addEventListener('click', function (e) {
                    // debugger
                    setData(myJson, e.target.innerText, section, true);
                })

                ul.appendChild(li);
            }

            console.log(nearbyCountries);
        }
    }
}

function back() {
    const main = document.getElementsByClassName('main');
    const section = document.getElementsByClassName('details-section');

    section[0].style.display = "none";
    main[0].style.display = "block";

}