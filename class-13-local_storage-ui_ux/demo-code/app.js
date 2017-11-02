'use strict';

//stringify all the things
//localStorage.setItem()
//add all the things to local storage
//what are all the things in bus mall? votes and names, clicks
//our stuff in local storage will be in JSON and not only JSON but stringified JSON

var tyler = {
  name: 'Tyler',
  instructor: true,
  favoriteNumber: 6,
  laughs: function() {
    alert('hahahaha');
  }
};

var arrayChul = ['Rachel', 37, true, 'no-dog'];

var anotherArray = ['random', 9, false, tyler, arrayChul];

var clearLS = document.getElementById('clearStorage');

clearLS.addEventListener('click', function() {
  console.log('click it!');
  localStorage.clear();
});
//localStorage.getItem();
var retrieved = localStorage.getItem('awesome');

//unstringify technically called is 'parse'
var parsed = JSON.parse(retrieved);
