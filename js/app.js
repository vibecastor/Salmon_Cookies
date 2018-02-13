'use strict';

var hoursPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var store1 = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersPerHourArray: [],
  cookiesPerHourArray: [],
  customersPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
    }
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookiesSoldPerDay: function() {
    this.totalCookiesSoldPerDay = 0;
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
    }
  },
  addElement: function () {
    var ulEl = document.getElementById('1st and Pike');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    //"Total:  657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
    ulEl.appendChild(liEl);
  },
};
store1.customersPerHour();
store1.cookiesPerHour();
store1.calcTotalCookiesSoldPerDay();
store1.addElement();


var store2 = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersPerHourArray: [],
  cookiesPerHourArray: [],
  customersPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
    }
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookiesSoldPerDay: function() {
    this.totalCookiesSoldPerDay = 0;
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
    }
  },
  addElement: function () {
    var ulEl = document.getElementById('SeaTac Airport');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    //"Total:  657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
    ulEl.appendChild(liEl);
  },
};
store2.customersPerHour();
store2.cookiesPerHour();
store2.calcTotalCookiesSoldPerDay();
store2.addElement();

var store3 = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersPerHourArray: [],
  cookiesPerHourArray: [],
  customersPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
    }
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookiesSoldPerDay: function() {
    this.totalCookiesSoldPerDay = 0;
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
    }
  },
  addElement: function () {
    var ulEl = document.getElementById('Seattle Center');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    //"Total:  657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
    ulEl.appendChild(liEl);
  },
};
store3.customersPerHour();
store3.cookiesPerHour();
store3.calcTotalCookiesSoldPerDay();
store3.addElement();

var store4 = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersPerHourArray: [],
  cookiesPerHourArray: [],
  customersPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
    }
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookiesSoldPerDay: function() {
    this.totalCookiesSoldPerDay = 0;
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
    }
  },
  addElement: function () {
    var ulEl = document.getElementById('Capitol Hill');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    //"Total:  657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
    ulEl.appendChild(liEl);
  },
};
store4.customersPerHour();
store4.cookiesPerHour();
store4.calcTotalCookiesSoldPerDay();
store4.addElement();

var store5 = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersPerHourArray: [],
  cookiesPerHourArray: [],
  customersPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour);
    }
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.cookiesPerHourArray.push(Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerSale));
    }
  },
  calcTotalCookiesSoldPerDay: function() {
    this.totalCookiesSoldPerDay = 0;
    for (var i = 0; i < hoursPerDay.length; i++) {
      this.totalCookiesSoldPerDay += this.cookiesPerHourArray[i];
    }
  },
  addElement: function () {
    var ulEl = document.getElementById('Alki');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    //"Total:  657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total ' + this.totalCookiesSoldPerDay + ' cookies';
    ulEl.appendChild(liEl);
  },
};
store5.customersPerHour();
store5.cookiesPerHour();
store5.calcTotalCookiesSoldPerDay();
store5.addElement();