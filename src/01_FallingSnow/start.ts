const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getCanvasById = (
  elementId: string,
  width: number,
  height: number
): HTMLCanvasElement => {
  const canvas = document.getElementById(elementId) as HTMLCanvasElement
  canvas.width = width
  canvas.height = height

  return canvas
}

interface Snowball {
  x: number
  y: number
  opacity: number
  speedX: number
  speedY: number
  radius: number
}

const createSnowBallDrawer = (snowball: Snowball, canvasContext: CanvasRenderingContext2D): void => {
  canvasContext.beginPath()
  canvasContext.arc(snowball.x, snowball.y, snowball.radius, 0, Math.PI * 2)
  canvasContext.fillStyle = `rgba(255, 255, 255, ${snowball.opacity})`
  canvasContext.fill()
}

const createSnowBallMover = (snowball: Snowball, canvas: HTMLCanvasElement): void => {
  snowball.x += snowball.speedX
  snowball.y += snowball.speedY

  if (snowball.x > canvas.width) {
    snowball.x = 0
  } else if (snowball.x < 0) {
    snowball.x = canvas.width
  }

  if (snowball.y > canvas.height) {
    snowball.y = 0
  }
}

const createSnowBalls = (
  snowball: number,
  screenWidth: number,
  screenHeight: number
): Snowball[] => {
  return [...Array(snowball)].map(() => {
    return {
      x: random(0, screenWidth),
      y: random(0, screenHeight),
      opacity: random(0.5, 1),
      speedX: random(-5, 5),
      speedY: random(1, 3),
      radius: random(2, 4)
    }
  })
}

const execute = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const snowball = 2500
  const canvasId = 'falling-snow-canvas'
  const canvas = getCanvasById(canvasId, width, height)
  const canvasCtx = canvas.getContext('2d') as CanvasRenderingContext2D 
  const snowballs = createSnowBalls(snowball, width, height)

  setInterval(() => {
    canvasCtx.clearRect(0, 0, width, height)
    for (const snowball of snowballs) {
      createSnowBallDrawer(snowball,canvasCtx)
    }
    for (const  snowball of snowballs) {
      createSnowBallMover(snowball,canvas)
    }
  }, 50)
}

execute()
