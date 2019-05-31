function issue() {
    alert("Вы ввели: " +
        "\n" +
        "Имя: " + document.getElementById('firstName').value +
        "\n" +
        "Фамилия: " + document.getElementById('lastName').value +
        "\n" +
        "Email: " + document.getElementById('email').value +
        "\n" +
        "Адрес: " + document.getElementById('address').value +
        "\n" +
        "Страна: " + document.getElementById('country').value +
        "\n" +
        "Регион: " + document.getElementById('state').value +
        "\n" +
        "Индекс: " + document.getElementById('zip').value +
        "\n" +
        "Имя на карте: " + document.getElementById('cc-name').value +
        "\n" +
        "Номер карты: " + document.getElementById('cc-number').value +
        "\n" +
        "Срок истечения: " + document.getElementById('cc-expiration').value +
        "\n" +
        "CVV : " + document.getElementById('cc-cvv').value
    );
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