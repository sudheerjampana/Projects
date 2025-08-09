let menuBar = document.getElementById("menu-bar");
let crossMenu = document.getElementById("cross-menu");
let navContent = document.getElementsByClassName("nav-content")[0];

menuBar.onclick = () => {
    menuBar.style.display = "none";
    crossMenu.style.display = "inline-block";
    navContent.classList.add("active");
};

crossMenu.onclick = () => {
    menuBar.style.display = "inline-block";
    crossMenu.style.display = "none";
    navContent.classList.remove("active");
};

let findEmbassy=document.getElementsByClassName("country-info")[0]
let countryDetails=document.getElementsByClassName("country-info")[1]
let countryActivities=document.getElementsByClassName("country-info")[2]
let briefinfoCountry=document.getElementsByClassName("country-info")[3]

findEmbassy.style.textDecoration="underline"
countryDetails.style.textDecoration="none"
countryActivities.style.textDecoration="none"
briefinfoCountry.style.textDecoration="none"

let emabassyForm=document.getElementById("embassy-form")
let countryDetailsForm=document.getElementById("country-details-form")
let countryActivityForm=document.getElementById("country-activities-form")
let briefInfoForm=document.getElementById("brief-info-form")

emabassyForm.style.display="block"
countryDetailsForm.style.display="none"
countryActivityForm.style.display="none"
briefInfoForm.style.display="none"

let embassyContainer=document.getElementById("embassy-container")
let countryContainer=document.getElementById("country-container")
let activityContainer=document.getElementById("activity-container")
let briefinfoContainer=document.getElementById("briefinfo-container")

embassyContainer.style.display="block"
countryContainer.style.display="none"
activityContainer.style.display="none"
briefinfoContainer.style.display="none"

findEmbassy.onclick=()=>{
    findEmbassy.style.textDecoration="underline"
    countryDetails.style.textDecoration="none"
    countryActivities.style.textDecoration="none"
    briefinfoCountry.style.textDecoration="none"

    emabassyForm.style.display="block"
    countryDetailsForm.style.display="none"
    countryActivityForm.style.display="none"
    briefInfoForm.style.display="none"

    embassyContainer.style.display="block"
    countryContainer.style.display="none"
    activityContainer.style.display="none"
    briefinfoContainer.style.display="none"
}
countryDetails.onclick=()=>{
    countryDetails.style.textDecoration="underline"
    findEmbassy.style.textDecoration="none"
    countryActivities.style.textDecoration="none"
    briefinfoCountry.style.textDecoration="none"

    emabassyForm.style.display="none"
    countryDetailsForm.style.display="block"
    countryActivityForm.style.display="none"
    briefInfoForm.style.display="none"

    embassyContainer.style.display="none"
    countryContainer.style.display="block"
    countryContainer.style.justifySelf="center"
    activityContainer.style.display="none"
    briefinfoContainer.style.display="none"

}
countryActivities.onclick=()=>{
    countryActivities.style.textDecoration="underline"
    countryDetails.style.textDecoration="none"
    findEmbassy.style.textDecoration="none"
    briefinfoCountry.style.textDecoration="none"

    emabassyForm.style.display="none"
    countryDetailsForm.style.display="none"
    countryActivityForm.style.display="block"
    briefInfoForm.style.display="none"

    embassyContainer.style.display="none"
    countryContainer.style.display="none"
    activityContainer.style.display="block"
    activityContainer.style.justifySelf="center"
    briefinfoContainer.style.display="none"
}
briefinfoCountry.onclick=()=>{
    briefinfoCountry.style.textDecoration="underline"
    findEmbassy.style.textDecoration="none"
    countryDetails.style.textDecoration="none"
    countryActivities.style.textDecoration="none"

    emabassyForm.style.display="none"
    countryDetailsForm.style.display="none"
    countryActivityForm.style.display="none"
    briefInfoForm.style.display="block"

    embassyContainer.style.display="none"
    countryContainer.style.display="none"
    activityContainer.style.display="none"
    briefinfoContainer.style.display="block"
    briefinfoContainer.style.justifySelf="center"
}


// ===================================================================
let sourceCountry=document.getElementById("source")
let destinationCountry=document.getElementById("destination")
let embassySearchBtn=document.getElementsByClassName("searchBtns")[0]

let table=document.createElement("table")
embassyContainer.append(table)
table.classList.add("embassy-table")
table.setAttribute("border","1")
// table.setAttribute("cellspacing","0")
table.setAttribute("cellpadding","10")

