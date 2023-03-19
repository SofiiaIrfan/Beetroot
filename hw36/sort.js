'use strict'

class Products {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const productsList = [];
productsList.push(new Products('001', 'grapes', 40))
productsList.push(new Products('002', 'kiwis', 60))
productsList.push(new Products('003', 'oranges', 12))
productsList.push(new Products('004', 'nuts', 19))
productsList.push(new Products('005', 'pears', 36))
productsList.push(new Products('006', 'plums', 43))
productsList.push(new Products('007', 'bananas', 35))
productsList.push(new Products('008', 'mango', 90))
productsList.push(new Products('009', 'pineapples', 230))
productsList.push(new Products('010', 'coconuts', 120))
productsList.push(new Products('011', 'apples', 20))
productsList.push(new Products('012', 'watermelons', 100));

const tableRows = document.getElementById('tableRows');
document.getElementById('tableHeader').addEventListener('click', sortColumn);

const ascendingColumns = { idHeader: false, nameHeader: false, priceHeader: false }

productsList.forEach(displayTable)

function displayTable(element) {

    tableRows.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                </tr>
                `
}

function sortColumn(event) {
    if (event.target.id === 'idHeader') {
        productsList.sort((a, b) => stringSort(a.id, b.id, ascendingColumns.idHeader))
        ascendingColumns.idHeader = !ascendingColumns.idHeader;
    } else if (event.target.id === 'nameHeader') {
        productsList.sort((a, b) => stringSort(a.name, b.name, ascendingColumns.nameHeader))
        ascendingColumns.nameHeader = !ascendingColumns.nameHeader;
    } else if (event.target.id === 'priceHeader') {
        productsList.sort((a, b) => numbersSort(a.price, b.price, ascendingColumns.priceHeader))
        ascendingColumns.priceHeader = !ascendingColumns.priceHeader;
    }

    tableRows.innerHTML = '';
    productsList.forEach(displayTable)
}

function stringSort(first, second, isAsc) {
    const nameA = first.toUpperCase();
    const nameB = second.toUpperCase();

    return numbersSort(nameA, nameB, isAsc)
}

function numbersSort(first, second, isAsc) {
    if (isAsc === false) {
        if (first > second)
            return -1;

        if (first < second)
            return 1;
    } else {
        if (first < second)
            return -1;

        if (first > second)
            return 1;
    }
    return 0;
}