// ---- Hamburger menu ----
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ---- Scroll animations ----
function checkVisible() {
  var elements = document.querySelectorAll('.fade-up');
  elements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible);
checkVisible(); // Run once on load

// ---- Join form ----
function handleJoin() {
  var name     = document.getElementById('nameInput').value.trim();
  var phone    = document.getElementById('phoneInput').value.trim();
  var district = document.getElementById('districtSelect').value;
  var role     = document.getElementById('roleSelect').value;

  // Basic validation
  if (!name) {
    alert('कृपया अपना नाम लिखें।');
    return;
  }
  if (!phone || phone.length < 10) {
    alert('कृपया valid WhatsApp number डालें।');
    return;
  }
  if (!district) {
    alert('कृपया अपना district चुनें।');
    return;
  }
  if (!role) {
    alert('कृपया बताएं आप क्या करना चाहते हैं।');
    return;
  }

  // Show success message
  document.getElementById('successMsg').style.display = 'block';

  // Clear form
  document.getElementById('nameInput').value = '';
  document.getElementById('phoneInput').value = '';
  document.getElementById('districtSelect').value = '';
  document.getElementById('roleSelect').value = '';

  // In real deployment: send to a Google Sheet / backend API
  // Example: fetch('/api/join', { method:'POST', body: JSON.stringify({name, phone, district, role}) })

  console.log('New member:', { name, phone, district, role });
}

// ---- Close mobile menu on scroll ----
window.addEventListener('scroll', function() {
  document.getElementById('mobileMenu').classList.remove('open');
});