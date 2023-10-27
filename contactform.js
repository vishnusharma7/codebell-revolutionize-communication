document.getElementById("submitBtn").addEventListener("click", function() {
    if (this.data.loading) {
        return;
    }

    this.data.loading = true;

    var request_data = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Mobile: document.getElementById("mobile").value,
        Message: document.getElementById("msg").value
    };

    fetch("https://api.codebell.io/api/contact", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request_data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.Message && data.Message != this.last_message) {
            this.last_message = data.Message;
            setTimeout(() => {
                this.last_message = "";
            }, 1000);
            if (data.Status == 2) {
                window.show_success(data.Message);
            } else {
                window.show_error(data.Message);
            }
        }
        return data;
    })
    .catch(error => {
        window.show_error("Unable to complete the current action. " + error.message);
    });
});
