const setElementInnerText = (id: string, text: string): void => {
  const element = document.getElementById(id)
  if (element) {
    element.innerText = text
  }
}

const countdown = () => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const date = new Date()
  const now = Date.now()
  const newYear = new Date(`1 Jan ${date.getFullYear() + 1}`).getTime()
  const dateDiff = newYear - now

  setElementInnerText('days', Math.floor(dateDiff / DAY).toString());
  setElementInnerText('hours', Math.floor(dateDiff % DAY / HOUR).toString());
  setElementInnerText('minutes', Math.floor(dateDiff % HOUR / MINUTE).toString());
  setElementInnerText('seconds', Math.floor(dateDiff % MINUTE / SECOND).toString());
}


(() => 
  setInterval(countdown, 1000)
)()