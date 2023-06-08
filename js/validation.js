// check email
function regexEmail(id, idThongBao) {
  let checkEmail = document.getElementById(id).value;
  if (checkEmail == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    document.getElementById("sao1").style.display = "block";
    return false;
  } else {
    let mauRegexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let mailHopLe = mauRegexEmail.test(checkEmail);
    if (mailHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      document.getElementById("sao1").style.display = "none";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập email hợp lệ (info@gmail.com)";
      document.getElementById("sao1").style.display = "block";
      return false;
    }
  }
}

// Check password
function regexPass(id, idThongBao) {
  let checkPass = document.getElementById(id).value;
  if (checkPass == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    document.getElementById("sao2").style.display = "block";
    return false;
  } else {
    let mauRegexPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if (checkPass.length >= 6) {
      if (checkPass.match(mauRegexPass)) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("sao2").style.display = "none";
        return true;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Mật khẩu ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
      document.getElementById("sao2").style.display = "block";
      return false;
    }
  }
}

// Check passConfirm
function regexPassConfirm(idPass, idPassConfirm, idThongBao) {
  var pass = document.getElementById(idPass).value;
  var passConfirm = document.getElementById(idPassConfirm).value;
  if (passConfirm == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    document.getElementById("sao3").style.display = "block";
    return false;
  } else {
    if (passConfirm != pass) {
      document.getElementById(idThongBao).innerHTML = "Mật khẩu không khớp";
      document.getElementById("sao3").style.display = "block";
      return false;
    } else {
      document.getElementById(idThongBao).innerHTML = "";
      document.getElementById("sao3").style.display = "none";
      return true;
    }
  }
}
// Check name
function regexName(id, idThongBao) {
  let checkName = document.getElementById(id).value;
  if (checkName == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    document.getElementById("sao4").style.display = "block";
    return false;
  } else {
    let chiLayChu = /^[\p{L} ]+$/u;
    let nameHopLe = chiLayChu.test(checkName);
    if (nameHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      document.getElementById("sao4").style.display = "none";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập tên chỉ chứa ký tự chữ";
      document.getElementById("sao4").style.display = "block";
      return false;
    }
  }
}

// Check phone
function regexPhone(id, idThongBao) {
  let checkPhone = document.getElementById(id).value;
  if (checkPhone == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    document.getElementById("sao5").style.display = "block";
    return false;
  } else {
    let chiLaySo = /[0-9]/g;
    let phoneHopLe = chiLaySo.test(checkPhone);
    if (phoneHopLe) {
      if (checkPhone.length == 10) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("sao5").style.display = "none";
        return true;
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Số phone phải gồm 10 số";
        document.getElementById("sao5").style.display = "block";
        return false;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập phone chỉ chứa ký tự số";
      document.getElementById("sao5").style.display = "block";
    }
  }
}

// check gender
function regexGender(idMale, idFemale, idThongBao) {
  let checkMale = document.getElementById(idMale).checked;
  let checkFemale = document.getElementById(idFemale).checked;
  console.log(checkMale);
  console.log(checkFemale);
  if (checkMale == false && checkFemale == false) {
    document.getElementById(idThongBao).innerHTML = "Vui lòng chọn giới tính";
    return false;
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }
}
