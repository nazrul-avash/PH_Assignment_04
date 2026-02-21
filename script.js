let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let infoTotal = document.getElementById("info-total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let allCardSection = document.getElementById("all-card");
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function  calculateCount() {
    total.innerText = allCardSection.children.length;
    infoTotal.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
function toggleStyle(id){
    allFilterBtn.classList.remove("bg-blue-300");
    interviewFilterBtn.classList.remove("bg-blue-300");
    rejectedFilterBtn.classList.remove("bg-blue-300");
    allFilterBtn.classList.add("bg-[#FFFFFF]");
    interviewFilterBtn.classList.add("bg-[#FFFFFF]");
    rejectedFilterBtn.classList.add("bg-[#FFFFFF]");
    const selected = document.getElementById(id);
    selected.classList.remove("bg-[#FFFFFF]");
    selected.classList.add("bg-blue-300");

}
calculateCount()
