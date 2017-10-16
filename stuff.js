var selected;

var key1 = "Phone";
var value1 = "Galaxy A3";

window.localStorage.setItem( key1, value1 );

var key2 = "Drink";
var value2 = "Drench";

window.localStorage.setItem( key2, value2 );

var person = {
  "firstName" : "Rick",
  "lastName" : "Sanchez",
  "address" : {
    "state" : "Washington",
    "country" : "USA"
    }
  }
}
function displaySet1()
{
  selected = window.localStorage.getItem(key1);
  displayStuff();
}

function displaySet2()
{
  selected = window.localStorage.getItem(key2);
  displayStuff();
}

function displayStuff()
{
  alert("Value: " + selected);
}
