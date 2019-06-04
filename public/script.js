function issue() {
    alert("Заказ принят!");
    var obj = {
        "Имя: ": document.getElementById('firstName').value,
        "Фамилия: ": document.getElementById('lastName').value,
        "Email: ": document.getElementById('email').value,
        "Адрес: ": document.getElementById('address').value,
        "Страна: ": document.getElementById('country').value,
        "Регион: ": document.getElementById('state').value,
        "Индекс: ": document.getElementById('zip').value,
        "Имя на карте: ": document.getElementById('cc-name').value,
        "Номер карты: ": document.getElementById('cc-number').value,
        "Срок истечения: ": document.getElementById('cc-expiration').value,
        "CVV : ": document.getElementById('cc-cvv').value
    };

    localStorage.setItem('myStorage', JSON.stringify(obj));


}