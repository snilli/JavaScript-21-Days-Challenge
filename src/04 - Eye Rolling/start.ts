class EyeDetector {
  bodyElement: HTMLBodyElement
  eyesElement: NodeListOf<HTMLElement>

  constructor() {
    this.bodyElement = document.querySelector('body') as HTMLBodyElement 
    this.eyesElement = document.querySelectorAll('.eye')
  }

  onMouseMove(event: MouseEvent) {
    this.eyesElement.forEach((eyeElement:HTMLElement)   => {
      const { left: eyeLeft, top: eyeTop } = eyeElement.getBoundingClientRect();
      const eyeCenterX = eyeLeft + eyeElement.offsetWidth / 2;
      const eyeCenterY = eyeTop + eyeElement.offsetHeight / 2;
      const radian = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);
      const angle = (radian / Math.PI) * -180;
      eyeElement.style.transform = `rotate(${angle}deg)`;
    });
  }

  execute() {
    console.log(this)
    this.bodyElement.addEventListener('mousemove', this.onMouseMove.bind(this))  
  }
}

const eyeDetect = new EyeDetector()
eyeDetect.execute()