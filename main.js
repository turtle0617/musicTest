window.onload = function() {
  var context = new AudioContext();
  // Setup all nodes
  Synth instanceof AudioSynth; // true

  var testInstance = new AudioSynth;
  testInstance instanceof AudioSynth; // true

  testInstance === Synth; //
  document.querySelector('button').addEventListener('click', play);

}
var piano = Synth.createInstrument('piano');
var i = 1;

function play() {
  single("C", 2, 0, "yellow");
  single("F", 2, 10, "red");
  Gchord(2, 10);

  single("F", 1, 20, "red");
  single("G", 1, 25, "blue");

  single("F", 1, 30, "red");
  single("E", 1, 35, "pink");

  single("D", 2, 40, "green");
  Cchord(2,40);
  single("D", 2, 50, "purple");


  single("D", 2, 60, "green");
  single("G", 2, 70, "blue");
  Cchord(2, 70);

  single("G", 2, 80, "blue");
  single("A", 2, 85, "blue");

  single("G", 1, 90, "blue");
  single("F", 1, 95, "red");

  single("E", 2, 100, "pink");
  Cchord(2,100);
  single("C", 2, 110, "yellow");

}

function Gchord(dur, delay) {
  setTimeout(() => {
    console.log("Gchord");
    piano.play('C', 3, dur);
    piano.play('F', 3, dur);
    piano.play('A', 3, dur);
  }, (delay / 2) * 100)

}

function Cchord(dur, delay) {
  setTimeout(() => {
    console.log("Cchord");
    piano.play('D', 3, dur);
    piano.play('G', 3, dur);
    piano.play('B', 3, dur);
  }, (delay / 2) * 100)

}

function single(str, dur, delay, color) {
  setTimeout(() => {
    console.log(str);
    piano.play(str, 4, dur);
    document.body.style.backgroundColor = color
  }, (delay / 2) * 100)
}
