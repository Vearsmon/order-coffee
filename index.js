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

function closeSubmitionWindow() {
    const submitionWindow = document.querySelector('.');
    submitionWindow.remove();
}

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

        beverage.querySelector("select selected");
    }
}

function buildTableHeader() {
    const header = document.createElement("tr");

    const beverageType = document.createElement("th");
    beverageType.appendChild(document.createTextNode("Напиток"));
    
    const milkType = document.createElement("th");
    milkType.appendChild(document.createTextNode("Молоко"));

    const extraIngridient = document.createElement("th");
    extraIngridient.appendChild(document.createTextNode("Молоко"));

    header.appendChild(beverageType);
    header.appendChild(milkType);
    header.appendChild(extraIngridient);
    return header;
}
