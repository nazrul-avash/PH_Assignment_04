let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";
let total = document.getElementById("total");
let infoTotal = document.getElementById("info-total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let allCardSection = document.getElementById("all-card");
let filteredSection = document.getElementById("filtered-section");
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");
const mainContainer = document.querySelector("main");
const btnDelete = document.getElementById("btn-delete");



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
    currentStatus = id;
    if (id ==="interview-filter-btn"){
        allCardSection.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewList();
    } 
    else if (id ==="rejected-filter-btn"){
        allCardSection.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectedList();
    }
    else if(id === "all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    }
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
        else{
            parentNode.querySelector(".status").innerText = event.target.innerText;
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
        calculateCount();
   
    }
    else if(event.target.classList.contains('btn-rejected')){
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
        else{
            parentNode.querySelector(".status").innerText = event.target.innerText;
        }
        const status = parentNode.querySelector(".status").innerText;
        const jobInfo ={
            companyName,
            designation,
            nature,
            status,

        };
        const jobExist = rejectedList.find(item =>item.companyName === jobInfo.companyName);
        if (!jobExist){
            rejectedList.push(jobInfo);
        }
        interviewList = interviewList.filter(item =>item.companyName != jobInfo.companyName);
        calculateCount();
   
    } 
    
});
function renderInterviewList(){
    filteredSection.innerHTML = "";
    
    for (let interview of interviewList){ 
        const jobCard = document.createElement("div");
        jobCard.classList.add("p-4", "bg-white", "rounded-[5px]", "flex", "justify-between");
        jobCard.innerHTML=`
        <div>
                        <h2 class="font-bold text-1.5xl company-name">${interview.companyName}</h2>
                        <h3 class="mb-2 text-[#64748B] text-sm designation">${interview.designation}</h3>
                        <p class="text-sm mb-2 text-[#64748B] nature">${interview.nature}</p> 
                        <!-- <button class="btn btn-outline bg-gray-200 mb-2">Not Applied</button> -->
                        <p class="mb-2 text-sm text-[#64748B] desc">${interview.desc}</p>
                        <button class="btn btn-outline btn-success text-green-300 btn-interview">Interview</button>
                        <button class="btn btn-outline btn-secondary text-red-600 btn-rejected">Rejected</button>
                    </div>
                    <div><button class="cursor-pointer"><i class="fa-solid fa-delete-left"></i></button></div>
        `;
        filteredSection.appendChild(jobCard);
        infoTotal.innerText = `${interviewList.length} of ${allCardSection.children.length} jobs`;


    }
}

function renderRejectedList(){
    filteredSection.innerHTML = "";
    
    for (let rejected of rejectedList){ 
        const jobCard = document.createElement("div");
        jobCard.classList.add("p-4", "bg-white", "rounded-[5px]", "flex", "justify-between");
        jobCard.innerHTML=`
        <div>
                        <h2 class="font-bold text-1.5xl company-name">${rejected.companyName}</h2>
                        <h3 class="mb-2 text-[#64748B] text-sm designation">${rejected.designation}</h3>
                        <p class="text-sm mb-2 text-[#64748B] nature">${rejected.nature}</p> 
                        <button class="btn btn-outline bg-gray-200 mb-2">Not Applied</button>
                        <p class="mb-2 text-sm text-[#64748B] desc">${rejected.desc}</p>
                        <button class="btn btn-outline btn-success text-green-300 btn-interview">Interview</button>
                        <button class="btn btn-outline btn-secondary text-red-600 btn-rejected">Rejected</button>
                    </div>
                    <div><button class="cursor-pointer"><i class="fa-solid fa-delete-left"></i></button></div>
        `;
        filteredSection.appendChild(jobCard);
        infoTotal.innerText = `${rejectedList.length} of ${allCardSection.children.length} jobs`;


    }
}