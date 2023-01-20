async function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = await axios.post("http:://101.101.218.43/users/login", {
    email,
    password,
  });

  if (result.status === 201) {
    window.location.href = "./index.html";
  }
  //로그인 성공시 index.html
}

let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", login);
