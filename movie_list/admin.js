export async function postUserAxios(e) {
  async function postUserAxios(e) {
    console.log("실행");
    e.preventDefault(); // form 태그 기본 기능 막기.

    let email = document.getElementById("email").value;
    let name = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    try {
      // 키값과 할당하는 값의 변수명이 같으면 생략할 수 있다.
      let result = await axios.post("http://101.101.218.43/users", {
        email,
        name,
        password,
      });
      console.log(result);
      if (result.status === 201) {
        // 회원가입 성공시 로그인 페이지로 이동
        alert("회원가입에 성공했습니다.");
        window.location.href = "./login.html";
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function postSignIn() {}

  document
    .getElementById("signUpForm")
    .addEventListener("submit", postUserAxios);
}
