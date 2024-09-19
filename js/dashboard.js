//add money function
document.getElementById('addMoney-btn').addEventListener('click',function(e){
  e.preventDefault();
  const addMoney = document.getElementById('addAmount').value;
  const AddPin = document.getElementById('addPin').value;
  if(AddPin === '1234'){
    console.log('congratulation! Money Added Successfully..')
    const currentBalance = document.getElementById('currentBalance').innerText;
  const balanceConvert = parseFloat(addMoney);
  const currentBlConvert = parseFloat(currentBalance);
  const newBalance = currentBlConvert + balanceConvert;
  document.getElementById('currentBalance').innerText = newBalance;
 
  
  }else{
    alert('Money Added failed!.. try again..')
  }
})