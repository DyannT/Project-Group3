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

// function createData(username, password) {
//   this.username = username;
//   this.password = password;
// }

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
// console.log(passWord)
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






// // Check Login
var loggedIn1 = false;
var loggedIn2 = false;
var loggedIn3 = false;


loginAdmin.onclick = function (e) {
  // e.preventDefault();
  // console.log(user1.username)
  var password = passWord.value;
  var username = userName.value;

  if(checkLogin(username,password)){
    if(total === 0){
      loggedIn1 = true
    }
    else if(total === 1){
      loggedIn2 = true
    }
    else{
      loggedIn3 = true
    }
  }
  // console.log(e)
  check(e);
}

var total = 0

function checkLogin(username,password) {
  for(var i=0; i< (data).length; i++) {
    // console.log((data.concat(data1))[i].username)
      if((data).hasOwnProperty(i)){
          if(username === (data)[i].username && password === (data)[i].password){
            total = i
            return true;
          }
          else{
              continue;
          }
      }
  }
  return false;
}

function check(e) {
  if(loggedIn1) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting1.html'
  } 
  else if(loggedIn2) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting2.html'
  } 
  else if(loggedIn3) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting3.html'
  } 
  else {
    alert('Sai tài khoản hoặc mật khẩu!!!');
    e.preventDefault()
}}

// BackBtn
backbtn.onclick = function () {
  history.back()
};

