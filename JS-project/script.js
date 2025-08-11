let handleSignIn = () => {
    // let attempts=0
    let user_name = document.getElementById("user_name").value
    let user_password = document.getElementById("user_password").value
    // console.log(user_name,user_password);
    let user_credentials = window.localStorage.getItem("users")
    // console.log(user_credentials,typeof(user_credentials));
    if(!user_credentials){
        alert(`Seems you are not registered :(\nplease Signup and try again :)`)
    }else{
        user_credentials = JSON.parse(user_credentials)
        let match = false
        user_credentials.forEach((v) => {
            if ((v.mail == user_name || v.mob == user_name) && (v.password === user_password)) {
                alert("Login successful!")
                let details={
                    name:v.name,
                    mail:v.mail,
                    mobile:v.mob,
                    is_login:true
                }
                let login_details=[]
                login_details.push(JSON.stringify(details))
                window.sessionStorage.setItem("login_details",login_details)
                match = true
                location.assign('homepage.html')

            }
        })
        if (match == false) {
            alert("Invalid username or password")
        }

    }

    }






let bookingBtn= document.getElementsByClassName("booking-btn")
let bookingCountries=["France","Italy","Mexico","Spain","United States","Jordan","China","Greece"]
let wherTo=document.getElementById("where")
for(let i=0; i<bookingBtn.length;i++){
    bookingBtn[i].onclick=()=>{
        // console.log(bookingcountries[i]);
        wherTo.value=bookingCountries[i]
        // wherTo.style.fontSize="16px"
    }
}

let bookingForm=document.getElementById("booking-data")
let login_status=window.sessionStorage.getItem("login_details")
login_status=JSON.parse(login_status)
// phone where mem start end info
bookingForm.addEventListener('submit',(eve)=>{
    eve.preventDefault();
    if(login_status){
        let candidateName=document.getElementById("name").value
        let candidateMob=document.getElementById("phone").value
        let whereToGo=document.getElementById("where").value
        let starting=document.getElementById("start").value
        let ending=document.getElementById("end").value
        let extraInfo=document.getElementById("info").value

        let bookingDetails={
            Name:candidateName,
            Mobile:candidateMob,
            WhereToPlanned:whereToGo,
            StartDate:starting,
            EndDate:ending,
            ExtraDetails:extraInfo

        }
        let existing=window.localStorage.getItem("Booking Details")
        if(existing){
            details_array=JSON.parse(existing)
            details_array.push(bookingDetails)
            converted=JSON.stringify(details_array)
            window.localStorage.setItem('Booking Details',converted)
            // console.log(details_array,typeof(details_array))
            details_array.push(bookingDetails)
            location.assign('bookingstatus.html')

        }else{
            let booking_details=[]
            booking_details.push(bookingDetails)
            book=JSON.stringify(booking_details)
            window.localStorage.setItem("Booking Details",book)
            location.assign('bookingstatus.html')
        }
        // console.log(book);

        bookingForm.reset()
        // console.log(bookingDetails);
    }else{
        console.log("login first");
        alert('Please Login first')
        location.assign("login.html")
    }  
})


// =============country info logic started from here===============================

// let findEmbassy=document.getElementsByClassName("country-info")[0]
// let countryDetails=document.getElementsByClassName("country-info")[1]
// let countryActivities=document.getElementsByClassName("country-info")[2]
// let briefinfoCountry=document.getElementsByClassName("country-info")[3]

// findEmbassy.style.textDecoration="underline"
// countryDetails.style.textDecoration="none"
// countryActivities.style.textDecoration="none"
// briefinfoCountry.style.textDecoration="none"

// let emabassyForm=document.getElementById("embassy-form")
// let countryDetailsForm=document.getElementById("country-details-form")
// let countryActivityForm=document.getElementById("country-activities-form")
// let briefInfoForm=document.getElementById("brief-info-form")

// emabassyForm.style.display="block"
// countryDetailsForm.style.display="none"
// countryActivityForm.style.display="none"
// briefInfoForm.style.display="none"

// findEmbassy.onclick=()=>{
//     findEmbassy.style.textDecoration="underline"
//     countryDetails.style.textDecoration="none"
//     countryActivities.style.textDecoration="none"
//     briefinfoCountry.style.textDecoration="none"

//     emabassyForm.style.display="block"
//     countryDetailsForm.style.display="none"
//     countryActivityForm.style.display="none"
//     briefInfoForm.style.display="none"
// }
// countryDetails.onclick=()=>{
//     countryDetails.style.textDecoration="underline"
//     findEmbassy.style.textDecoration="none"
//     countryActivities.style.textDecoration="none"
//     briefinfoCountry.style.textDecoration="none"

//     emabassyForm.style.display="none"
//     countryDetailsForm.style.display="block"
//     countryActivityForm.style.display="none"
//     briefInfoForm.style.display="none"

