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




var isRegister = false;
var code = '205106';
storageUsername = []
storagePassword = []
storageUsernameCheck = []
storagePasswordCheck = []



createAcc.onclick = function (e) {
  


  // Cách 2 lưu qua localStorage của web khi refresh sẽ k mất như k tạo đc nhiều acc và chỉ dùng đc ở web của ng dùng
  // console.log(typeof $(".create-user-form").val());

  var userInput = $(".create-user-form").val();
  var pwdInput = $(".create-password-form").val();
  var checkCode = $(".code-create").val();

  // console.log(storageUsernameCheck)
  var user1 = new createData(userInput,pwdInput)
  
  
  if(checkCreate(userInput,pwdInput,storageUsernameCheck,storagePasswordCheck) && user1.username !== '' && user1.password !== '' && checkCode === code){
    // Day vao arr de test
    storageUsernameCheck.push(userInput)
    storagePasswordCheck.push(pwdInput)
    
    // Day vao arr(Thanh stringify nen khong gop dc)
    storageUsername.push(userInput)
    storagePassword.push(pwdInput)
    // Bien thanh chuoi JSON
    var new_dataU = JSON.stringify(storageUsername)
    var new_dataP = JSON.stringify(storagePassword)

    // Day len local
    localStorage.setItem("username",new_dataU);
    localStorage.setItem("password",new_dataP);
      isRegister = true;
      actionCreate(e)
  }

  else if(user1.username === '' && user1.password === ''){
    alert('Điền tài khoản hoặc mật khẩu trước khi đăng ký')
    e.preventDefault()
  }

  else{
    alert("Tài khoản hoặc mật khẩu bị trùng hoặc là sai mã code")
    e.preventDefault()
  }

}

function checkCreate(username,password,storageUsernameCheck,storagePasswordCheck){
  for(var i=0;i<data.length;i++){
    if(data[i].username === username && data[i].password === password){
        // alert("Tk or mk bi trung")
        return false;  
    }
    else{
      continue;
    }
  }
  if(storageUsernameCheck.includes(username) && storagePasswordCheck.includes(password)){
    return false;
  }
  return true;
}



function actionCreate(e){
  if(isRegister){
    alert("Đăng ký thành công!!!")
    e.preventDefault()
  }

}













// // Check Login
var loggedCreate = false;
var loggedIn = false;
var loggedIn1 = false;
var loggedIn2 = false;

var token = 5;

loginAdmin.onclick = function (e) {
  // e.preventDefault();
  // console.log(user1.username)
  var passwordI = passWord.value;
  var usernameI = userName.value;

  // Lay arr o local
  var localU = localStorage.getItem("username")
  var localP = localStorage.getItem("password")

  // Parse no ra
  var listUNKey = JSON.parse(localU)
  var listPWKey = JSON.parse(localP)

  // Chuyen
  const listUNVal = Object.values(listUNKey);
  const listPWVal = Object.values(listPWKey );

  if(checkLogin(usernameI,passwordI,listUNVal,listPWVal)){
    console.log(token)
    if(token === 0){
      loggedIn = true;
      e.preventDefault();
      check(e);
    }
    else if(token === 1){
      loggedIn1 = true;
      check(e);
    }
    else if(token === 2){
      loggedIn2 = true;
      check(e);
    }
      loggedCreate = true;
      check(e); 
  }
  // console.log(e)
  // check(e);
}

function checkLogin(username,password,listUNVal,listPWVal) {
  for(var i=0; i< (data).length; i++) {
    // console.log((data.concat(data1))[i].username)
      if((data).hasOwnProperty(i)){
          if(username === (data)[i].username && password === (data)[i].password){
              token = i;
              return true;
          }
          else{
              continue;
          }
      }
  }
  if(listUNVal.includes(username) && listPWVal.includes(password)){{
    return true
  }}
  return false
}

function check(e) {
  if(loggedCreate){
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting-create.html'
  }

  else if(loggedIn) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting1.html'
  } 
  
  else if(loggedIn1) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting2.html'
  } 

  else if(loggedIn2) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting3.html'
  } 

  else {
    alert('Sai tài khoản hoặc mật khẩu!!!');
    e.preventDefault()
}}




//  BackBtn
backbtn.onclick = function () {
  history.back()
};



