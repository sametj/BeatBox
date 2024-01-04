const pad = document.querySelector(".pad-container");
const box = document.querySelectorAll(".box");

let beats = {
  A: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new button("#00fffe", box[0]),
  },
  S: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
    button: new button("#00fffe", box[1]),
  },
  D: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
    button: new button("#00fffe", box[2]),
  },
  F: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    button: new button("#FF00FF", box[3]),
  },
  G: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new button("#FF00FF", box[4]),
  },
  H: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
    button: new button("#FF00FF", box[5]),
  },
  J: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    button: new button("#FFFFFF", box[6]),
  },
  K: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
    button: new button("#FFFFFF", box[7]),
  },
  L: {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
    button: new button("#FFFFFF", box[8]),
  },
};

box.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let key = btn.innerHTML;
    beats[key].beat.Play();
    beats[key].button.setButtonColor();
    a;
  });
});

document.addEventListener("keyup", function (e) {
  keypressed(e.key.toUpperCase());
});

keypressed = (e) => {
  switch (e) {
    case (e = "A"):
      box[0].click();
      break;
    case (key = "S"):
      box[1].click();
      break;
    case (key = "D"):
      box[2].click();
      break;
    case (key = "F"):
      box[3].click();
      break;
    case (key = "G"):
      box[4].click();
      break;
    case (key = "H"):
      box[5].click();
      break;
    case (key = "J"):
      box[6].click();
      break;
    case (key = "K"):
      box[7].click();
      break;
    case (key = "L"):
      box[8].click();
      break;
  }
};
