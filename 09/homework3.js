setTimeout(function () {
  document.getElementsByClassName('firstName')[0].value = 'Bri';
  document.getElementsByClassName('secondName')[0].value = 'WS';
  document.getElementsByClassName('SexF')[0].checked = true;
  document.getElementsByClassName('relatinships')[0].checked = false;
  document.getElementsByClassName('city')[0].value = 'Arambol';
  document.getElementsByClassName('hobbies')[0].value = 'I do contact practices\nI meet BriWS';
  document.getElementById('formId').className = 'newViewForm';
  document.getElementById('partOne').className = 'newViewPartOne';
  document.getElementById('partTwo').className = 'newViewPartTwo';
  document.getElementById('global').className = 'globalCenter';
}, 1000);

var someButton = document.getElementById("clickButton");
someButton.addEventListener("click", function() {
  document.getElementsByClassName('avatar')[0].src = "https://sun9-15.userapi.com/s/v1/ig2/0Xohh71K2BL5PH8SIO1SCTpxSyUxJoJif52a2661Pfnp_8tqKY9gpi89pUM1Pc3iOKTEJ84n4Ak8xQjiAz2qZHyf.jpg?size=200x0&quality=96&crop=0,150,1432,1433&ava=1";
});

