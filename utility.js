class Beat {
  constructor(audioID) {
    this.audio = new Audio(audioID);
    console.log(this.audio);
  }

  Play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class button {
  constructor(color, key) {
    this.color = color;
    this.key = key;
    this.element = document.getElementById(key);
    this.setButtonColor();
  }

  setButtonColor() {
    this.key.style.backgroundColor = this.color;
    this.key.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    this.key.style.transform = "scale(0.95)";
    this.key.style.transition = "all 0.1s ease";
    this.key.style.borderColor = this.color;
    setTimeout(() => {
      this.key.style.backgroundColor = "transparent";
      this.key.style.boxShadow = "none";
      this.key.style.transform = "scale(1)";
      this.key.style.borderColor = this.color;
    }, 1000);
  }
}
