let id = "";

document.getElementById("Start").addEventListener("click", init);

async function init() {
    let countFace = 1;

    await fetch('https://randomuser.me/api/?results=2')
        .then(response => response.json())
        .then(data => countFace = InyectarDatos(data, countFace))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    let NumRandom = Math.random();
    await fetch('https://robohash.org/' + NumRandom)
        .then(response => response.blob())
        .then(data => countFace = inyectar('https://robohash.org/' + NumRandom, "Robot", countFace))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    fetch('https://api.adorable.io/avatars/200/' + NumRandom)
        .then(response => response.blob())
        .then(data => countFace = inyectar('https://api.adorable.io/avatars/200/' + NumRandom, "Avatar", countFace))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    
        document.getElementById("Start").innerText = "Repartir cartas";
        document.getElementById("Start").removeEventListener("click",init);
        document.getElementById("Start").addEventListener("click",Mazos);
}

async function Mazos() {

    await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
        .then(response => response.json())
        .then(data => FindIDDeck(data))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    fetch('https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=20')
        .then(response => response.json())
        .then(data => card(data))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

        document.getElementById("Start").innerText = "Borrar";
        document.getElementById("Start").removeEventListener("click",Mazos);
        document.getElementById("Start").addEventListener("click",Clean);
}

function InyectarDatos(DataImagenes, countFace) {

    DataImagenes.results.forEach(element => {
        document.getElementById("p" + countFace).innerText = element.name.first;
        document.getElementById("img" + countFace).src = element.picture.medium;
        countFace++;
    });

    return countFace;
}

function inyectar(elementimg, elementp, countFace) {
    document.getElementById("p" + countFace).innerText = elementp;
    document.getElementById("img" + countFace).src = elementimg;
    countFace++;
    return countFace;
}

/*
function Face(data) {
    console.log(data);
    data.results.forEach(element => {
        document.getElementById("p" + countFace).innerText = element.name.first;
        document.getElementById("img" + countFace).src = element.picture.medium;
        countFace++;
    });
}

function FaceRobot(blob) {
    document.getElementById("p" + countFace).innerText = "Robot";
    document.getElementById("img" + countFace).src = blob;
    countFace++;
}

function FaceAvatar(img) {
    document.getElementById("p" + countFace).innerText = "Avatar";
    document.getElementById("img" + countFace).src = img;
    countFace++;
}
*/

function FindIDDeck(data) {
    id = data.deck_id;
    console.log(id);
}

function card(data) {
    let countCard = 1;
    data.cards.forEach(element => {
        document.getElementById("imgC" + countCard).src = element.image;
        countCard++;
    });
}

function Clean() {
    for (let a = 1; a < 5; a++) {
        document.getElementById("p" + a).innerText = "";
        document.getElementById("img" + a).src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png/v1/fill/w_600,h_400,strp/fondo_transparente_png_by_imsnowbieber_d3jme6i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvOWM2NGNmZTMtYmIzYi00YWU4LWI1YTYtZDJmMzlkMjFmZjg3XC9kM2ptZTZpLThjNzAyYWQ0LTRiN2EtNDc2My05OTAxLTk5ZjhiNGYwMzhiMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ymv-MHRcmXXpzmL3f0xZ0mCcyU85lCLnk0jbOnCO8Zg";
    }
    for (let a = 1; a <= 20; a++) {
        document.getElementById("imgC" + a).src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png/v1/fill/w_600,h_400,strp/fondo_transparente_png_by_imsnowbieber_d3jme6i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvOWM2NGNmZTMtYmIzYi00YWU4LWI1YTYtZDJmMzlkMjFmZjg3XC9kM2ptZTZpLThjNzAyYWQ0LTRiN2EtNDc2My05OTAxLTk5ZjhiNGYwMzhiMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ymv-MHRcmXXpzmL3f0xZ0mCcyU85lCLnk0jbOnCO8Zg";
    }

    document.getElementById("Start").innerText = "Crear Jugadores";
    document.getElementById("Start").removeEventListener("click",Clean);
    document.getElementById("Start").addEventListener("click",init);
}
