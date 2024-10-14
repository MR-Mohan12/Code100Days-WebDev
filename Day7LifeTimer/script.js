const settingCog = document.getElementById("settingIcon");
const settingcontent = document.getElementById("setting-content");
let isDobOpen = false;

const toggleDobSelector = () => {
  if (isDobOpen) {
    settingcontent.classList.add("hide");
  } else {
    settingcontent.classList.remove("hide");
  }

  isDobOpen = !isDobOpen;
};

settingCog.addEventListener("click", toggleDobSelector);


const makeTwoDigitNumber = (number)=>{
    return number > 9 ? number : `0${number}`;
}

// Timer
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("months");
const hourEl = document.getElementById("hours");
const dayEl = document.getElementById("days");
const mintEl = document.getElementById("minutes");
const secEl = document.getElementById("second");
const updateAge = () => {
  const currentDate = new Date();
  //   console.log(currentDate);
  const dateDiff = currentDate - dobOfBirth;
  //  console.log(dateDiff);
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  //   console.log("year",year, month,day,hour,minute,second);

  yearEl.innerHTML = makeTwoDigitNumber(year);
   monthEl.innerHTML = makeTwoDigitNumber(month);
  hourEl.innerHTML = makeTwoDigitNumber(hour);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  mintEl.innerHTML = makeTwoDigitNumber(minute);
  secEl.innerHTML = makeTwoDigitNumber(second);
};

// After selcet the dob change the display funtion

const intialText = document.getElementById("intialText");
const afterDob = document.getElementById("afterDob");
const dobBtn = document.getElementById("dob-btn");
const dob = document.getElementById("dob");

let dobOfBirth;

const setDob = () => {

  const dateString = dob.value;
  dobOfBirth = dateString ? new Date(dateString) : null;
  //   dobOfBirth = dob.value;

  if (dobOfBirth) {
    
    intialText.classList.add("hide");
    afterDob.classList.remove("hide");

    setInterval(()=>{updateAge(),1000})
    
  } else {
    afterDob.classList.add("hide");
    intialText.classList.remove("hide");
  }
};
setDob();
dobBtn.addEventListener("click", setDob);
