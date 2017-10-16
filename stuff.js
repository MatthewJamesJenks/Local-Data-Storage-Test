var selectedKey;
var selectedValue;

var key1 = "Phone";
var value1 = "Galaxy A3";

window.localStorage.setItem( key1, value1 );

var key2 = "Drink";
var Value2 = "Drench";

window.localStorage.setItem( key2, value2 );

function displaySet1()
{
  selectedKey = window.localStorage.getItem(key1);
  selectedValue = window.localStorage.getItem(value1);
  alert("Key: " + selectedKey + "Value: " + selectedValue);
}

function displaySet2()
{
  selectedKey = window.localStorage.getItem(key2);
  selectedValue = window.localStorage.getItem(value2);
  alert("Key: " + selectedKey + "Value: " + selectedKey);
}
