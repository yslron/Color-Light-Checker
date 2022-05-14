const input = document.querySelector("input")
const example = document.querySelector("#example")
const red = document.querySelector("r")
const green = document.querySelector("g")
const blue = document.querySelector("b")
const hex = document.querySelector("h")
const body = document.body
const div = document.createElement("div")

h.innerHTML = "#000000"
r.innerHTML = "R: 0"
g.innerHTML = "G: 0"
b.innerHTML = "B: 0"

input.addEventListener("change", (e) => {
  const rgb = getRgb(e.target.value);
 
  const network = new brain.NeuralNetwork()


  network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
    { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
    { input: {r: 0.03, g: 0.58, b: 0}, output: { dark: 1 } },
    { input: {r: 1, g: 0.36, b: 0.36}, output: { light: 1 } },
    { input: {r: 1, g: 0.0, b: 0.0}, output: { dark: 1} },
    { input: {r: 1, g: 0.6, b: 0.6}, output: { light: 1} },
    { input: {r: 0, g: 0.52, b: 0.5}, output: { dark: 1} },
    { input: {r: 0.93, g: 0.53, b: 1}, output: { light: 1} },
    { input: {r: 0.41, g: 0.6, b: 0}, output: { dark: 1} },
  ])

 
  const result = brain.likely(rgb, network)
 
  console.log(e.target.value)
  example.style.background = e.target.value
  example.style.color = result === "dark" ? "white" : "black"
  
  h.innerHTML = e.target.value;
  r.innerHTML = "R: " + rgb.r
  g.innerHTML = "G: " + rgb.g
  b.innerHTML = "B: " + rgb.b
  console.log(rgb);


})

