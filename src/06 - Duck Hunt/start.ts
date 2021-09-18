interface Duck {
  x: number
  y: number
  speedX: number
  speedY: number
}

const random = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const mapDuctToElement = (duck:Duck) : HTMLDivElement => {
  const duckElement = document.createElement('div')
  duckElement.className = 'duck'
  duckElement.style.left = `${duck.x}px`
  duckElement.style.top = `${duck.y}px`
  duckElement.style.background = `url(./left-1.png)`
  document.body.appendChild(duckElement);

  return duckElement
}

const createDuck = (count: number) : Duck[]=> {
  return [...new Array(count)].map(() : Duck=> {
    return {
      x: random(0, window.innerWidth),
      y: window.innerHeight,
      speedX: random(-50, 50),
      speedY: random(5, 10)
    }
  })
}

const execute = () => {
  const ducks = createDuck(5)
  const duckElements = ducks.map(mapDuctToElement)
  
}

execute()