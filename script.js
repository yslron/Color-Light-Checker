const input = document.querySelector("input")
const example = document.querySelector("#example")
const red = document.querySelector("r")
const green = document.querySelector("g")
const blue = document.querySelector("b")
const hex = document.querySelector("h")
const contrast = document.querySelector("c")
const body = document.body
const div = document.createElement("div")

h.innerHTML = "#000000"
r.innerHTML = "R: 0"
g.innerHTML = "G: 0"
b.innerHTML = "B: 0"

c.innerHTML = "Color Lightness: "

  
const trainingData = [
  { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { Light: 1 } },
  { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { Light: 1 } },
  { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { Dark: 1 } },
  { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { Light: 1 } },
  { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { Dark: 1 } },
  { input: {r: 1, g: 0.99, b: 0}, output: { Light: 1 } },
  { input: {r: 1, g: 0.42, b: 0.52}, output: { Dark: 1 } },
  { input: {r: 0.03, g: 0.58, b: 0}, output: { Dark: 1 } },
  { input: {r: 1, g: 0.36, b: 0.36}, output: { Light: 1 } },
  { input: {r: 1, g: 0.0, b: 0.0}, output: { Dark: 1} },
  { input: {r: 1, g: 0.6, b: 0.6}, output: { Light: 1} },
  { input: {r: 0, g: 0.52, b: 0.5}, output: { Dark: 1} },
  { input: {r: 0.93, g: 0.53, b: 1}, output: { Light: 1} },
  { input: {r: 0.41, g: 0.6, b: 0}, output: { Dark: 1} }, //training data to train our AI
];

const config = {
  activation: 'sigmoid',
  inputSize: 5,
  inputRange: 5,
  hiddenLayers: [3],
  outputSize: 5,
  learningRate: 0.1,
  decayRate: 0.999,
};






input.addEventListener("change", (e) => {
  const rgb = getRgb(e.target.value)

  const network = new brain.NeuralNetwork(config)


  network.train(trainingData, {
    log: function(error){
      lol = error
      console.log(lol)
    },
    logPeriod: 100
  });//this is the training function in which forward propagates and backpropagates

  const result = brain.likely(rgb, network)
  console.log(config)
  console.log(e.target.value)
  example.style.background = e.target.value
  example.style.color = result === "Dark" ? "White" : "Black"

  diagram.innerHTML = brain.utilities.toSVG(network);
  console.log(result)
  h.innerHTML = e.target.value
  r.innerHTML = "R: " + rgb.r
  g.innerHTML = "G: " + rgb.g
  b.innerHTML = "B: " + rgb.b
  c.innerHTML = "Color Lightness: " + result
  err.innerHTML = lol['error'].toFixed(5)
  ite.innerHTML = lol['iterations']
  console.log(rgb);

  
})

const activation = config['activation']
const hiddenLayers = config['hiddenLayers']
const learningRate = config['learningRate']
const inputSize = config['inputSize']
const outputSize = config['outputSize']


act.innerHTML = activation
hid.innerHTML = hiddenLayers[0]
lea.innerHTML = learningRate
inp.innerHTML = inputSize
out.innerHTML = outputSize

