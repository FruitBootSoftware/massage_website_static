function initPrograms() {
    fetch('/assets/data/programs.json').then(res => res.json()).then(data => {
        var prices_huf = document.getElementsByClassName('price_huf');
        for (let i = 0; i < prices_huf.length; i++) {
            const element = prices_huf[i];
            var price = data.programs.find(item => item.id == element.getAttribute('data-id')).huf;
            element.innerText = price;
        }

        var prices_eur = document.getElementsByClassName('price_eur');
        for (let i = 0; i < prices_eur.length; i++) {
            const element = prices_eur[i];
            var price = data.programs.find(item => item.id == element.getAttribute('data-id')).eur;
            element.innerText = price;
        }

        var discounts_huf = document.getElementsByClassName('discount_huf');
        var discounts_price_huf = document.getElementsByClassName('discount_price_huf');
        for (let i = 0; i < discounts_huf.length; i++) {
            const element = discounts_huf[i];
            var price = data.programs.find(item => item.id == element.getAttribute('data-id')).discount_huf;
            if (!price) {
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
                discounts_price_huf[i].innerText = price;
                Array.from(prices_huf).find(item => item.getAttribute('data-id') == element.getAttribute('data-id')).style.textDecoration = 'line-through';
                Array.from(prices_huf).find(item => item.getAttribute('data-id') == element.getAttribute('data-id')).style.color = 'red';
            }
        }

        var discounts_eur = document.getElementsByClassName('discount_eur');
        var discounts_price_eur = document.getElementsByClassName('discount_price_eur');
        for (let i = 0; i < discounts_eur.length; i++) {
            const element = discounts_eur[i];
            var price = data.programs.find(item => item.id == element.getAttribute('data-id')).discount_eur;
            if (!price) {
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
                discounts_price_eur[i].innerText = price;
                Array.from(prices_eur).find(item => item.getAttribute('data-id') == element.getAttribute('data-id')).style.textDecoration = 'line-through';
                Array.from(prices_eur).find(item => item.getAttribute('data-id') == element.getAttribute('data-id')).style.color = 'red';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => initPrograms());