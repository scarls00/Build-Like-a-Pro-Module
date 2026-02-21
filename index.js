function contact(event) {
    event.preventDefault()
    emailjs
        .sendForm(
            'service_5mjnnki',
            'template_ssolw39',
            event.target,
            'lgVtYYk8QAylAMCav'
        ).then(() => {
            console.log('it worked')
        })
    }

