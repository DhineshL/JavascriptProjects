const http = new EasyHTTP;

//Get Users
// http.get("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data)=>console.log(data))

// create data
const data = {
  name:"john doe",
  username: "johndoe",
  email:"jdoe@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/posts",data)
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    