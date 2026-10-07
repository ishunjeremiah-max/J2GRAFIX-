// script.js

// =========================
// MOBILE MENU
// =========================

function createMobileMenu() {
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")

    if (!header || !nav) return

    const menuButton = document.createElement("button")

    menuButton.className = "menu-button"
    menuButton.innerHTML = "☰"
    menuButton.setAttribute("aria-label", "Open navigation")

    menuButton.style.cssText = `
        display: none;
        background: transparent;
        color: white;
        border: none;
        font-size: 28px;
        cursor: pointer;
    `

    header.insertBefore(menuButton, nav)

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("mobile-open")

        if (nav.classList.contains("mobile-open")) {
            menuButton.innerHTML = "✕"
        } else {
            menuButton.innerHTML = "☰"
        }
    })

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("mobile-open")
            menuButton.innerHTML = "☰"
        })
    })
}

createMobileMenu()


// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        )

        if (target) {
            event.preventDefault()

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    })
})


// =========================
// CONTACT FORM
// SEND TO WHATSAPP
// =========================

const form = document.querySelector("#contact form")

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault()

        const name =
            document.querySelector("#name").value.trim()

        const email =
            document.querySelector("#email").value.trim()

        const message =
            document.querySelector("#message").value.trim()


        if (!name || !email || !message) {
            alert("Please fill in all the fields.")
            return
        }


        // Your WhatsApp number
        const phone = "2349014505084"


        const whatsappMessage =
            `Hello J² Grafix,

My name is ${name}.

Email: ${email}

Project/Message:
${message}`


        const whatsappURL =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(whatsappMessage)


        window.open(whatsappURL, "_blank")

    })
}


// =========================
// PORTFOLIO IMAGE PREVIEW
// =========================

const portfolioImages =
    document.querySelectorAll("#portfolio img")

portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay =
            document.createElement("div")

        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.92);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
            cursor: pointer;
        `


        const preview =
            document.createElement("img")

        preview.src = image.src

        preview.alt = image.alt

        preview.style.cssText = `
            max-width: 95%;
            max-height: 90vh;
            object-fit: contain;
            border: 2px solid #D90429;
            box-shadow: 0 0 40px rgba(217,4,41,0.25);
        `


        overlay.appendChild(preview)

        document.body.appendChild(overlay)


        overlay.addEventListener("click", () => {
            overlay.remove()
        })

    })

})


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        "section, article, #portfolio img"
    )


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1"

                    entry.target.style.transform =
                        "translateY(0)"

                }

            })

        },
        {
            threshold: 0.12
        }
    )


revealElements.forEach(element => {

    element.style.opacity = "0"

    element.style.transform =
        "translateY(25px)"

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease"

    revealObserver.observe(element)

})


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section")

const navLinks =
    document.querySelectorAll("nav a")


window.addEventListener("scroll", () => {

    let current = ""

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }

    })


    navLinks.forEach(link => {

        link.style.color = ""

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.style.color = "#D90429"
        }

    })

})


// =========================
// PAGE LOADED MESSAGE
// =========================

window.addEventListener("load", () => {

    console.log(
        "J² Grafix website loaded successfully."
    )

})