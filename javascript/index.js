function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesData = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesData.format(`MMMM Do YYYY`);
    losAngelesTimeElement.innerHTML = losAngelesData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonData = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonData.format(`MMMM Do YYYY`);
    londonTimeElement.innerHTML = londonData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisData = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisData.format(`MMMM Do YYYY`);
    parisTimeElement.innerHTML = parisData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#data-cities");
  citiesElement.innerHTML = `
          <hr /><div class="city" id="${cityName}">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
          <hr />
        <a class="homepage"href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-cities");
citiesSelectElement.addEventListener("change", updateCity);
