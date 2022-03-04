const date = prompt();
const arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursfay", "Friday", "Saturday"];
const arrMonth = ["January", "Ferbuary", "March", "April", "May", "June", "July", "August", "Сентября", "October", "November", "December"];

const getDayInfo = (val) => {
    const date = new Date(val);
    const dayWeek = date.getDay();
    const numWeek = ((date.getDate() - 1) / 7) + 1;
    const numMonth = date.getMonth();
    const year = date.getFullYear();
    return `${arrDays[dayWeek]}, ${Math.floor(numWeek)} week ${arrMonth[numMonth]} of ${year} year!`;
}


const result = getDayInfo(date);
console.log(result);