let allEmbassyData=(edata)=>{
    console.log(edata.length);
    // let heading=document.createElement("h1")
    // heading.innerText="Embassy Details"
    // embassyContainer.append(heading)
    let heading=document.createElement('caption')
    heading.innerHTML="<h1>Embassy Details</h1>"
    table.append(heading)

    for(let i=0;i<edata.length;i++){
        if(i==0){
            let tr1=document.createElement("tr")
            table.append(tr1)
            let th1=document.createElement("th")
            th1.innerText="S.no"
            tr1.append(th1)
            let th2=document.createElement("th")
            th2.innerText="address"
            tr1.append(th2)
            let th3=document.createElement("th")
            th3.innerText="phone"
            tr1.append(th3)

            let tr2=document.createElement("tr")
            table.append(tr2)
            let td1=document.createElement("td")
            td1.innerText=i+1
            tr2.append(td1)
            let td2=document.createElement("td")
            td2.innerText=edata[i].address
            tr2.append(td2)
            let td3=document.createElement("td")
            td3.innerText=edata[i].phone
            tr2.append(td3)
        }else if(i>0){
            let tr2=document.createElement("tr")
            table.append(tr2)

            let td1=document.createElement("td")
            td1.innerText=i+1
            tr2.append(td1)
            let td2=document.createElement("td")
            td2.innerText=edata[i].address
            tr2.append(td2)
            let td3=document.createElement("td")
            td3.innerText=edata[i].phone
            tr2.append(td3)

        }

    }
}

let findEmbassyData= async(source,destination)=>{
    const url = `https://travel-info-api.p.rapidapi.com/find-embassy?source=${source}&destination=${destination}`;
    const options = {
        method: 'GET',
    	headers: {
            // 'x-rapidapi-key': '939955acbdmshc8c53e709620035p122b8cjsnfd8562c02c8e',
		    // 'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
            'x-rapidapi-key': 'cb580d2295msh9be939cf827fbd1p19931fjsn619d9c22c849',
		    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
    	}
    };
    
    try {
        const response = await fetch(url, options);
    	const result = await response.json();
    	// console.log(result);
        allEmbassyData(result.data)

        
    } catch (error) {
        console.error(error);
    }
}



let searchTriggered = false;

function handleSearch() {
    if (searchTriggered) return; // Prevent re-trigger
    searchTriggered = true;
    
    const query1=sourceCountry.value.trim();
    const query2=destinationCountry.value.trim()
    if ((query1&&query2) !== "") {
        console.log("Searching for:", query1,query2);
        findEmbassyData(query1,query2)
        
    } else {
        alert("Please enter country names");
    }
    
}

embassySearchBtn.addEventListener("click", handleSearch);

destinationCountry.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
});
sourceCountry.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
});
destinationCountry.addEventListener("input", () => {
    searchTriggered = false;
});
sourceCountry.addEventListener("input", () => {
    searchTriggered = false;
});
// =======================================================================
let countrySearchBtn=document.getElementsByClassName("searchBtns")[1]
let countrySearch=document.getElementById("countrysearch")





let allCountryData=(cdata)=>{
    // let heading=document.createElement('caption')
    // heading.innerHTML="Country Details"
    // heading.classList.add("country-details-heading")
    // countryContainer.append(heading)
    let table=document.createElement("table")
    countryContainer.append(table)
    table.classList.add("country-table1")
    table.setAttribute("border","1")
    // table.setAttribute("cellspacing","0")
    table.setAttribute("cellpadding","5")

    let table2=document.createElement("table")
    countryContainer.append(table2)
    table2.classList.add("country-table2")
    table2.setAttribute("border","1")
    // table.setAttribute("cellspacing","0")
    table2.setAttribute("cellpadding","5")

    let tr=document.createElement("tr")
    table.append(tr)

    let tr11=document.createElement("tr")
    table.append(tr11)

    let tr2=document.createElement("tr")
    table2.append(tr2)
    let tr22=document.createElement("tr")
    table2.append(tr22)


    let c=0
    for(let i in cdata){
        console.log(cdata);
        if(c<5){
            let th=document.createElement("th")
            th.innerText=i
            tr.append(th)
            let td=document.createElement("td")
            td.innerText=cdata[i]
            // console.log(td);
            tr11.append(td)

            // let td=document.createElement("td")
            // td.innerText=details[i]
            // tr_1.append(td)
            c+=1

        }else if(c==5){
            let table3=document.createElement("table")
            countryContainer.append(table3)
            table3.classList.add("country-table3")
            table3.setAttribute("border","1")
            // table.setAttribute("cellspacing","0")
            table3.setAttribute("cellpadding","5")
            let tr3=document.createElement("tr")
            table3.append(tr3)
            let th=document.createElement("th")
            th.innerText="s.No"
            tr3.append(th)
            let th1=document.createElement("th")
            th1.innerText="Neighbor Countries"
            tr3.append(th1)
            let list=cdata.neighborsList
            // console.log(list)
            let length_of_list=cdata.neighborsList.length
            console.log(length_of_list);

            for(let i=0;i<length_of_list;i++){
                let tr=document.createElement("tr")
                // console.log(tr);
                table3.append(tr)
                let td=document.createElement("td")
                td.innerText=i+1
                tr.append(td)
                let td1=document.createElement("td")
                td1.innerText=list[i]
                tr.append(td1)
            }
            console.log("its list"); 
            c+=1 
        }else{
            let th=document.createElement("th")
            th.innerText=i
            tr2.append(th)
            let td=document.createElement("td")
            td.innerText=cdata[i]
            // console.log(td);
            tr22.append(td)
            c+=1
        }
    }
}

