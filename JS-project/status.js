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
let bookingViewBtn=document.getElementById("booking-view-btn")
let subContainer=document.getElementById("main-container")
let bookingContainer=document.getElementById("booking-content")
bookingContainer.style.display="none"
bookingViewBtn.onclick=()=>{
    subContainer.style.display="none"
    bookingContainer.style.display="block"

}

let data=window.localStorage.getItem("Booking Details")
console.log(data,typeof(data));
let array_of_data=JSON.parse(data)
console.log(array_of_data);



// let heading=document.createElement("hi")
// heading.innerText="Booking Details"
// bookingContainer.append(heading)
let table=document.createElement("table")
bookingContainer.append(table)
table.classList.add("booking-tables")
let tableCaption=document.createElement("caption")
tableCaption.innerHTML="<b>Booking Details<b>"
table.append(tableCaption)
table.setAttribute("border","0")
table.setAttribute("cellspacing","0")
table.setAttribute("cellpadding","10")

    for(let i=0;i<array_of_data.length;i++){
        if(i==0){
            let tr1=document.createElement("tr")
            table.append(tr1)
            let th1=document.createElement("th")
            th1.innerText="S.no"
            tr1.append(th1)
            let th2=document.createElement("th")
            th2.innerText="Name"
            tr1.append(th2)
            let th3=document.createElement("th")
            th3.innerText="Mobile"
            tr1.append(th3)
            let th4=document.createElement("th")
            th4.innerText="Location Booked"
            tr1.append(th4)
            let th5=document.createElement("th")
            th5.innerText="Start Date"
            tr1.append(th5)
            let th6=document.createElement("th")
            th6.innerText="End Date"
            tr1.append(th6)
            let th7=document.createElement("th")
            th7.innerText="Location Booked"
            tr1.append(th7)

            let tr2=document.createElement("tr")
            table.append(tr2)
            let td1=document.createElement("td")
            td1.innerText=i+1
            tr2.append(td1)
            let td2=document.createElement("td")
            td2.innerText=array_of_data[i].Name
            tr2.append(td2)
            let td3=document.createElement("td")
            td3.innerText=array_of_data[i].Mobile
            tr2.append(td3)
            let td4=document.createElement("td")
            td4.innerText=array_of_data[i].WhereToPlanned
            tr2.append(td4)
            let td5=document.createElement("td")
            td5.innerText=array_of_data[i].StartDate
            tr2.append(td5)
            let td6=document.createElement("td")
            td6.innerText=array_of_data[i].EndDate
            tr2.append(td6)
            let td7=document.createElement("td")
            td7.innerText=array_of_data[i].ExtraDetails
            tr2.append(td7)
        }else if(i>0){
            let tr2=document.createElement("tr")
            table.append(tr2)

            let td1=document.createElement("td")
            td1.innerText=i+1
            tr2.append(td1)
            let td2=document.createElement("td")
            td2.innerText=array_of_data[i].Name
            tr2.append(td2)
            let td3=document.createElement("td")
            td3.innerText=array_of_data[i].Mobile
            tr2.append(td3)
            let td4=document.createElement("td")
            td4.innerText=array_of_data[i].WhereToPlanned
            tr2.append(td4)
            let td5=document.createElement("td")
            td5.innerText=array_of_data[i].StartDate
            tr2.append(td5)
            let td6=document.createElement("td")
            td6.innerText=array_of_data[i].EndDate
            tr2.append(td6)
            let td7=document.createElement("td")
            td7.innerText=array_of_data[i].ExtraDetails
            tr2.append(td7)

        }

    }
