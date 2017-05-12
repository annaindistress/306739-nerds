var link = document.querySelector(".map-address .btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var formName = popup.querySelector("[name=form-name]");
var formEmail = popup.querySelector("[name=form-email]");
var formText = popup.querySelector("[name=form-text]");
var storageName = localStorage.getItem("formName");
var storageEmail = localStorage.getItem("formEmail");



link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storageName && storageEmail) {
        formName.value = storageName;
        formEmail.value = storageEmail;
        formText.focus();
    } else if (storageName) {
        formName.value = storageName;
        formEmail.focus();
    } else {
        formName.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-content-error");
});

form.addEventListener("submit", function(event) {
    if (!formName.value || !formEmail.value || !formText.value) {
        event.preventDefault();
        popup.classList.add("modal-content-error");
    } else {
        localStorage.setItem("formName", formName.value);
        localStorage.setItem("formEmail", formEmail.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-content-error");
        }
    }
});
