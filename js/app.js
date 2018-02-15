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
//call the rest of the funcitons above

//prototype function declarations
CookieStore.prototype.customersPerHour = function () {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
  }
  //return this;
};
CookieStore.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
  }
  //return this;
};
CookieStore.prototype.calcTotalCookiesSoldPerDay = function() {
  for (var i = 0; i < hoursPerDay.length; i++) {
    this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
  }
  //return this;
};
// CookieStore.prototype.storeName = function() {
//   for (var i = 0; i < stores.length; i++) {
//     this.storeName = stores[i];
//   }
//   //return this;
// };
CookieStore.prototype.addElement = function () {
  //create tr
  var trEl = document.createElement('tr');
  //create td
  var tdEl = document.createElement('td');
  //give td content
  tdEl.textContent = this.stores;
  //append the td
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //create td
  tdEl = document.createElement('td');
  tdEl.textContent = this.stores;
  trEl.appendChild(tdEl);
  //append the tr to the table
  storeTable.appendChild(trEl);
};

function makeStoreDataRows() {
  for (var i = 0; 1 < stores.length; i++) {
    stores[i].addElement(tdEl);
  }
}

//   var ulEl = document.getElementById(this.storeID);
//   for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
//     //create an element
//     var liEl = document.createElement('li');
//     //adding content
//     liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//     //appending to the DOM
//     //parent.appendChild(child)
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.className = 'total';
//   liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
//   ulEl.appendChild(liEl);
// };
//function invocations
new CookieStore('First and Pike', 'pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 'seatac', 3, 24, 1.2);
new CookieStore('Seattle Center', 'seattlecenter', 11, 38, 2.3);
new CookieStore('Capitol Hill', 'caphill', 20, 38, 2.3);
new CookieStore('Alki', 'alki', 2, 16, 4.6);

makeStoreDataRows();