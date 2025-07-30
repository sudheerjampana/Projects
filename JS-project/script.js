// let menuBar = document.getElementById("menu-bar");
// let crossMenu = document.getElementById("cross-menu");
// let navContent = document.getElementsByClassName("nav-content")[0];

// menuBar.onclick = () => {
//   menuBar.style.display = "none";
//   crossMenu.style.display = "inline-block";
//   navContent.classList.add("active");
// };

// crossMenu.onclick = () => {
//   menuBar.style.display = "inline-block";
//   crossMenu.style.display = "none";
//   navContent.classList.remove("active");
// };


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