// }
// countryActivities.onclick=()=>{
//     countryActivities.style.textDecoration="underline"
//     countryDetails.style.textDecoration="none"
//     findEmbassy.style.textDecoration="none"
//     briefinfoCountry.style.textDecoration="none"

//     emabassyForm.style.display="none"
//     countryDetailsForm.style.display="none"
//     countryActivityForm.style.display="block"
//     briefInfoForm.style.display="none"
// }
// briefinfoCountry.onclick=()=>{
//     briefinfoCountry.style.textDecoration="underline"
//     findEmbassy.style.textDecoration="none"
//     countryDetails.style.textDecoration="none"
//     countryActivities.style.textDecoration="none"

//     emabassyForm.style.display="none"
//     countryDetailsForm.style.display="none"
//     countryActivityForm.style.display="none"
//     briefInfoForm.style.display="block"
// }


// // ===================================================================
// let sourceCountry=document.getElementById("source")
// let destinationCountry=document.getElementById("destination")
// let embassySearchBtn=document.getElementsByClassName("searchBtns")[0]
// let displayContainer=document.getElementById("display-container")
// let table=document.createElement("table")
// displayContainer.append(table)
// table.classList.add("embassy-table")
// table.setAttribute("border","0")
// table.setAttribute("cellspacing","0")
// table.setAttribute("cellpadding","10")

// let allEmbassyData=(edata)=>{
//     console.log(edata.length);
//     let heading=document.createElement("hi")
//     heading.innerText="Embassy Details"
//     displayContainer.append(heading)

//     for(let i=0;i<edata.length;i++){
//         if(i==0){
//             let tr1=document.createElement("tr")
//             table.append(tr1)
//             let th1=document.createElement("th")
//             th1.innerText="S.no"
//             tr1.append(th1)
//             let th2=document.createElement("th")
//             th2.innerText="address"
//             tr1.append(th2)
//             let th3=document.createElement("th")
//             th3.innerText="phone"
//             tr1.append(th3)

//             let tr2=document.createElement("tr")
//             table.append(tr2)
//             let td1=document.createElement("td")
//             td1.innerText=i+1
//             tr2.append(td1)
//             let td2=document.createElement("td")
//             td2.innerText=edata[i].address
//             tr2.append(td2)
//             let td3=document.createElement("td")
//             td3.innerText=edata[i].phone
//             tr2.append(td3)
//         }else if(i>0){
//             let tr2=document.createElement("tr")
//             table.append(tr2)

//             let td1=document.createElement("td")
//             td1.innerText=i+1
//             tr2.append(td1)
//             let td2=document.createElement("td")
//             td2.innerText=edata[i].address
//             tr2.append(td2)
//             let td3=document.createElement("td")
//             td3.innerText=edata[i].phone
//             tr2.append(td3)

//         }

//     }
// }

// let findEmbassyData= async(source,destination)=>{
//     const url = `https://travel-info-api.p.rapidapi.com/find-embassy?source=${source}&destination=${destination}`;
//     const options = {
//         method: 'GET',
//     	headers: {
//             // 'x-rapidapi-key': '939955acbdmshc8c53e709620035p122b8cjsnfd8562c02c8e',
// 		    // 'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
//             'x-rapidapi-key': '75ef8877f5msh588c0bfd1d0bf3ep16de9djsnbd386712382d',
// 		    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
//     	}
//     };
    
//     try {
//         const response = await fetch(url, options);
//     	const result = await response.json();
//     	// console.log(result);
//         allEmbassyData(result.data)

        
//     } catch (error) {
//         console.error(error);
//     }
// }



// let searchTriggered = false;

// function handleSearch() {
//     if (searchTriggered) return; // Prevent re-trigger
//     searchTriggered = true;
    
//     const query1=sourceCountry.value.trim();
//     const query2=destinationCountry.value.trim()
//     if ((query1&&query2) !== "") {
//         console.log("Searching for:", query1,query2);
//         findEmbassyData(query1,query2)
        
//     } else {
//         alert("Please enter country names");
//     }
    
// }

// embassySearchBtn.addEventListener("click", handleSearch);

// destinationCountry.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         handleSearch();
//     }
// });
// sourceCountry.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         handleSearch();
//     }
// });
// destinationCountry.addEventListener("input", () => {
//     searchTriggered = false;
// });
// sourceCountry.addEventListener("input", () => {
//     searchTriggered = false;
// });
// // =======================================================================
// let countrySearchBtn=document.getElementsByClassName("searchBtns")[1]
// let countrySearch=document.getElementById("countrysearch")




// let allCountryData=(cdata)=>{

// }

// let findCountryData=async(country)=>{
//     const url = `https://travel-info-api.p.rapidapi.com/country-details?country=${country}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '35d3272b6emsha59898571281f9bp1ef7c0jsn80fdf2191750',
//             'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         allCountryData(result.data)
//     } catch (error) {
//         console.error(error);
//     }