let findCountryData=async(country)=>{
    const url = `https://travel-info-api.p.rapidapi.com/country-details?country=${country}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cb580d2295msh9be939cf827fbd1p19931fjsn619d9c22c849',
		    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        allCountryData(result)
    } catch (error) {
        console.error(error);
    }

}

function handleCountrySearch() {
    if (searchTriggered) return; // Prevent re-trigger
    searchTriggered = true;

    const query=countrySearch.value.trim();
    if ((query) !== "") {
        console.log("Searching for:", query);
        findCountryData(query)
    } else {
        alert("Please enter country names");
    }
}
countrySearchBtn.addEventListener("click", handleCountrySearch);

countrySearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleCountrySearch();
    }
});
countrySearch.addEventListener("input", () => {
    searchTriggered = false;
});
// =================================================================

let allCountryActivities=(ca_data)=>{
    let c=0
    console.log(ca_data["activities"]);
    // let heading=document.createElement('caption')
    // heading.innerHTML="<h1>Activity Details</h1>"
    // activityContainer.append(heading)
    
for(let i of ca_data["activities"]){
    let div=document.createElement("div")
    activityContainer.append(div)
    div.classList.add("activityContainer")
    c+=1

    let h1=document.createElement("h1")
    h1.innerText=`${c}. ${i.title}`
    div.append(h1)

    let p=document.createElement("p")
    p.innerText=i.activity
    div.append(p)
    
}
    



}

let activitiesSearchBtn=document.getElementsByClassName("searchBtns")[2]
let activitySearch=document.getElementById("activitysearch")
let findActivityData=async(activity)=>{
    const url = `https://travel-info-api.p.rapidapi.com/country-activities?country=${activity}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cb580d2295msh9be939cf827fbd1p19931fjsn619d9c22c849',
		    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.data);
        allCountryActivities(result.data)
    } catch (error) {
        console.error(error);
    }

}

function handleActivitySearch() {
    if (searchTriggered) return; // Prevent re-trigger
    searchTriggered = true;

    const query=activitySearch.value.trim();
    if ((query) !== "") {
        console.log("Searching for:", query);
        findActivityData(query)
    } else {
        alert("Please enter country names");
    }
}
activitiesSearchBtn.addEventListener("click", handleActivitySearch);

activitySearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleActivitySearch();
    }
});
activitySearch.addEventListener("input", () => {
    searchTriggered = false;
});

// ==========================================================================

let allBriefData=(bdata)=>{
    console.log(bdata);
    let d=0
    for(let i in bdata){
        console.log(i);
        if(i==='info'|| i==='image_url'){
            // console.log("conteiner");
            let div=document.createElement("div")
            // document.body.append(div)
            briefinfoContainer.append(div)
            let heading=document.createElement('caption')
            heading.innerHTML="<h1>Brief-info About country</h1>"
            briefinfoContainer.append(heading)
            div.classList.add("info-container")

            if(i==="info"){
                let p=document.createElement("p")
                p.innerText=`${i} : ${bdata[i]}`
                div.append(p)
            }else{
                let image=document.createElement("img")
                image.src=bdata[i]
                div.append(image)
            } 
        }else{
            console.log(bdata[i].length);
            for(let j=0;j<bdata[i].length;j++){
                let div=document.createElement("div")
                // document.body.append(div)
                briefinfoContainer.append(div)
                div.classList.add("image-container")

                let h1=document.createElement("h1")
                h1.innerText=bdata[i][j]["title"]
                div.append(h1)

                let image=document.createElement("img")
                image.src=bdata[i][j]["imageUrl"]
                div.append(image)
            }

        }

        // div.classList.add("activityContainer")

    }

}

let briefSearchBtn=document.getElementsByClassName("searchBtns")[3]
let briefSearch=document.getElementById("briefsearch")

let findBriefData=async(country)=>{
    const url = `https://travel-info-api.p.rapidapi.com/country?country=${country}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cb580d2295msh9be939cf827fbd1p19931fjsn619d9c22c849',
		    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        allBriefData(result.data)
    } catch (error) {
        console.error(error);
    }

}

function handleBriefSearch() {
    if (searchTriggered) return; // Prevent re-trigger
    searchTriggered = true;

    const query=briefSearch.value.trim();
    if ((query) !== "") {
        console.log("Searching for:", query);
        findBriefData(query)
    } else {
        alert("Please enter country names");
    }
}
briefSearchBtn.addEventListener("click", handleBriefSearch);

briefSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleBriefSearch();
    }
});
briefSearch.addEventListener("input", () => {
    searchTriggered = false;
});