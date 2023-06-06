import { dashboardData } from "./data.js";

const headerContent = document.querySelector(".header h1");
const dashboard = document.querySelector(".dashboard");
const appendAllDisease = document.querySelector(".append-here");
const diseaseComplaint = document.querySelector(".disease");

dashboardData.forEach((each, i) => {
  const diseases = `<div class="disease-con">
        <img src=${each.icon} alt=${each.disease}/>
        <p>${each.disease}</p>
      </div>`;
  appendAllDisease.innerHTML += diseases;
});

let newDiseases = [...appendAllDisease.children];

let selectedDisease = null;
newDiseases.forEach((each, i) => {
  each.onclick = () => {
    if (selectedDisease !== null) {
      selectedDisease.classList.remove("add-disease-con-css");
    }
    each.classList.add("add-disease-con-css");
    selectedDisease = each;
    console.log(each.textContent);
    diseaseComplaint.style.display = "block";
    dashboard.style.display = "none";
    headerContent.textContent = each.textContent;
  };
});
