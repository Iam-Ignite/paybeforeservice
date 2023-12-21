const THIS_YEAR = new Date().getFullYear();
const MIN_BIRTHYEAR = THIS_YEAR - 18;
const MAX_BIRTHYEAR = THIS_YEAR - 100;
const MONTHS_OF_THE_YEAR = [
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
    "December"
]

export { MIN_BIRTHYEAR, MAX_BIRTHYEAR, MONTHS_OF_THE_YEAR };