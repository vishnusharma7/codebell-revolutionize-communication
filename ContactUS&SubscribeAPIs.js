
// API For Contact US Form 

submit(event) {
        event.preventDefault()
        event.stopPropagation()
        if (this.data.loading) {
            return
        }
        this.data.loading = true
        var request_data = {
            Name: this.refs.name.value,
            Email: this.refs.email.value,
            Mobile: this.refs.mobile.value,
            Message: this.refs.msg.value
        }
        return fetch("http://api.localhost/api/contact", {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: JSON.stringify(request_data)
        }).then(response => response.json()).then((data) => {
            console.log(data);
            if (data.Message && data.Message != this.last_message) {
                this.last_message = data.Message
                setTimeout(() => {
                    this.last_message = ""
                }, 1000);
                if (data.Status == 2) {
                    window.show_success(data.Message)
                } else {
                    window.show_error(data.Message)
                }
            }
            return data
        }).catch((error) => {
            window.show_error("Unable to complete current action. " + error.message)
        })
    }


    // API for Subscribe To Our Newsletter 

    submit(event) {
            event.preventDefault()
            event.stopPropagation()
            if (this.data.loading) {
                return
            }
            this.data.loading = true
            var request_data = {
                email: this.refs.email.value,
            }
            return fetch("http://api.localhost/api/join_wishlist", {
                method: 'post',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(request_data)
            }).then(response => response.json()).then((data) => {
                console.log(data);
                if (data.Message && data.Message != this.last_message) {
                    this.last_message = data.Message
                    setTimeout(() => {
                        this.last_message = ""
                    }, 1000);
                    if (data.Status == 2) {
                        window.show_success(data.Message)
                    } else {
                        window.show_error(data.Message)
                    }
                }
                return data
            }).catch((error) => {
                window.show_error("Unable to complete current action. " + error.message)
            })
        }

