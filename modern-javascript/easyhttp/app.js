const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',(err, posts)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(posts); 
//   }
// });

// Get Single Post 
// http.get('https://jsonplaceholder.typicode.com/posts/1',(err, post)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(post); 
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
//     if(err){
//     console.log(err)
//   } else {
//     console.log(post); 
//   }
// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
//     if(err){
//     console.log(err)
//   } else {
//     console.log(post); 
//   }
// })

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',(err, response)=>{
  if(err){
    console.log(err)
  } else {
    console.log(response); 
  }
});


// console.log(posts);