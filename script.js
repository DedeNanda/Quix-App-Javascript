// bagian footer pada dateDisplay dan copyright

const day = new Date().getDay();
const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

nameday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

nameMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = `${nameday[day]} ${date} ${nameMonth[month]} ${year}`;

const copyright = document.getElementById("copyright");
copyright.textContent = "Copyright By ©MDNP";
