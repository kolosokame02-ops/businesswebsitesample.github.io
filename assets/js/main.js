
// Mobile nav toggle & simple form validation
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if(toggle){
  toggle.addEventListener('click', ()=>{
    const exp = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!exp));
    if(menu){ menu.style.display = exp ? 'none' : 'flex'; }
  });
}

function validateForm(e){
  const form = e.target;
  const phone = form.querySelector('input[name="phone"]').value.trim();
  if(!/^\+?675\s?\d{3}\s?\d{4}$/.test(phone)){
    alert('Please enter a PNG phone like +675 7XX XXXX');
    e.preventDefault();
    return false;
  }
  return true;
}
