document.getElementById('cashOut-btn').addEventListener('click',function(e){
  e.preventDefault();
 const cashOutAmount = document.getElementById('cashOut-amount').value;
 const cashOutPinNumber = document.getElementById('cashOut-pinNumber').value;
 if(cashOutPinNumber === '1234'){
  const mainBalance = document.getElementById('currentBalance').innerText;
  const mainBalanceConvert = parseFloat(mainBalance);
  const cashOutUpBl = mainBalanceConvert - cashOutAmount;
  document.getElementById('currentBalance').innerText = cashOutUpBl;
  console.log('withdrawal successfully');
 }else{
  alert('withdrawal failed!.. try again..')
 }
})