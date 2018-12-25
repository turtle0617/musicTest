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

function play() {
  const duration = 1;
  single("C", duration * 2, 0, "yellow");
  single("F", duration * 2, 10, "red");
  Gchord(duration * 2, 10);

  single("F", duration, 20, "red");
  single("G", duration, 25, "blue");

  single("F", duration, 30, "red");
  single("E", duration, 35, "pink");

  single("D", duration * 2, 40, "green");
  Cchord(duration * 2, 40);
  single("D", duration * 2, 50, "purple");


  single("D", duration * 2, 60, "green");
  single("G", duration * 2, 70, "blue");
  Cchord(duration * 2, 70);

  single("G", duration * 2, 80, "blue");
  single("A", duration * 2, 85, "blue");

  single("G", duration, 90, "blue");
  single("F", duration, 95, "red");

  single("E", duration * 2, 100, "pink");
  Cchord(duration * 2, 100);
  single("C", duration * 2, 110, "yellow");

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

function single(note, dur, delay, color) {
  setTimeout(() => {
    console.log(note);
    piano.play(note, 4, dur);
    document.body.style.backgroundColor = color
  }, (delay / 2) * 100)
}
