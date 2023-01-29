createMenu();

const btn = document.getElementById("change_theme")
btn.addEventListener("click", (e) => {
    const cardContent = document.getElementsByClassName("card").item(0)
    const classList = cardContent.classList
    classList.toggle("card__flex")
    classList.toggle("card__grid")
    const span = btn.getElementsByTagName('span').item(0)
    span.innerText = classList.value.includes('flex') ? 'Grid' : 'Flex'
})
