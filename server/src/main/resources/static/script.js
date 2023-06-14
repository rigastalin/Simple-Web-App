
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var checkbox100 = document.getElementById("additional-feature-100");
    var checkbox200 = document.getElementById("additional-feature-200");

    var productTypeSelect = document.getElementById("product-type");
    productTypeSelect.addEventListener("change", function() {
        updateTotalPrice();
    });


    var totalPriceLabel = document.getElementById("totalPrice");

    checkbox100.addEventListener("change", function() {
        updateTotalPrice();
    });

    checkbox200.addEventListener("change", function() {
        updateTotalPrice();
    });

    function updateTotalPrice() {
        var totalPrice = 0;
        if (checkbox100.checked) {
            totalPrice += 100;
        }
        if (checkbox200.checked) {
            totalPrice += 200;
        }

        var selectedProduct = productTypeSelect.value;
        if (selectedProduct === "option2") {
            totalPrice += 50;
        } else if (selectedProduct === "option3") {
            totalPrice += 100;
        } else if (selectedProduct === "option4") {
            totalPrice += 300;
        }

        totalPriceLabel.textContent = "$" + totalPrice;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    // var formContainer = document.getElementById("formContainer");
    var closeButton = document.querySelectorAll(".close");
    var sendFormButton = document.getElementById("sendFormButton");
    var errorMessage = document.querySelectorAll(".error-message");
    var emailValidErrorMessage = document.querySelector(".error-message-valid");

    function closeModal() {
        modal.style.display = "none";
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Закрытие модального окна при нажатии на кнопку "Закрыть" или на область вне окна
    closeButton.forEach(function(element) {
        element.addEventListener("click", closeModal);
    });

    // Проверка формы при нажатии на кнопку "Send Form"
    sendFormButton.addEventListener("click", function(event) {
        event.preventDefault();

        var firstNameInput = document.getElementById("firstName");
        var firstNameLabel = document.getElementById("firstNameLabel");
        var lastNameInput = document.getElementById("lastName");
        var lastNameLabel = document.getElementById("lastNameLabel");
        var emailInput = document.getElementById("email");
        var emailInputLabel = document.getElementById("emailLabel");
        var productTypeSelect = document.getElementById("product-type");
        var productTypeOption = document.getElementById("productTypeOption");

        var isValid = true;

        if (firstNameInput.value.trim() === "") {
            firstNameInput.classList.add("error");
            firstNameLabel.classList.add("error");
            errorMessage[0].style.display = "block";
            isValid = false;
        } else {
            firstNameInput.classList.remove("error");
            firstNameLabel.classList.remove("error");
            errorMessage[0].style.display = "none";
        }

        if (lastNameInput.value.trim() === "") {
            lastNameInput.classList.add("error");
            lastNameLabel.classList.add("error");
            errorMessage[1].style.display = "block";
            isValid = false;
        } else {
            lastNameInput.classList.remove("error");
            lastNameLabel.classList.remove("error");
            errorMessage[1].style.display = "none";
        }

        if (emailInput.value.trim() === "") {
            emailInput.classList.add("error");
            emailInputLabel.classList.add("error");
            errorMessage[2].style.display = "block";
            emailValidErrorMessage.style.display = "none";
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailInput.classList.add("error");
            emailInputLabel.classList.add("error");
            errorMessage[2].style.display = "none";
            emailValidErrorMessage.style.display = "block";
            isValid = false;
        } else {
            emailInput.classList.remove("error");
            emailInputLabel.classList.remove("error");
            errorMessage[2].style.display = "none";
            emailValidErrorMessage.style.display = "none";
        }

        if (productTypeSelect.value === "option1") {
            productTypeSelect.classList.add("error");
            errorMessage[3].style.display = "block";
            isValid = false;
        } else {
            productTypeSelect.classList.remove("error");
            errorMessage[3].style.display = "none";
        }

        if (isValid) {
            submitFormData();
        }
    });


    function submitFormData() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var comment = document.getElementById("comment").value;

        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Comment:", comment);

        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            comment: comment,
        };

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function(response) {
                if (response.ok) {
                    alert("Form submitted successfully!");
                    closeModal();
                } else {
                    console.error("Error:", response.status);
                }
            })
            .catch(function(error) {
                console.error("Error:", error);
            });
    }
});

function toggleSelect() {
    var select = document.getElementById('product-type');
    var customSelect = select.parentNode;

    customSelect.classList.toggle('open');
}