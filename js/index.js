//login function
document.getElementById('login-btn').addEventListener('click',function(e){
  e.preventDefault();
 const phoneNumber = document.getElementById('mobileNumber').value;
 const pinNumber = document.getElementById('pinNumber').value;
 if(phoneNumber === '9433850240' && pinNumber === '1234'){
  alert('Login Successfully..');
  window.location.href = ('./js/dashboard.html');
 }
 else{
  alert('login failed! try again..');
 }
});
