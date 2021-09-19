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
  document.body.appendChild(duckElement);

  return duckElement
}

const getDuckBackgroundImage = (duckElement: HTMLDivElement, duck: Duck): string => {
  const direction = duck.speedX > 0 ? 'right' : 'left'
  const animetion = duckElement.style.backgroundImage.includes('1') ? '2' : '1'
  return `url(./${direction}-${animetion}.png)`
}

const moveDuck = (duckElement: HTMLDivElement, duck: Duck): void => {
  const {left, top} = duckElement.getBoundingClientRect()
  const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth
  const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight

  if (outOfBoundX) {
    duck.speedX *= -1
  }

  if (outOfBoundY) {
    duck.speedY *= -1
  }

  duck.x = left + duck.speedX
  duck.y = top + duck.speedY
  duckElement.style.left = `${duck.x}px`;
  duckElement.style.top = `${duck.y}px`;
  duckElement.style.backgroundImage = getDuckBackgroundImage(duckElement, duck)
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
  for (const [index, duckElement] of duckElements.entries()) {
    const interval = setInterval(() => moveDuck(duckElement, ducks[index]), 100)
    duckElement.addEventListener('click', (event) => {
      
      const currentDuckElement = event.currentTarget as HTMLDivElement
      currentDuckElement.style.transition = 'top 2s';
      currentDuckElement.style.top = `${window.innerHeight}px`;

      clearInterval(interval);
      setTimeout(() => {
        document.body.removeChild(currentDuckElement);

        const duck = document.querySelector('.duck');
        if (!duck) {
          const winningElem = document.querySelector('.winning') as HTMLHeadElement
          winningElem.style.opacity = '1';
        }
      }, 2000)
    })
  }
}

execute()