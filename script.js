window.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.current-select');
    const citiesList = document.getElementById("cities");
    const current = document.querySelector('.current-city');
    const citiesItem = document.querySelectorAll('.cities-item')

    hideElem(button)
    editCurrentValue()

    function hideElem(elem) {
        elem.addEventListener('click', function () {
            if(citiesList.classList.contains('cities_hidden')) {
                citiesList.classList.add('cities_show');
                citiesList.classList.remove('cities_hidden');
            } else {
                citiesList.classList.add('cities_hidden');
                citiesList.classList.remove('cities_show'); 
            }
        })

    }

    function editCurrentValue() {
        citiesItem.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target.classList.contains('cities-item')) {
                    citiesList.classList.add('cities_hidden');
                    citiesList.classList.remove('cities_show');
                    current.textContent = item.textContent;
                }
            })
        })
    }
})