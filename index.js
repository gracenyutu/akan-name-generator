//user-interface logic
$(document).ready(function() {
   $("form").submit(function(event) {

var day = parseInt(getElementById('input-day').value());
alert(day);
var month = parseInt(getElementById('month').value());
alert(month);
var year = parseInt(getElementById('input-year').value());
alert(year);
var gender = parseInt(getElementById('input-gender').value());
}

var YY = year % 100;
var CC = (year-YY)/100;
var MM = month;
var DD = day;
}
  var d = ((~~(CC/4)-(2*CC)-1)+~~((5*YY)/4)+~~((26*(MM+1))/10)+DD)% 7;
  var gender = prompt("What is your gender? Male or female?")
  if (d === 0 && gender === "male") {
    alert("You were born on a Sunday and Your akan name is Kwasi");
  } else if (d === 1 && gender === "male") {
   alert("You were born on a Monday and Your akan name is Kwadwo");
  }  else if (d === 2 && gender === "male") {
   alert("You were born on a Tuesday and Your akan name is Kwabena");
  }else if (d === 3 && gender === "male") {
   alert("You were born on a Wednesday and Your akan name is Kwaku");
  }else if (d === 4 && gender === "male") {
   alert("You were born on a Thursday and Your akan name is Yaw");
  }else if (d === 5 && gender === "male") {
   alert("You were born on a Friday and Your akan name is Kofi");
  }else if (d === 6 && gender === "male") {
   alert("You were born on a Saturday and Your akan name is Kwame");
  }
  else if (d === 0 && gender === "female") {
    alert("You were born on a Sunday and Your akan name is Akosua");
  } else if (d === 1 && gender === "female") {
   alert("You were born on a Monday and Your akan name is Adwoa");
  }  else if (d === 2 && gender === "female") {
   alert("You were born on a Tuesday and Your akan name is Abena");
  }else if (d === 3 && gender === "female") {
   alert("You were born on a Wednesday and Your akan name is Akua");
  }else if (d === 4 && gender === "female") {
   alert("You were born on a Thursday and Your akan name is Yaa");
  }else if (d === 5 && gender === "female") {
   alert("You were born on a Friday and Your akan name is Afua");
  }else if (d === 6 && gender === "female") {
   alert("You were born on a Saturday and Your akan name is Ama");
  }
