var counter = 1;




document.querySelector(".add-button").addEventListener("click", function() {
  var elem = document.createElement("fieldset");
  elem.setAttribute("class", "beverage");
  elem.innerHTML = `
        <h4 class="beverage-count">Напиток №</h4>
        <label class="field">
          <span class="label-text">Я буду</span>
          <select>
            <option value="espresso">Эспрессо</option>
            <option value="capuccino" selected>Капучино</option>
            <option value="cacao">Какао</option>
          </select>
        </label>
        <div class="field">
          <span class="checkbox-label">Сделайте напиток на</span>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="usual" checked />
            <span>обычном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="no-fat" />
            <span>обезжиренном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="soy" />
            <span>соевом молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="coconut" />
            <span>кокосовом молоке</span>
          </label>
        </div>
        <div class="field">
          <span class="checkbox-label">Добавьте к напитку:</span>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="whipped cream" />
            <span>взбитых сливок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="marshmallow" />
            <span>зефирок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="chocolate" />
            <span>шоколад</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="cinnamon" />
            <span>корицу</span>
          </label>
        </div>
`;
  document.querySelector(".beverage").after(elem);
});

function getBeveragesCountString() {
    const dirinksCount = document.querySelectorAll('.beverage').length;
    const lastDigit = dirinksCount % 10;
    if (dirinksCount >= 5 && dirinksCount <= 20 || lastDigit >= 5) {
        return `Вы заказали ${dirinksCount} напитков`
    }
    if (lastDigit === 1) {
        return `Вы заказали ${dirinksCount} напиткок`
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return `Вы заказали ${dirinksCount} напитка`
    }
}


var btn = document.getElementById("openModal");
var modalBack = document.getElementsByClassName("modal")[0];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div id="myModal" class="modal"> 
    <div class="modal-content"> 
      <span class="close">&times;</span>
      <p>Заказ сделан!</p>
    </div>
  </div>`
  document.querySelector('body').appendChild(modal);
  let modalClose = document.getElementsByClassName("close")[0];
  modalClose.addEventListener("click", function () {
    modal.remove();
  });
});