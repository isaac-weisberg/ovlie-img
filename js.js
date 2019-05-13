const buttonContainerId = "buttonContainer"
const imgContainerId = "imgcontainer"

const buttonContainer = document.getElementById(buttonContainerId)
const imgContainer = document.getElementById(imgContainerId)

const images = [
    'bg.png',
    // 'frontuncut.jpeg'
    'front.png'
]

const imageNodes = images.map((name, index) => {
    const id = `img${index}`
    const elem = document.createElement('img')
    elem.src = name
    elem.id = id
    elem.style.width = '350px';
    elem.style.display = 'block'
    elem.onload = () => {
        recalcLayout()
    }
    return elem
})

imageNodes.forEach(node => {
    imgContainer.appendChild(node)
})

const stuff = imageNodes.map(node => {
    return {
        id: node.id,
        element: node
    }
})

function recalcLayout() {
    stuff
    .filter(thing => (thing.element.style.display != 'none'))
    .forEach((thing, index) => {
        const height = thing.element.offsetHeight
        const marginTop = -height * index
        const marginTopValue = `${marginTop}px`
        thing.element.style.marginTop = marginTopValue
    })
}

const buttons = stuff.map(stuff => {
    const { element, id } = stuff
    const button = document.createElement("button")
    button.onclick = () => {
        const display = element.style.display
        const newDisplay = display === 'none' ? 'block' : 'none'
        element.style.display = newDisplay
        recalcLayout()
    }
    button.innerHTML = `Switch ${id}`
    return button
})

buttons.forEach(button => {
    buttonContainer.appendChild(button)
})