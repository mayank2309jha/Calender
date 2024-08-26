//Setting the month and the year
const currentDate = document.querySelector(".monthyear");

let date = new Date();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month_index = date.getMonth();
let year = date.getFullYear();

let this_date = date.getDate();
let this_year = date.getFullYear();
const this_month = date.getMonth();

const update_month_year = (month_index, year) => {
  let month_year = months[month_index] + " " + year;
  currentDate.textContent = month_year;
};
update_month_year(month_index, year);

//Rendering the calender dates
const dates = document.querySelector(".dates");
const render_calender = () => {
  //Showing the last days of the previous month
  let first_day_of_month = new Date(year, month_index, 1).getDay();
  let last_day_of_last_month = new Date(year, month_index, 0).getDate();
  let pTag = "";
  for (let i = first_day_of_month; i > 0; i--) {
    pTag += `<p class = "inactive" >${last_day_of_last_month}</p>`;
    last_day_of_last_month--;
  }

  //Showing the days of this month
  const lastDateOfMonth = new Date(year, month_index + 1, 0).getDate();
  for (let i = 1; i <= lastDateOfMonth; i++) {
    if (month_index == this_month && this_year == year && this_date == i) {
      pTag += `<p class = "active">${i}</p>`;
    } else {
      pTag += `<p>${i}</p>`;
    }
  }

  //Showing the days of the next month
  let last_day_of_month = new Date(year, month_index + 1, 0).getDay() + 1;
  let next_month_date = 1;
  while (last_day_of_month < 7) {
    pTag += `<p class = "inactive">${next_month_date}</p>`;
    next_month_date++;
    last_day_of_month++;
  }
  dates.innerHTML = pTag;
};

render_calender();

//Giving functionality to the buttons
const left_button = document.querySelector(".left");
const right_button = document.querySelector(".right");

left_button.addEventListener("click", () => {
  if (month_index == 0) {
    month_index = 11;
    year = year - 1;
  } else {
    month_index = month_index - 1;
  }
  update_month_year(month_index, year);
  month_year = months[month_index] + " " + year;
  render_calender();
});
right_button.addEventListener("click", () => {
  if (month_index == 11) {
    month_index = 0;
    year = year + 1;
  } else {
    month_index = month_index + 1;
  }
  update_month_year(month_index, year);
  month_year = months[month_index] + " " + year;
  render_calender();
});
