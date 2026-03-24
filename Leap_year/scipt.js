const year = parseInt(prompt("Enter a year"));
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
alert(`${year} is ${isLeapYear ? "" : "NOT "}a leap year`);