interface MousePointer {
  x: number
  y: number
}

const getColor = (distance: number) : string => {
  const opacity = Math.min(0.5, 1 / distance);
  return `rgba(222, 10, 109, ${opacity})`;
}

const getDistance = (previousPoint: MousePointer, currentPoint: MousePointer): number => {
  // Distance formular: https://www.wikihow.com/Find-the-Distance-Between-Two-Points
  return Math.sqrt(
    (previousPoint.x - currentPoint.x) ** 2 +
      (previousPoint.y - currentPoint.y) ** 2
  );
}

const getSize = (distance : number) : number => {
  return (Math.random() / distance) * 40
}

const createOnMouseMoveHandler = (context: CanvasRenderingContext2D, pervuousPoint: MousePointer) : (e: MouseEvent) => void => {
  return (event: MouseEvent) => {
    const currentPointer: MousePointer = {
      x: event.pageX,
      y: event.pageY
    }    

    const distance = getDistance(pervuousPoint ,currentPointer)
    
    context.beginPath()
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineWidth = getSize(distance)
    context.strokeStyle = getColor(distance)
    context.moveTo(pervuousPoint.x, pervuousPoint.y)
    context.lineTo(currentPointer.x, currentPointer.y)
    context.stroke()
    context.closePath()

    pervuousPoint.x = currentPointer.x
    pervuousPoint.y = currentPointer.y
  }
}

const createOnMouseEnterHandler = (pervuousPoint: MousePointer) : (e: MouseEvent) => void => {
  return (event: MouseEvent) => {
    pervuousPoint = {
      x: event.pageX,
      y: event.pageY
    }
  }
}

const execute = () : void => {
  const width = window.innerWidth
  const height = window.innerHeight
  const canvas = document.getElementById('painting') as HTMLCanvasElement
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d') as CanvasRenderingContext2D 

  const pervuousPoint : MousePointer = {x: 0, y: 0}

  canvas.addEventListener('mousemove', createOnMouseMoveHandler(context, pervuousPoint))
  canvas.addEventListener('mouseenter', createOnMouseEnterHandler(pervuousPoint))
}

execute()