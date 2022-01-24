// NAVBAR

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


// SECTION-3 BOTTOM-PANEL

const section3 = document.querySelector(".section-3")

for (let malumot of bottomPanel) {
    const { img, avatar, pText, h3Text, timeImg, time } = malumot
    console.log(img, avatar, pText, h3Text, timeImg, time)

    const div = document.createElement("div")
    const kattaimg = document.createElement("img")
    const avatarimg = document.createElement("img")
    const avatarDiv = document.createElement("div")
    const timeDiv = document.createElement("div")
    const timeimg = document.createElement("img")
    const timeP = document.createElement("p")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    kattaimg.src = img
    avatarimg.src = avatar
    timeimg.src = timeImg
    timeP.innerText = time
    p.innerText = pText
    h3.innerText = h3Text

    avatarDiv.classList.add("avatar-div")
    timeDiv.classList.add("time-div")

    avatarDiv.append(p, avatarimg)
    timeDiv.append(timeimg, timeP)

    div.append(kattaimg, avatarDiv, h3, timeDiv)

    section3.append(div)
}










// SECTION-3 BOTTOM-PANEL TUGADI

