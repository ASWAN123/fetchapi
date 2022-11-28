// get text from simplae  text  file  with  fetch  api 

document.querySelector("#getText").addEventListener("click" , getText) ;

function getText() {
    let  data  = fetch("scripts/sample.txt")
    .then((res) => res.text())
    .then((data) => {
        let container = document.getElementById("output") ;
        let p = document.createElement('p') ;
            p.innerText = data ;
        container.appendChild(p) ;

    })
}



//get list of users from json file  with fetch  api
document.querySelector("#getUsers").addEventListener("click" , getUsers) ;

function getUsers() {
     fetch("scripts/users.json")
     .then((res) => res.json())
     .then((data) => {
        let container = document.getElementById('output');
        let output ="<h2>list of users from json file</h2>";
        data.forEach((row) => {
            output += `<ul>
            <li>${row.name}</li>
            <li>${row.age}</li>
            </ul>`
            
        })
        document.getElementById('output').innerHTML = output ;

    })
}


//get list  of  posts  from online  jsonplaceholder site
document.querySelector("#getFromApi").addEventListener("click" , getFromApi) ;

function getFromApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
       let container = document.getElementById('output');
       let output ="<h2>list of users from posts </h2>";
       data.forEach((row) => {
           output += `<ul>
           <li>${row.title}</li>
           <li>${row.body}</li>
           </ul>`
           
       })
       container.innerHTML = output ;

   })
}

document.querySelector("#post-form").addEventListener('submit' , addPost)

function addPost(e) {
    e.preventDefault() ;
    let title = document.getElementById('title').value ;
    let description = document.getElementById('body').value  ; 

    fetch("https://jsonplaceholder.typicode.com/posts" , {method:"POST" , headers:{'Content-Type': 'application/json'}, body:JSON.stringify({"title":title, "body":body})})
    .then((res) => res.json()).then((data) => console.log(data))
}

// post request to the json place holder site for  fun
