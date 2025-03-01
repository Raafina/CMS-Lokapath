const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

// send email
document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // prevent default form submission

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("formspreeUrl", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            const messageBox = document.getElementById("formMessage");

            if (response.ok) {
                messageBox.innerHTML = "✅ Message sent successfully!";
                messageBox.classList.add("text-green-600");
                form.reset();
            } else {
                messageBox.innerHTML = "❌ Message failed to send.";
                messageBox.classList.add("text-red-600");
            }
        } catch (error) {
            document.getElementById("formMessage").innerHTML =
                "❌ Something wrong. Try Again";
            document
                .getElementById("formMessage")
                .classList.add("text-red-600");
        }
    });
