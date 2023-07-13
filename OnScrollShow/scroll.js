const oberserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenEelements = document.querySelectorAll('.hidden')
hiddenEelements.forEach((element)=>{ oberserver.observe(element)})