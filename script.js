function checkKeySearch(event) {
  var key = event.which || event.keyCode;
  if (key == 32) {
    doSearch();
  }
}

function doSearch() {
  var frm = document.forms["frm-search"];
  if (frm.words.value.length > 0) frm.submit();
}
function showSearch() {
  var url = new URL(window.location);
  var ws = url.searchParams.get("words");
  document.getElementById("searchDetail").innerHTML =
    "<h1>Từ khóa tìm kiếm</h1> <b>" + ws + "</b>";
}
// function frmValidate5(frm) {
//   return frm.checkValidity();
// }

// function loginValidate(frm) {
//   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (emailReg.test(frm.email.value) == false) {
//     alert("Vui lòng nhập email hợp lệ.");
//     frm.email.focus();
//     return false;
//   }
//   if (frm.psw.value.length < 8) {
//     alert("Mật khẩu có tối thiểu 8 ký tự.");
//     frm.psw.focus();
//     return false;
//   }
//   alert("Đã gửi dữ liệu Đăng nhập");
//   return true;
// }

// function registerValidate(frm) {
//   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (emailReg.test(frm.email.value) == false) {
//     alert("Vui lòng nhập email hợp lệ.");
//     frm.email.focus();
//     return false;
//   }
//   if (frm.psw.value.length < 8) {
//     alert("Mật khẩu có tối thiểu 8 ký tự.");
//     frm.psw.focus();
//     return false;
//   }
//   if (frm.psw2.value.length < 8) {
//     alert("Mật khẩu có tối thiểu 8 ký tự.");
//     frm.psw2.focus();
//     return false;
//   }
//   if (frm.psw.value.length != frm.psw2.value.length) {
//     alert("Mật khẩu và Nhập lại mật khẩu phải giống nhau.");
//     frm.psw.focus();
//     return false;
//   }
//   alert("Đã gửi dữ liệu Đăng ký.");
//   return true;
// }

// function contactValidate(frm) {
//   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (frm.name.value.length < 4) {
//     alert("Vui lòng nhập Tên của bạn.");
//     frm.name.focus();
//     return false;
//   }
//   if (emailReg.test(frm.email.value) == false) {
//     alert("Vui lòng nhập email hợp lệ.");
//     frm.email.focus();
//     return false;
//   }
//   if (frm.message.value.length < 10) {
//     alert("Nội dung cần liên hệ quá ngắn, vui lòng từ 10 ký tự trở lên.");
//     frm.message.focus();
//     return false;
//   }
//   alert("Đã gửi dữ liệu Liên hệ.");
//   return true;
// }
// function contactValidate(frm) {
//   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (frm.name.value.length < 4) {
//     alert("Vui lòng nhập Tên của bạn.");
//     frm.name.focus();
//     return false;
//   }
//   if (emailReg.test(frm.email.value) == false) {
//     alert("Vui lòng nhập email hợp lệ.");
//     frm.email.focus();
//     return false;
//   }
//   if (frm.message.value.length < 10) {
//     alert("Nội dung cần liên hệ quá ngắn, vui lòng từ 10 ký tự trở lên.");
//     frm.message.focus();
//     return false;
//   }
//   alert("Đã gửi dữ liệu Liên hệ.");
//   return true;
// }
