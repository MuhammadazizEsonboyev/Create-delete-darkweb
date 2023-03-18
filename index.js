
let btn = document.querySelector(".btn-success")
let form = document.querySelector(".form")

const postData = () => {
    let inp = document.querySelector(".form-control")
    console.log(inp.value);
    fetch("http://localhost:4000/data", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inp.value })
    }).then((res) => {
        alert(res.statusText)
        inp.value = ""
    })
}

const getdata = () => {
    fetch("http://localhost:4000/data")
        .then(res => res.json())
        .then((data) => {
            data.forEach(element => {
                form.innerHTML += `
            <div class="list_paragraf">
            <p class="list_item">${element.name}</p>
                 <button class="btn btn-primary">Delete</button>
            </div>
            `
            });
        })
}
getdata()







// let local = localStorage

// btn.onclick = (e) => {
//     e.preventDefault()
//     let data = {
//         name: inp.value,
//     }
//     local.setItem("user-info", JSON.stringify(data))
// }
// let get = JSON.parse(local["user-info"]).name


// form.innerHTML += `
//         <div class="list_paragraf">
//             <p class="list_item">${get}</p>
//         <button class="btn btn-primary">Delete</button>
//         </div>
// `