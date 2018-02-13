var hoursPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
  addElement: function () {
    var ulEl = document.getElementById('1st and Pike');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //adding content
      liEl.textContent = hoursPerDay[i] + ':' + this.cookiesPerHourArray[i];
      //appending to the DOM
      //parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
  },
};
store1.customersPerHour();
store1.cookiesPerHour();
store1.addElement();









// hourlyCustomers: [],
//   customersPerHour [ ] need a method to calculate it...
//   totalCookiesNeededPerDay:   need a method to calc. [i]
// 	cookiesSoldPerHour = [ ] need a method to calculate it...
// render  need a method