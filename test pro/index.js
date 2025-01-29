// async function fetchData() {
//     let response = await fetch("https://meadow-tundra-shrimp.glitch.me/courses")
//     // console.log(response);
//     let data = await response.json();
//     console.log(data)
//     display(data)
// }
// function display(data) {

//     data.forEach(obj => {
//         console.log(obj.pic)
//         let container = document.createElement("div")
//         let item = document.createElement("div")
//         container.innerHTML = `
//     <p>name: ${obj.title}</p>
//     <img src="${obj.pic}">`

//         container.appendChild(item)
//         document.body.appendChild(container)
//     })
// }
// fetchData()

// const searchBar = document.getElementById('searchBar');
// const resultList = document.getElementById('result');
// async function fetchData() {
//     let response = await fetch("https://large-necessary-quesadilla.glitch.me/courses");
//     //    console.log(response)
//     let data = await response.json();
//     localStorage.setItem("data", JSON.stringify(data));
//     console.log(data)
//     displaydata();
// }
// function displaydata() {
//     let data = JSON.parse(localStorage.getItem("data")) || [];
//     let container = document.getElementById("container");
//     if (data.length === 0) {
//         console.log("no data");
//         container.innerHTML = "no data available"
//     }
//     else {
//         data.forEach(obj => {
//             let item = document.createElement("div");
//             item.innerHTML = `
//             <img src='${obj.pic}'>
// <p>${obj.title}</p>
// <p>${obj.description}</p>
// <p>${obj.price}</p>`

//             container.appendChild(item);
//         })
//     }
// }
// fetchData()
