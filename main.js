let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #FA7070;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FA7070;">Me gusta el desarrollo web y el análisis de datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
