document.addEventListener("DOMContentLoaded", function() {	
	function removeBeverage(event) {
        var beverages = document.querySelectorAll('.beverage');
        if (beverages.length > 1) {
            event.target.closest('.beverage').remove();
            beverages.forEach(function(beverage, index) {
                var block = beverage.querySelector('.beverage-count');
                block.textContent = `Напиток №${index + 1}`;
            });
        }
    }

    var beverages = document.querySelectorAll('.beverage');
    beverages.forEach(function(beverage, index) {
        var block = beverage.querySelector('.beverage-count');
        block.textContent = `Напиток №${index + 1}`;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");
        beverage.prepend(deleteButton);

        deleteButton.addEventListener("click", removeBeverage);
    });

    document.querySelector(".add-button").addEventListener("click", function() {
        var newBeverage = document.createElement("fieldset");
        newBeverage.setAttribute("class", "beverage");
        newBeverage.innerHTML = `
          <form>  
            <h4 class="beverage-count">Напиток №${document.querySelectorAll('.beverage').length + 1}</h4>
            <button class="delete-button">x</button>
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
          </form>  
        `;
        
        document.querySelector(".beverage").after(newBeverage);

        beverages = document.querySelectorAll('.beverage');
        beverages.forEach(function(beverage, index) {
            var block = beverage.querySelector('.beverage-count');
            block.textContent = `Напиток №${index + 1}`;
        });

        newBeverage.querySelector(".delete-button").addEventListener("click", removeBeverage);
    });
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

document.getElementById("open-order").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("order").style.display = "block";
});

document.getElementById("close-order").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("order").style.display = "none";
});

function buildOrderTable() {
    const table = document.createElement("table");
    table.appendChild(buildTableHeader());

    for (beverage of document.querySelectorAll(".beverage")) {
        const row = document.createElement("tr");

        const beverageTypeSelection = beverage.querySelector("select");
        const beverageType = beverageTypeSelection.options[beverageTypeSelection.selctedIndex].text;

        const milkTypeSelection = beverage.querySelector("input[name='milk']:checked").value;
        let milkType = '';
        if (milkTypeSelection === 'usual') {
            milkType = 'обычное';
        }
        if (milkTypeSelection === 'soy') {
            milkType = 'соевое';
        }
        if (milkTypeSelection === 'not-fat') {
            milkType = 'обезжиренное';
        }
        if (milkTypeSelection === 'coconut') {
            milkType = 'кокосовое';
        }

        const inputElements = document.querySelectorAll('input[name="options"]:checked');
        const options = []
        for(let checked of inputElements) {
            options.add(checked.value);
        }
        
        const beverageCell = document.createElement("td");
        beverageCell.appendChild(document.createTextNode(beverageType));
        
        const milkCell = document.createElement("td");
        milkCell.appendChild(document.createTextNode(milkType));

        const extraIngridientCell = document.createElement("td");
        extraIngridientCell.appendChild(document.createTextNode(options.join()));
        row.appendChild(beverageCell);
        row.appendChild(milkCell);
        row.appendChild(extraIngridientCell);

        table.appendChild(row);
    }
    return table;
}

function buildTableHeader() {
    const header = document.createElement("tr");

    const beverageType = document.createElement("th");
    beverageType.appendChild(document.createTextNode("Напиток"));
    
    const milkType = document.createElement("th");
    milkType.appendChild(document.createTextNode("Молоко"));

    const extraIngridient = document.createElement("th");
    extraIngridient.appendChild(document.createTextNode("Дополнительно"));

    header.appendChild(beverageType);
    header.appendChild(milkType);
    header.appendChild(extraIngridient);
    return header;
}



var btn = document.getElementById("open-order");
var modalBack = document.getElementById("order")[0];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div id="myModal" class="modal"> 
    <div class="modal-content"> 
      <span class="close">&times;</span>
      <p>Заказ сделан!</p>
      <p>${getBeveragesCountString()}</p>
    </div>
  </div>`
  document.querySelector('body').appendChild(modal);
  
  const modalClose = document.getElementsByClassName("close")[0];
  modalClose.addEventListener("click", function () {
    modal.remove();
  });
  
  const modalContent = document.querySelector(".modal-content");
  modalContent.appendChild(buildOrderTable());
});