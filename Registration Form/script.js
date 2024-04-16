function validateForm() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  if (!name | !email | !password | !cpassword) {
    alert("Please Fill All The Fields!");
  }else if (password != cpassword) {
    alert("Passwords do not match!");
  }else if(password.length < 5){
    alert("Password must be atleast 5 characters long!")
  }else{
        alert("Registration Successfull")
  }
}
