let array = require('./data');

function sortByProp(property){
    return array.sort( (a,b) => a[property].localeCompare(b[property]))
}

function filterByProdValue(property, value) {
    return array.filter(a => a[property] == value)
}

module.exports = { sortByProp, filterByProdValue };
// console.log(sortByProp('shipTo'));
// console.log(filterByProdValue('status', 'shipped'));