const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");

card1.addEventListener('click', ()=>{addFlex(card1)});
card2.addEventListener('click', ()=>{addFlex(card2)});
card3.addEventListener('click', ()=>{addFlex(card3)});
card4.addEventListener('click', ()=>{addFlex(card4)});
card5.addEventListener('click', ()=>{addFlex(card5)});

function whatCardIsActive(){
    const isCard1Active = card1.classList.contains("active");
    const isCard2Active = card2.classList.contains("active");
    const isCard3Active = card3.classList.contains("active");
    const isCard4Active = card4.classList.contains("active");
    const isCard5Active = card5.classList.contains("active");

    switch (true){
        case isCard1Active:
            return card1;
        case isCard2Active:
            return card2;
        case isCard3Active:
            return card3;
        case isCard4Active:
            return card4;
        case isCard5Active:
            return card5;
    }
}

function addFlex(card){
    const cardActive = whatCardIsActive();
    cardActive.classList.remove("active");
    card.classList.add("active");
}
