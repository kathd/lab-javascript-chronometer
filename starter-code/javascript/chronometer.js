class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  
  startClick(callback) {
    this.intervalId = setInterval(() => {
      callback();
      this.currentTime++;
    }, 1000)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
    
  }

  twoDigitsNumber(val) {
    if (val < 10) {
      return `0${val}`
    } else { return `${val}`}
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0
  }

  splitClick() {

  }

}

let x = new Chronometer();

x.getSeconds();
// console.log(x.getSeconds());