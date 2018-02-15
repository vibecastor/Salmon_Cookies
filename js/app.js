'use strict';

var hoursPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//array of objects goes here
var stores = [];

var storeTable = document.getElementById('storeData');

//constructor function
function CookieStore(storeName, storeID, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale) {
  this.storeName = storeName;
  this.storeID = storeID;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHourArray = [];
  this.cookiesPerHourArray = [];
  this.totalCookiesSoldPerDay = 0;
  stores.push(this);
  this.customersPerHour();
  this.cookiesPerHour();
  this.calcTotalCookiesSoldPerDay();
  this.addElement();
  console.log('New cookie stand created for ' + this.storeName);
}

//prototype function declarations
CookieStore.prototype.customersPerHour = function () {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
  }
};
CookieStore.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
  }
};
CookieStore.prototype.calcTotalCookiesSoldPerDay = function() {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
  }
};
//creates the tr element and the initial td element...
CookieStore.prototype.addElement = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  //loop that creates the td elements for the table - this overrides the td element created in line 47.
  for (var i = 0; i < hoursPerDay.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArray[i];
    trEl.appendChild(tdEl);
  }
  //appends the tr to the table
  storeTable.appendChild(trEl);
};

//create a tr element and a th element for the table header
function makeHeaderRow () {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = hoursPerDay.push[i];
  trElement.appendChild(thElement);
  for (var i = 0; i < hoursPerDay.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hoursPerDay[i];
    trElement.appendChild(thElement);
  }
  storeTable.appendChild(trElement);
}
makeHeaderRow();


//function invocations
new CookieStore('First and Pike', 'pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 'seatac', 3, 24, 1.2);
new CookieStore('Seattle Center', 'seattlecenter', 11, 38, 2.3);
new CookieStore('Capitol Hill', 'caphill', 20, 38, 2.3);
new CookieStore('Alki', 'alki', 2, 16, 4.6);

