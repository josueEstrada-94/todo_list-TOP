import today from '../assests/calendar-today.svg';
import week from '../assests/calendar-week.svg';
import month from '../assests/calendar-month.svg';
import logo from '../assests/comment-check.svg';
import dark from '../assests/brightness-6.svg';

// Project containers.

export const projectContainer = document.querySelector('.task-cards');

export function appPage(){
//Profile handling
/*const userName = prompt("What's your name?");
const firstLetter = userName.charAt(0).toUpperCase();

const profileNameMain = document.getElementById('main-user');
profileNameMain.textContent = userName;
const profilePic = document.getElementById('big-profile-img');
profilePic.innerText = firstLetter;*/

//Today icon and header
const todayItem = document.querySelector('.today-item');
const todayImg = document.createElement('img');
todayImg.src = today;
todayItem.appendChild(todayImg);

const todaySpan = document.createElement('h2')
todaySpan.textContent = 'Today';
todayItem.appendChild(todaySpan);

//Week icon and header
const weekItem = document.querySelector('.week-item');
const weekImg = document.createElement('img');
weekImg.src = week;
weekItem.appendChild(weekImg);

const weekSpan = document.createElement('h2')
weekSpan.textContent = 'Week';
weekItem.appendChild(weekSpan);

//Month icon and header
const monthItem = document.querySelector('.month-item');
const monthImg = document.createElement('img');
monthImg.src = month;
monthItem.appendChild(monthImg);

const monthSpan = document.createElement('h2');
monthSpan.textContent = 'Month';
monthItem.appendChild(monthSpan);

// Logo and Name
const logoItem = document.querySelector('.logo');
const logoImg = document.createElement('img');
logoImg.src = logo;
logoItem.appendChild(logoImg);

const logoSpan = document.createElement('h1');
logoSpan.textContent = 'TareasPro';
logoItem.appendChild(logoSpan);

// Dark Mode Icon
const profileDiv = document.querySelector('.profile')
const darkModeIcon = document.querySelector('#dark-mode-icon');
darkModeIcon.src = dark;
profileDiv.appendChild(darkModeIcon);

}


