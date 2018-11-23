// var beepOne = $("#beep")
// var beep = beepOne[0]
// console.log(beepOne);
//
// beep.play()
//
// $("#c1")
// 	.mouseenter(function() {
// 		beep.play();
// 	});

// $(document).ready(function(){
// 		$("#beep").play();
// 	})
let animales = [{
  id:1,
  mp3: "abeja.mp3",
  img: "abejas.png"
}, {
  id:2,
  mp3: "alce.mp3",
  img: "alce.png"
}, {
  id:3,
  mp3: "aves.mp3",
  img: "aves.png"
}, {
  id:4,
  mp3: "borrego.mp3",
  img: "borrego.png"
}, {
  id:5,
  mp3: "buho.mp3",
  img: "buho.png"
}, {
  id:6,
  mp3: "caballo.mp3",
  img: "caballo.png"
}, {
  id:7,
  mp3: "cabra.mp3",
  img: "cabra.png"
}, {
  id:8,
  mp3: "canario.mp3",
  img: "canario.png"
}, {
  id:9,
  mp3: "cuervo.mp3",
  img: "cuervo.png"
}, {
  id:10,
  mp3: "delfin.mp3",
  img: "delfin.png"
}, {
  id:11,
  mp3: "elefante.mp3",
  img: "elefante.png"
}, {
  id:12,
  mp3: "foca.mp3",
  img: "foca.png"
}, {
  id:13,
  mp3: "gallina.mp3",
  img: "gallina.png"
}, {
  id:14,
  mp3: "gallo.mp3",
  img: "gallo.png"
},{
  id:16,
  mp3: "gorilla.mp3",
  img: "gorilla.png"
}, {
  id:17,
  mp3: "jabali.mp3",
  img: "jabali.png",
}, {
  id:18,
  mp3: "jaguar.mp3",
  img: "jaguar.png"
}, {
  id:19,
  mp3: "leon.mp3",
  img: "leon.png"
}, {
  id:20,
  mp3: "lobo.mp3",
  img: "lobo.png"
}, {
  id:21,
  mp3: "loro.mp3",
  img: "loro.png"
}, {
  id:22,
  mp3: "mono.mp3",
  img: "mono.png"
}, {
  id:23,
  mp3: "morsa.mp3",
  img: "morsa.png"
}, {
  id:24,
  mp3: "murcielago.mp3",
  img: "murcielago.png"
}, {
  id:25,
  mp3: "obeja.mp3",
  img: "obeja.png"
}, {
  id:26,
  mp3: "oso.mp3",
  img: "oso.png"
}, {
  id:27,
  mp3: "pato.mp3",
  img: "pato.png"
}, {
  id:28,
  mp3: "pavo.mp3",
  img: "pavo.png"
}, {
  id:29,
  mp3: "pavo_real.mp3",
  img: "pavo_real.png"
}, {
  id:30,
  mp3: "perro.mp3",
  img: "perro.png"
}, {
  id:31,
  mp3: "pig.mp3",
  img: "pig.png"
}, {
  id:32,
  mp3: "serpiente.mp3",
  img: "serpiente.png"
}, {
  id:33,
  mp3: "tigre.mp3",
  img: "tigre.png"
}, {
  id:34,
  mp3: "toro.mp3",
  img: "toro.png"
}, {
  id:35,
  mp3: "vaca.mp3",
  img: "vaca.png"
}]


let colores=["bluebell","fiery_fuchsia","spire","turquesa","piter",
"alizarin",
"pumpkin",
"cloud",
"sun",
"montain",
"rogue",
"procelana",
"biscain",
"oldgrain",
"foorgoten"]

let beep = document.getElementById('beep')

let cubos=[]

let adivina=0



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(1,35)


// function play() {
//   beep.play()
// }

// $( ".cubo" ).mouseenter(function() {
//   play()
//
// });

$(".c1").click(function(){
  califica(0)
})

$(".c2").click(function(){
  califica(1)
})

$(".c3").click(function(){
  califica(2)
})

$(".c1").mouseenter(function(){

  $('#player1')[0].play()
})
$(".c2").mouseenter(function(){

  $('#player2')[0].play()
})
$(".c3").mouseenter(function(){

  $('#player3')[0].play()
})

$(".c1").mouseleave(function(){
  $('#player1')[0].pause()
  $('#player1')[0].currentTime = 0
  console.log("1");

})
$(".c2").mouseleave(function(){
  $('#player2')[0].pause()
  $('#player2')[0].currentTime = 0
  console.log(2);
})
$(".c3").mouseleave(function(){
  $('#player3')[0].pause()
  $('#player3')[0].currentTime = 0
  console.log(3);
})


function califica(id) {
  if (cubos[id].id==cubos[adivina].id) {
    console.log("correcto")
    swal("Correcto","Excelente sigue practicando","success")
    juego()
  }else {
    console.log("incorrecto")
    swal("Incorrecto","Intentalo nuevamente","error")
  }
}

function juego() {
  cubos.pop()
  cubos.pop()
  cubos.pop()
  cubos.push(animales[getRandomInt(0,34)])
  cubos.push(animales[getRandomInt(0,34)])
  cubos.push(animales[getRandomInt(0,34)])
  adivina=getRandomInt(0,3)
  console.log(adivina,cubos);

  $("#zona").removeAttr('class')
  $("#zona").attr('class')
  $("#zona").addClass("zona "+colores[getRandomInt(0,colores.length)])
  $("#audio1").attr("src","./animales/"+cubos[0].mp3)
  $("#audio2").attr("src","./animales/"+cubos[1].mp3)
  $("#audio3").attr("src","./animales/"+cubos[2].mp3)


  $("#adivina").attr("src","./animales/"+cubos[adivina].img)
  $("#player1")[0].pause();
  $("#player1")[0].load();
  $("#player2")[0].pause();
  $("#player2")[0].load();
  $("#player3")[0].pause();
  $("#player3")[0].load();


}

juego()
