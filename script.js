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

c.innerHTML = "Color Lightness Detected: "


const nodes = 4;

const trainingData = [

  /**
   * RBG coverted formula rgb = (rgb/255), rgb range (0-255)
   * example: White Color is R:255 G:255 B:255 in RBG Value so we'll convert the RBG Value into Decimal for it to fit to the training data.
   * Formula: where r,g,b = 255
   * r/255 = 1, g/255 = 1, b/255 = 1 then rounded to the nearest 1
   * 
  **/
  /**Blue Green**/ { input: { r: 1, g: 0.34, b: 0.2 }, output: { Light: 1 } },
  /**Green**/ { input: { r: 0, g: 1, b: 0 }, output: { Light: 1 } },
  /**Yellow**/ { input: { r: 1, g: 1, b: 0 }, output: { Light: 1 } },
  /**Orange**/ { input: { r: 1, g: 0.65, b: 0 }, output: { Light: 1 } },
  /**white**/ { input: { r: 1, g: 1, b: 1 }, output: { Light: 1 } },

  /**Red**/ { input: { r: 1, g: 0, b: 0 }, output: { Dark: 1 } },
  /**Purple**/ { input: { r: 0.5, g: 0, b: 0.5 }, output: { Dark: 1 } },
  /**Violet**/ { input: { r: 0.5, g: 0, b: 1 }, output: { Dark: 1 } },
  /**Blue**/ { input: { r: 0, g: 0, b: 1 }, output: { Dark: 1 } },
  /**Black**/ { input: { r: 0, g: 0, b: 0 }, output: { Dark: 1 } },

  /**Adjusted Input Own Data**/ 
  { input: { r: 0, g: 0.5, b: 0.5 }, output: { Dark: 1 } },
  { input: { r: 0.5, g: 0.39, b: 0 }, output: { Dark: 1 } },
  { input: { r: 0.48, g: 0.54, b: 0 }, output: { Dark: 1 } },

];




const config = {
  activation: 'sigmoid',
  inputSize: 5,
  inputRange: 5,
  hiddenLayers: [nodes,nodes], //[nodes]
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
  c.innerHTML = "Color Lightness Detected: <b>" + result
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
hid.innerHTML = hiddenLayers.length
lea.innerHTML = learningRate
inp.innerHTML = inputSize
out.innerHTML = outputSize
nod.innerHTML = nodes