// }

// function handleCountrySearch() {
//     if (searchTriggered) return; // Prevent re-trigger
//     searchTriggered = true;

//     const query=countrySearch.value.trim();
//     if ((query) !== "") {
//         console.log("Searching for:", query);
//         findCountryData(query)
//     } else {
//         alert("Please enter country names");
//     }
// }
// countrySearchBtn.addEventListener("click", handleCountrySearch);

// countrySearch.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         handleCountrySearch();
//     }
// });
// countrySearch.addEventListener("input", () => {
//     searchTriggered = false;
// });
// // =================================================================

// let activitiesSearchBtn=document.getElementsByClassName("searchBtns")[2]
// let activitySearch=document.getElementById("activitysearch")
// let findActivityData=async(activity)=>{
//     const url = `https://travel-info-api.p.rapidapi.com/country-activities?country=${activity}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '35d3272b6emsha59898571281f9bp1ef7c0jsn80fdf2191750',
//             'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }

// function handleActivitySearch() {
//     if (searchTriggered) return; // Prevent re-trigger
//     searchTriggered = true;

//     const query=activitySearch.value.trim();
//     if ((query) !== "") {
//         console.log("Searching for:", query);
//         findActivityData(query)
//     } else {
//         alert("Please enter country names");
//     }
// }
// activitiesSearchBtn.addEventListener("click", handleActivitySearch);

// activitySearch.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         handleActivitySearch();
//     }
// });
// activitySearch.addEventListener("input", () => {
//     searchTriggered = false;
// });

// // ==========================================================================

// let briefSearchBtn=document.getElementsByClassName("searchBtns")[3]
// let briefSearch=document.getElementById("briefsearch")

// let findBriefData=async(country)=>{
//     const url = `https://travel-info-api.p.rapidapi.com/country?country=${country}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '35d3272b6emsha59898571281f9bp1ef7c0jsn80fdf2191750',
//             'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }

// function handleBriefSearch() {
//     if (searchTriggered) return; // Prevent re-trigger
//     searchTriggered = true;

//     const query=briefSearch.value.trim();
//     if ((query) !== "") {
//         console.log("Searching for:", query);
//         findBriefData(query)
//     } else {
//         alert("Please enter country names");
//     }
// }
// briefSearchBtn.addEventListener("click", handleBriefSearch);

// briefSearch.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         handleBriefSearch();
//     }
// });
// briefSearch.addEventListener("input", () => {
//     searchTriggered = false;
// });
// ============================================================


    
        



// //signing into localstorage
// let handleSignUp = () => {
//     let username = document.getElementById("username").value
//     let email = document.getElementById("email").value
//     let mobile = document.getElementById("mobile").value
//     let password = document.getElementById("password").value
//     let confirm = document.getElementById("confirm").value
//     if (password == confirm) {
//         let user_details = {
//             name: username,
//             mobileNo: mobile,
//             mail:email,
//             password: password

//         }
//         // console.log(user_details,typeof(user_details));
//         existing_list = window.localStorage.getItem("users")

//         if (existing_list) {
//             // console.log(existing_list,typeof(existing_list));
//             user_array = JSON.parse(existing_list)
//             let user_exist = false
//             // console.log(user_array,typeof(user_array));
//             user_array.forEach((val) => {
//                 if (val.mob == mobile) {
//                     user_exist = true
//                 }

//             });
//             if (user_exist == false) {
//                 user_array.push(user_details)
//                 converted_array = JSON.stringify(user_array)
//                 window.localStorage.setItem("users", converted_array)
//                 alert("Registered Successfully")
//                 location.assign('login.html')

//             } else {
//                 alert("already registered with this mobile number")
//             }
//         } else {
//             users_list = []
//             users_list.push(user_details)
//             users_list = JSON.stringify(users_list)
//             window.localStorage.setItem("users", users_list)
//             alert("Registered Successfully")
//             location.assign('login.html')

//         }


//     } else {
//         alert("passwords do not match")
//     }
// }
// let handleSignIn = () => {
//     // let attempts=0
//     let user_name = document.getElementById("user_name").value
//     let user_password = document.getElementById("user_password").value
//     // console.log(user_name,user_password);
//     let user_credentials = window.localStorage.getItem("users")
//     // console.log(user_credentials,typeof(user_credentials));
//     user_credentials = JSON.parse(user_credentials)
//     let match = false
//     user_credentials.forEach((v) => {
//         if ((v.mail == user_name || v.mob == user_name) && (v.pass === user_password)) {
//             alert("Login successful!")
//             match = true
//             location.assign('homepage.html')
            
//         }
//     })
//     if (match == false) {
//         alert("Invalid username or password")
//     }

// }
