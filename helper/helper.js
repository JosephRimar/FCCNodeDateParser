
//Format date to human readable string
exports.dateFormat = function (str) {
  var date = new Date(parseInt(str));
  var month = date.getMonth();
  var day = date.getDate();
  var year = date.getFullYear();

  var months = ['January', 'February', "March", 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  return months[month] + " " + day + ", " + year;  
}

// Check if dates are valid
exports.dateIsValid = function(date) {
	// Check is date returns a valid date object
  if(new Date(parseInt(date)).getTime() > 0 || new Date(date).getTime()) {
    if(!isNaN(parseInt(date))) {
      //If timestamp includes any non numeric characters
      return !/[^0-9]/gi.test(date);
    }
    return true;
  }
  return false;
}