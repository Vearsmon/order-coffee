

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