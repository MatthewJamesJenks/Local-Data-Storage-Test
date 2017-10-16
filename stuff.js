var key = "Phone";
var value = "Galaxy A3";

document.addEventListener("deviceready", onDeviceReady, false);

function displayAlert()
{
  alert("Key: " + key + "Value: " + value);
}

function onDeviceReady()
{
  displayAlert();
}
