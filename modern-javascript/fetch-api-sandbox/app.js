document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJSON);

document.getElementById('button3').addEventListener('click',getExternal);


// Get local text file data
function getText(){
  fetch('test.txt').then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

// Get local json data
function getJSON(){
  fetch('posts.json').then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach((post) => {
      output += `<li>${post.title} : ${post.body}</li>`
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// Get from external
function getExternal(){
  fetch('https://api.github.com/users', {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
     // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
    origin: 'localhost'
  }).then(res => {
    let response = res;
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
    console.log(res)
    return res.json()})
  .then(data => {

    console.log(data);
    let output = '';
    data.forEach((user)=>{
      output += `<li>${user.login} : ${user.node_id}</li>`
    })
    
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// fetch('users.json').then(function(response) {  
//   console.log(response.headers.get('Content-Type'));  
//   console.log(response.headers.get('Date'));

//   console.log(response.status);  
//   console.log(response.statusText);  
//   console.log(response.type);  
//   console.log(response.url);  
// });