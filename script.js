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
infoTotal.innerText = allCardSection.children.length;


function  calculateCount() {
    total.innerText = allCardSection.children.length;
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
        infoTotal.innerText = allCardSection.children.length;
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
            const companyNames = allCardSection.querySelectorAll(".company-name");
            console.log(companyNames);
            for (let name of companyNames){
                console.log(name.innerText);
                if (companyName === name.innerText){
                    console.log(name.parentNode);
                    name.parentNode.querySelector(".status").innerText = event.target.innerText;
                }
            }
            
        }
        const status = parentNode.querySelector(".status").innerText;
        const jobInfo ={
            companyName,
            designation,
            nature,
            status,
            desc,

        };
        const jobExist = interviewList.find(item =>item.companyName === jobInfo.companyName);
        if (!jobExist){
            interviewList.push(jobInfo);
        }
        rejectedList = rejectedList.filter(item =>item.companyName !== jobInfo.companyName);
        if(currentStatus === 'rejected-filter-btn'){
            
            renderRejectedList();
            
            
        }
        
        calculateCount();
   
    }
    else if(event.target.classList.contains('btn-rejected')){
        const parentNode = event.target.parentNode;
        const companyName = parentNode.querySelector(".company-name").innerText;
        const designation = parentNode.querySelector(".designation").innerText;
        const nature = parentNode.querySelector(".nature").innerText;
        const desc = parentNode.querySelector(".desc").innerText;
        console.log(parentNode.querySelector(".status")); 
        if (!parentNode.querySelector(".status")){
            
            const statusBtn = document.createElement("button");
            statusBtn.classList.add("status", "btn", "btn-outline", "bg-gray-200", "mb-2", "w-fit");
            statusBtn.innerText=event.target.innerText;
            const afterChild = parentNode.children[2];
            afterChild.after(statusBtn);
            
        }
        else{
            
            parentNode.querySelector(".status").innerText = event.target.innerText;
            const companyNames = allCardSection.querySelectorAll(".company-name");
            for (let name of companyNames){
                if (companyName === name.innerText){
                    console.log(name.parentNode);
                    name.parentNode.querySelector(".status").innerText = event.target.innerText;
                }
            }
        }
        const status = parentNode.querySelector(".status").innerText;
        const jobInfo ={
            companyName,
            designation,
            nature,
            status,
            desc,

        };
       
        const jobExist = rejectedList.find(item =>item.companyName === jobInfo.companyName);
        if (!jobExist){
            rejectedList.push(jobInfo);
        }
        interviewList = interviewList.filter(item =>item.companyName !== jobInfo.companyName);
        if (currentStatus ==="interview-filter-btn"){
            renderInterviewList();
           
        }
        calculateCount();
         
   
    } 
    else if(event.target.closest('.btn-delete')){
        
        const item = event.target.closest(".btn-delete").parentNode.parentNode;
        const name = item.querySelector(".company-name").innerText;
        const companyNames = allCardSection.querySelectorAll(".company-name");
         for (let temp of companyNames){
                if (name === temp.innerText){
                    
                    temp.parentNode.parentNode.remove();
                }
            }
        if (item.querySelector(".status")){
            if (item.querySelector(".status").innerText ==="Interview"){
                interviewList = interviewList.filter(job=>job.companyName !== name);
                if (currentStatus ==="interview-filter-btn"){
                    renderInterviewList();
           
        }
        calculateCount();
            }
            else if (item.querySelector(".status").innerText ==="Rejected"){
                
                rejectedList = rejectedList.filter(job=>job.companyName !== name);
                if (currentStatus ==="rejected-filter-btn"){
                    renderRejectedList();
           
        }
        calculateCount();
            }
        }
        
    }
    
});
function renderInterviewList(){
       filteredSection.innerHTML = "";
       if (interviewList.length === 0){
         infoTotal.innerText = interviewList.length;
         const noJobCard = document.createElement("div");
         noJobCard.classList.add("max-w-[100%]", "mx-auto", "text-center","flex","flex-col","items-center");
         noJobCard.innerHTML=`<img class="max-w-xs" src="./docs.png">
                <h2 class="text-2xl">No jobs available</h2>
                <p>Check back soon for new job opportunities</p>`;
        filteredSection.appendChild(noJobCard);
         
    } else{
        infoTotal.innerText = `${interviewList.length} of ${allCardSection.children.length}`;

    }
    
    
    for (let interview of interviewList){ 
        const jobCard = document.createElement("div");
        jobCard.classList.add("p-4", "bg-white", "rounded-[5px]", "flex", "justify-between");
        jobCard.innerHTML=`
        <div>
                        <h2 class="font-bold text-1.5xl company-name">${interview.companyName}</h2>
                        <h3 class="mb-2 text-[#64748B] text-sm designation">${interview.designation}</h3>
                        <p class="text-sm mb-2 text-[#64748B] nature">${interview.nature}</p> 
                        <button class=" status btn btn-outline bg-gray-200 mb-2 w-fit">${interview.status}</button>
                        <p class="mb-2 text-sm text-[#64748B] desc">${interview.desc}</p>
                        <button class="btn btn-outline btn-success text-green-300 btn-interview">Interview</button>
                        <button class="btn btn-outline btn-secondary text-red-600 btn-rejected">Rejected</button>
                    </div>
                    <div><button class="cursor-pointer btn-delete"><i class="fa-solid fa-delete-left"></i></button></div>
        `;
        filteredSection.appendChild(jobCard);
        


    }
    
}

function renderRejectedList(){
    filteredSection.innerHTML = "";
    if (rejectedList.length === 0){
         infoTotal.innerText = rejectedList.length;
         const noJobCard = document.createElement("div");
         noJobCard.classList.add("max-w-[100%]", "mx-auto", "text-center","flex","flex-col","items-center");
         noJobCard.innerHTML=`<img class="max-w-xs" src="./docs.png">
                <h2 class="text-2xl">No jobs available</h2>
                <p>Check back soon for new job opportunities</p>`;
        filteredSection.appendChild(noJobCard);
    } else{
        infoTotal.innerText = `${rejectedList.length} of ${allCardSection.children.length}`;

    }
    
    
    for (let rejected of rejectedList){ 
        const jobCard = document.createElement("div");
        jobCard.classList.add("p-4", "bg-white", "rounded-[5px]", "flex", "justify-between");
        jobCard.innerHTML=`
        <div>
                        <h2 class="font-bold text-1.5xl company-name">${rejected.companyName}</h2>
                        <h3 class="mb-2 text-[#64748B] text-sm designation">${rejected.designation}</h3>
                        <p class="text-sm mb-2 text-[#64748B] nature">${rejected.nature}</p> 
                        <button class="status btn btn-outline bg-gray-200 mb-2 w-fit">${rejected.status}</button>
                        <p class="mb-2 text-sm text-[#64748B] desc">${rejected.desc}</p>
                        <button class="btn btn-outline btn-success text-green-300 btn-interview">Interview</button>
                        <button class="btn btn-outline btn-secondary text-red-600 btn-rejected">Rejected</button>
                    </div>
                    <div><button class="cursor-pointer btn-delete"><i class="fa-solid fa-delete-left"></i></button></div>
        `;
        filteredSection.appendChild(jobCard);
       


    }
    
   
    
}
