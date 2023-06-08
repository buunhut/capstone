function getDataUser() {
  var valid = true;
  valid =
    regexEmail("email", "kiemTraEmail") &
    regexPass("pass", "kiemTraPass") &
    regexPassConfirm("pass", "passConfirm", "kiemTraPassConfirm") &
    regexName("name", "kiemTraname") &
    regexPhone("phone", "kiemTraPhone") &
    regexGender("male", "female", "kiemTraGender");

  if (!valid) {
    return;
  }

  let _email = document.getElementById("email").value;
  let _pass = document.getElementById("pass").value;
  let _passConfirm = document.getElementById("passConfirm").value;
  let _name = document.getElementById("name").value;
  let _phone = document.getElementById("phone").value * 1;
  let _checkMale = document.getElementById("male").checked;
  let _checkFemale = document.getElementById("female").checked;

  let _gioiTinh = true;
  if (_checkFemale == true) {
    _gioiTinh = false;
  }
  let user = {
    email: _email,
    password: _pass,
    name: _name,
    phone: _phone,
    gender: _gioiTinh,
  };

  console.log(user);
}

function chonGioiTinhNam(nam, nu) {
  if (document.getElementById(nam).checked) {
    document.getElementById(nu).checked = false;
  }
  if (document.getElementById(nu).checked) {
    document.getElementById(nam).checked = false;
  }
}
function chonGioiTinhNu(female, male) {
  if (document.getElementById(male).checked) {
    document.getElementById(female).checked = false;
  }
  if (document.getElementById(female).checked) {
    document.getElementById(male).checked = false;
  }
}

function postUser() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    responseType: "json",
  });

  promise.then(function (res) {
    console.log(res);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}
