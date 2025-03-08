const iloscElems = document.querySelectorAll(".ilosc"),
  zamElems = document.querySelectorAll(".zam"),
  addButtons = document.querySelectorAll(".add"),
  orderButtons = document.querySelectorAll(".order");

check_if();
let order_m = 0;
function check_if() {
  iloscElems.forEach((elem) => {
    if (elem.innerHTML === "0") {
      elem.style.backgroundColor = "Red";
    } else if (elem.innerHTML >= 1 && elem.innerHTML <= 5) {
      elem.style.backgroundColor = "Yellow";
    }
    else if (elem.innerHTML >= 60) {
      elem.style.backgroundColor = "Green"
    }
    else {
      elem.style.backgroundColor = "Honeydew";
    }
  });
}

/*addButtons.forEach((elem, index) => {
//  elem.addEventListener("click", () => {
 //   let nowaIlosc = window.prompt("Podaj nową ilość");
  //  iloscElems[index].innerHTML = nowaIlosc;
  //  check_if();
//  });
});*/
addButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    let nowaIlosc;
    while (true) {
      nowaIlosc = window.prompt("Podaj nową ilość (tylko liczby):");

      // Jeśli użytkownik kliknie "Anuluj", przerwij operację
      if (nowaIlosc === null) return;

      // Sprawdzenie, czy wpisana wartość jest poprawną liczbą
      if (!isNaN(nowaIlosc) && nowaIlosc.trim() !== "" && Number(nowaIlosc) >= 0) {
        nowaIlosc = Math.floor(Number(nowaIlosc)); // Konwersja na liczbę całkowitą
        break;
      }

      alert("Wprowadź poprawną liczbę!");
    }

    iloscElems[index].innerHTML = nowaIlosc;
    check_if();
  });
});

orderButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    order_m++;
    window.alert(
      `Zamówienie nr: ${order_m} ilosc: ${iloscElems[index].innerHTML}`
    );
  });
});



