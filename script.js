// Update year automatically
document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  
  // Dynamic gift price update
  const giftSelect = document.getElementById("giftSelect");
  const price = document.getElementById("price");
  
  if (giftSelect && price) {
    giftSelect.addEventListener("change", () => {
      price.textContent = giftSelect.value;
    });
  }
  
  // Form submission feedback (no backend)
  const form = document.getElementById("deliveryForm");
  const message = document.getElementById("formMessage");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "🎉 Your delivery request has been submitted successfully!";
      message.style.color = "green";
      form.reset();
    });
  }
