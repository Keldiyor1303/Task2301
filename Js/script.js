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