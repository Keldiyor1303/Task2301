// NAVBAR

const aside = document.querySelector(".navbar")
const nav = document.querySelector("nav")

for (let link of navbar) {
    const span = document.createElement("span")
    const li = document.createElement("li")

    const i = document.createElement("i")
    i.className = link.icon

    const a = document.createElement("a")
    a.innerText = link.link
    a.href = "#"
    li.append(span, i, a)

    nav.append(li)
}

// NAVBAR TUGADI

// SECTION-2 RIGHT-PANEL

const ol = document.querySelector("#malumotlar")

for (let malumot of rightPanel) {
    const li = document.createElement("li")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    img.src = malumot.img
    h3.innerText = malumot.h3Text
    p.innerText = malumot.pText

    div.append(h3, p)
    li.append(img, div)
    ol.appendChild(li)
}















// SECTION-2 RIGHT-PANEL