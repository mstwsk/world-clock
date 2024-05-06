function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesData = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesData.format(`MMMM Do YYYY`);
  losAngelesTimeElement.innerHTML = losAngelesData.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonData = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonData.format(`MMMM Do YYYY`);
  londonTimeElement.innerHTML = londonData.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateLosAngelesTime, 1000);
