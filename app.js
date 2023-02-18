function pegarValor() {
  let year = document.getElementById("input");
  year = year.value;
  if (year <= 1582) {
    alert(
      `O ano deve ser maior que 1582 - o primeiro ano do calendário gregoriano.`
    );
  } else {
    function leapYear() {
      let year = document.getElementById("input");
      year = year.value;

      if (year % 4 === 0 && year % 100 !== 0) {
        let output = document.getElementById("output");
        output.innerHTML = `${year} é um ano bissexto!`;
        let bar = document.querySelector(".bar");
        bar.style.backgroundColor = "#95CD41";
      } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        let output = document.getElementById("output");
        output.innerHTML = `${year} é um ano bissexto!`;
        let bar = document.querySelector(".bar");
        bar.style.backgroundColor = "#95CD41";
      } else {
        let output = document.getElementById("output");
        output.innerHTML = `${year} não é um ano bissexto!`;
        let bar = document.querySelector(".bar");
        bar.style.backgroundColor = "#DA1212";
      }
    }

    leapYear();
  }
  document.getElementById("input").value = "";
}
