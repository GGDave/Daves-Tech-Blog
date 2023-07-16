function formatDate(date) {//This function takes one argument, date and will return a string in the format "MM/DD/YYYY".
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
    //Inside the function, a new Date object is created from the input date. getMonth(), getDate(), and getFullYear() 
    //methods are used on this Date object to extract the month, date, and year.
    //getMonth() returns the month in the range 0-11, so 1 is added to the result to get the month in the range 1-12.
    //getDate() returns the day of the month in the range 1-31.
    //getFullYear() returns the year (four digits for dates between year 1000 and 9999).
}


module.exports = { formatDate}
//allows us to export the helper and makes it available to the rest of the code