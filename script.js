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
const mainContainer = document.querySelector("main");

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

mainContainer.addEventListener("click",function(event){
    if(event.target.classList.contains('btn-interview')){
        const parentNode = event.target.parentNode;
        const companyName = parentNode.querySelector(".company-name").innerText;
        const designation = parentNode.querySelector(".designation").innerText;
        const nature = parentNode.querySelector(".nature").innerText;
        
        const desc = parentNode.querySelector(".desc").innerText;
        if (!parentNode.querySelector(".status")){
            const statusBtn = document.createElement("button");
            statusBtn.classList.add("status", "btn", "btn-outline", "bg-gray-200", "mb-2", "w-fit");
            statusBtn.innerText=event.target.innerText;
            const afterChild = parentNode.children[2];
            afterChild.after(statusBtn);
        }
        const status = parentNode.querySelector(".status").innerText;
        const jobInfo ={
            companyName,
            designation,
            nature,
            status,

        };
        const jobExist = interviewList.find(item =>item.companyName === jobInfo.companyName);
        if (!jobExist){
            interviewList.push(jobInfo);
        }
        rejectedList = rejectedList.filter(item =>item.companyName != jobInfo.companyName);
   
    }
});