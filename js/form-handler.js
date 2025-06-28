document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successAlert = document.getElementById("form-success-alert");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            successAlert.style.display = "block";
            form.reset();
          } else {
            alert("There was an error. Please try again.");
          }
        })
        .catch(() => {
          alert("There was a problem submitting the form.");
        });
    });
  }
});
