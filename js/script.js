// aos

AOS.init({
  once: true,
  });

// popover

$(document).ready(function () {
  $('[data-toggle="popover1"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s1.jpg" class="img-fluid mb-1" alt="power stone"><p>It was used by the Celestial Eson the Searcher until it was contained within the Orb and hidden for millennia on Morag.</p></div>'
  });
});

$(document).ready(function () {
  $('[data-toggle="popover2"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s2.jpg" class="img-fluid mb-1" alt="power stone"><p>Housed within the Tesseract, over the course of history it was wielded by many individuals, including Johann Schmidt of HYDRA, Mar-Vell of the Kree Empire, the Skrulls, and Loki of Asgard.</p></div>'
  });
});

$(document).ready(function () {
  $('[data-toggle="popover3"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s3.jpg" class="img-fluid mb-1" alt="power stone"><p>Liquefied into a dark red fluid called the Aether, the Dark Elves and their leader Malekith intended to use it to revert the universe to its state of primordial darkness.</p></div>'
  });
});

$(document).ready(function () {
  $('[data-toggle="popover4"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s4.jpg" class="img-fluid mb-1" alt="power stone"><p>Kept on Vormir and under the protection of Red Skull since 1945, the Soul Stone was acquired by Thanos in 2018 after he sacrificed Gamora.</p></div>'
  });
});

$(document).ready(function () {
  $('[data-toggle="popover5"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s5.jpg" class="img-fluid mb-1" alt="power stone"><p>It was contained inside the Eye of Agamotto and placed under the protection of the Masters of the Mystic Arts. In 2017, Doctor Strange took possession of the Stone and used it to defeat Dormammu.</p></div>'
  });
});

$(document).ready(function () {
  $('[data-toggle="popover6"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content: '<div class="row img-fluid"><img src="img/s6.jpg" class="img-fluid mb-1" alt="power stone"><p>It was previously owned by Thanos inside his Scepter who lent it to Loki for the Chitauri Invasion. After the Battle of New York, the Scepter was confiscated by HYDRA, whose scientists used it to give extraordinary powers to the twins Wanda and Pietro Maximoff. </p></div>'
  });
});

// thanos television

let estadoTelevisor = "apagado"
let televisor = document.getElementById("televisor")
let tvOn = document.getElementById("tvOn")
let tvOff = document.getElementById("tvOff")
let noise = document.getElementById("noise")

function encenderTelevisor() {
    if (estadoTelevisor == "apagado") {
        estadoTelevisor = "encendido";
        televisor.classList.add("switch")
    } else {
        estadoTelevisor = "apagado"
        televisor.classList.remove("switch")
    }
}

function sonidosTelevisor() {
    if (noise.paused) {
        tvOn.play();
        noise.play();
    } else {
        tvOff.play();
        noise.pause();
        noise.currentTime = 0;
    }
}