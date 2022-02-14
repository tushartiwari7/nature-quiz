const continueBtn = document.getElementById('btn-continue');

continueBtn.addEventListener('click',()=>{
  document.getElementById('modal').style.display = 'none';
  document.getElementById('main').style.visibility = 'visible';
})
