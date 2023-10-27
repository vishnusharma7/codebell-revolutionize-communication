document.getElementById("subscribeBtn").addEventListener("click", function() {
    // Disable the button and show a loading indicator
    this.disabled = true;
    this.innerHTML = "Subscribing...";

    var request_data = {
        email: document.getElementById("newsletterEmail").value
    };
    document.getElementById("subscribe_err").innerHTML = ""
    fetch("https://api.codebell.io/api/join_wishlist", {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
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
                document.getElementById("subscribe_form").innerHTML = data.Message


            } else {
                document.getElementById("subscribe_err").innerHTML = data.Message
            }
        }
        return data;
    })
    .catch(error => {
        document.getElementById("subscribe_err").innerHTML = "Unable to complete the current action. " + error.message
    })
    .finally(() => {
        // Re-enable the button and reset the text
        this.disabled = false;
        this.innerHTML = "Subscribe Now";
    });
});
