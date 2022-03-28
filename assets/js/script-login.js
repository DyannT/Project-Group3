const data = [
  {
    username: 'admin',
    password: '456789'
  },
  {
    username: 'admin1',
    password: '123456'
  },
  {
    username: 'admin2',
    password: '123789'
  }
]


// const data1=[]

function createData(username, password) {
  this.username = username;
  this.password = password;
}

// Text
const loginText = document.querySelector('.login-text')
// Login
const loGin = document.querySelector('.login-main')
const modal = document.querySelector('.login-form')
const closebtn = document.querySelector('.close-input-form')
const userName = document.querySelector('.user-form')
const passWord = document.querySelector('.password-form')
const loginAdmin = document.querySelector('.login')
const formLogin = document.querySelector('.user-pw')
const backbtn = document.querySelector('.back-input')
// Register
const creaTe = document.querySelector('.register-main')
const modalCreate = document.querySelector('.register-form')
const closebtn1 = document.querySelector('.close-register-form')
const createAcc = document.querySelector('.register')
const userNameCreate = document.querySelector('.create-user-form')
const passWordCreate = document.querySelector('.create-password-form')
// Loading
const loading = document.querySelector('.loading')





// console.log(modal)
// console.log(loGin)
// console.log(closebtn)
// console.log(userName)
// console.log(password)
// console.log(loginAdmin)
// console.log(formLogin.action)
// console.log(backbtn)
// console.log(creaTe)
// console.log(modalCreate)
// console.log(closebtn1)
// console.log(createAcc)
// console.log(loginText)
// console.log(accountText)


// Change color text
function generateColor() {
  let color;
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  color = `rgb(${r},${g},${b})`
  loginText.style.color = color;
}
setInterval(generateColor,2000)


// Open Login
loGin.onclick = function () {
  modal.style.display = 'flex'
}

// Close Login
closebtn.onclick = function () {
  modal.style.display = 'none'
}

// Open Register
creaTe.onclick = function () {
  modalCreate.style.display = 'flex'
}

// // Close Register
closebtn1.onclick = function () {
  modalCreate.style.display = 'none'
}




// //////////Test
// console.log(!(userName.value == "admin"))
// console.log(password.value = "123456")

// function checkLogin(){
//     if(!(userName.value == "admin") || !!(password.value == "123456")){
//         return false
//     }
//     else if((userName.value == "admin") && (password.value == "123456")){
//         return true
//     }
// }

// if(loginAdmin.onclick === checkLogin())
// {
//     console.log("Đăng nhập thành công!!")
// }







// // Check register

// console.log(localStorage.getItem("create-user-form"))
// console.log(localStorage.getItem("create-password-form"))

// $("#title_hello").html(`Tôi là ${localStorage.getItem("nameUser")}`)

var isRegister = false;

createAcc.onclick = function (e) {
  // Cách 1 lưu qua data tạm thời khi refresh sẽ mất


  // e.preventDefault()
  // var createUser = userNameCreate.value;
  // // console.log(createUser)
  // var createPassword = passWordCreate.value;
  // var user1 = new createData(createUser,createPassword)
  // if(checkCreate(user1.username,user1.password) && user1.username !== '' && user1.username){
  //   isRegister = true;
  //   data.push(user1);
  //   // console.log(data)
  //   actionCreate(e)
  // }
  // else{
  //   alert("Tài khoản hoặc mật khẩu bị trùng!!!")
  //   e.preventDefault()
  // }


  // Cách 2 lưu qua localStorage của web khi refresh sẽ k mất như k tạo đc nhiều acc và chỉ dùng đc ở web của ng dùng
  // console.log(typeof $(".create-user-form").val());
  localStorage.setItem("username",$(".create-user-form").val());
  localStorage.setItem("password",$(".create-password-form").val());


  var userInput = localStorage.getItem("username",$(".create-user-form").val())
  var pwdInput = localStorage.getItem("password",$(".create-password-form").val())


  var user1 = new createData(userInput,pwdInput)
  // console.log(user1)
  if(checkCreate(user1.username,user1.password) && user1.username !== '' && user1.password !== ''){
    isRegister = true;
    data.push(user1);
    // console.log(data)
    actionCreate(e)
  }

  else if(user1.username === '' && user1.password === ''){
    alert('Please enter a username or password befor register!!')
  }

  else{
    alert("username or password Exist !!!")
    e.preventDefault()
  }
  console.log(data)

}

function checkCreate(username,password){
  for(var i=0;i<data.length;i++){
    if(data[i].username === username && data[i].password === password){
        // alert("Tk or mk bi trung")
        return false;  
    }
    else{
      continue;
    }
  }
  return true;
}


// function checkRepeat() {
//   console.log(data1[username])
// }

// alert(data1.concat(data))

function actionCreate(e){
  if(isRegister){
    alert("Đăng ký thành công!!!")
    e.preventDefault()
  }
  // else{
  //   // alert("Tài khoản hoặc mật khẩu bị trùng!!!")
  //   e.preventDefault()
  // }
}


var localU = localStorage.getItem("username",$(".create-user-form").val())
var localP = localStorage.getItem("password",$(".create-password-form").val())















// // Check Login
var loggedIn = false;

loginAdmin.onclick = function (e) {
  // e.preventDefault();
  // console.log(user1.username)
  var password = passWord.value;
  var username = userName.value;
//   loggedIn = login(password);
//   loggedIn = login(username);
  if(checkLogin(username,password)){
    loggedIn = true;
  }
  // console.log(e)
  check(e);
}

function checkLogin(username,password) {
  for(var i=0; i< (data).length; i++) {
    // console.log((data.concat(data1))[i].username)
      if((data).hasOwnProperty(i)){
          if(username === (data)[i].username && password === (data)[i].password){
              return true;
          }
          else if(username === localU && password === localP){
            return true;
          }
          else{
              continue;
          }
      }
  }
  return false
}

function check(e) {
  if(isRegister && loggedIn){
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting-create.html'
  }

  else if(loggedIn) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting.html'
  } 
  
  else {
    alert('Sai tài khoản hoặc mật khẩu!!!');
    e.preventDefault()
}}
// BackBtn
backbtn.onclick = function () {
  history.back()
};

