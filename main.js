/*
    1. Render song
    2. scroll top
    3.Play/ pause/ seek
    4. CD rotate
    5. Next/ prev
    6. Random
    7. Next/ Repeat when ended
    8. Active song
    9. Scroll active song into view
    10. Play song when click
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playListBlock = $(".playlist");
const cd = $(".cd");
const heading = $(".header__introduce h3");
const cdThumb = $(".cd .cd__thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $(".progress-bar input");
const nextBtn = $(".control .icon-next");
const prevBtn = $(".control .icon-back");
const repeatBtn = $(".control .icon-repeat");
const randomBtn = $(".control .icon-random");
const minEnd = $(".time-end .min");
const secondEnd = $(".time-end .second");
const minStart = $(".time-first .min");
const secondStart = $(".time-first .second");
const volume = $(".volume input");
const iconVolume = $(".volume .volume-icon");
const app = {
  isRepeating: false,
  isPlaying: true,
  isRandom: false,
  isVolume: true,
  currentVolume: volume.value,
  currentIndex: 0,
  songs: [
    {
      name: "Anh nhớ ra",
      singer: "Vũ",
      path: "./assets/songs/anhNhoRa.mp3",
      image: "./assets/images/anhNhoRa.jpg",
    },
    {
      name: "Từng là của nhau",
      singer: "Bảo Anh x Vũ",
      path: "./assets/songs/tungLaCuaNhau.mp3",
      image: "./assets/images/tungLaCuaNhau.jpg",
    },
    {
      name: "Ngày hôm nay của em thế nào",
      singer: "Huynim",
      path: "./assets/songs/ngayHomNayCuaEmTheNao.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/mv/2022/09/07/8/7/a/1/1662520028444_640.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "./assets/songs/sinhRaDaLaThuDoiLapNhau.mp3",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },

    // xoa
  ],
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvent: function () {
    // xử lý cd quay
    const cdAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdAnimate.pause();
    // handle thu phóng ảnh
    const cdWidth = cd.offsetWidth;
    document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    // handle play/pause music
    handlePlayClick = () => {
      app.isPlaying = !app.isPlaying;
      if (app.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    audio.onplay = () => {
      playBtn.classList.add("playing");
      cdAnimate.play();
    };
    audio.onpause = () => {
      playBtn.classList.remove("playing");
      cdAnimate.pause();
    };
    playBtn.onclick = () => {
      handlePlayClick();
    };
    // xu ly song chung
    handleSongGeneral = () => {
      audio.play();
      audio.currentTime = 0;
      progress.value = 0;
      app.isPlaying = true;
      handlePlayClick();
      audio.addEventListener("timeupdate", handleProgress);
    };
    // xử lý tiến độ bài hát
    handleProgress = () => {
      if (audio.duration) {
        const percentProgress = (audio.currentTime / audio.duration) * 100;
        progress.value = percentProgress;
      }
    };
    // handle progress time
    audio.addEventListener("loadedmetadata", () => {
      audio.addEventListener("timeupdate", () => {
        // set up current time
        const currentTimeSong = audio.currentTime;
        const minCurrentSong = Math.floor(currentTimeSong / 60);
        const secondCurrentSong = Math.floor(
          currentTimeSong - minCurrentSong * 60
        );
        // set up time end
        const timeSong = audio.duration;
        const existTime = audio.duration - audio.currentTime;
        const minExist = Math.floor(existTime / 60);
        const secondExist = Math.floor(existTime - minExist * 60);
        minStart.innerText = minCurrentSong;
        secondStart.innerText =
          secondCurrentSong < 10 ? "0" + secondCurrentSong : secondCurrentSong;
        minEnd.innerText = minExist;
        secondEnd.innerText =
          secondExist < 10 ? "0" + secondExist : secondExist;
      });
    });
    // handle progress bar
    audio.addEventListener("timeupdate", handleProgress);
    //audio.addEventListener("timeupdate", handleProgressTime);
    // xử lý khi tua
    progress.oninput = (event)=> {
      const timeProgress = (event.target.value * audio.duration) / 100;
      audio.currentTime = timeProgress;
    }
    // xử lý lỗi khi tua chậm
    progress.onmousedown = (event) => {
      audio.removeEventListener("timeupdate", handleProgress);
    };
    // Xử lý lỗi khi tua
    progress.onmouseleave = () => {
      audio.addEventListener("timeupdate", handleProgress);
    };
    // handle change volume 
    volume.oninput = (event) => {
      //console.log(event.target.value);
      audio.volume = event.target.value;
      //console.log(volume.volume);
      app.isVolume = event.target.value == 0 ? false : true;
      iconVolume.classList.toggle("active" , app.isVolume);
      app.currentVolume = event.target.value;
    }
    //let currentVolume = volume.value;
    iconVolume.onclick = () => {
      app.isVolume = !app.isVolume;
      iconVolume.classList.toggle("active" , app.isVolume);
      volume.value = app.isVolume ? app.currentVolume : 0;
      audio.volume = app.isVolume ? volume.value : 0;
    }
    // handle next song
    nextBtn.onclick = (event) => {
      if (app.isRandom) {
        app.handleRandomSong();
      } else {
        app.handleNextSong();
      }

      audio.play();
      app.render();
      app.scrollToActiveSong();
    };
    // handle previus song
    prevBtn.onclick = (event) => {
      if (app.isRandom) {
        app.handleRandomSong();
      } else {
        app.handlePreviSong();
      }
      audio.play();
      app.render();
      app.scrollToActiveSong();
    };
    // handle repeat song
    repeatBtn.onclick = () => {
      app.isRepeating = !app.isRepeating;
      repeatBtn.classList.toggle("active", app.isRepeating);
    };
    // handle song random
    randomBtn.onclick = () => {
      app.isRandom = !app.isRandom;
      randomBtn.classList.toggle("active", app.randomBtn);
      //app.handleRandomSong();
    };
    // handle song ended
    audio.onended = () => {
      if (app.isRepeating) {
        setTimeout(() => audio.play(), 1000);
      } else {
        nextBtn.click();
      }
    };
  },
  handleNextSong: function () {
    if (app.currentIndex === app.songs.length - 1) {
      app.currentIndex = 0;
    } else {
      app.currentIndex++;
    }
    app.loadCurrentSong();
  },
  handlePreviSong: function () {
    if (app.currentIndex === 0) {
      app.currentIndex = 0;
    } else {
      app.currentIndex--;
    }
    app.loadCurrentSong();
    //handleSongGeneral();
  },
  handleRandomSong: function () {
    let newIndex = app.currentIndex;
    do {
      newIndex = Math.floor(Math.random() * app.songs.length);
    } while (newIndex === app.currentIndex);
    app.currentIndex = newIndex;
    app.loadCurrentSong();
  },
  render: function () {
    let htmls = this.songs.map((item, index) => {
      return `
      <div onclick="app.handleClickToActive(${index})" class="song ${
        index === app.currentIndex ? "active" : ""
      }">
      <div class="song__img">
          <img src="${item.image}" alt=""  >
      </div>

      <div class="song__information">
          <h1>${item.name}</h1>
          <p>${item.singer}</p>
      </div>
      <div class="song__btn">
          <i class="fa-solid fa-ellipsis"></i>
      </div>
  </div>
      `;
    });
    playListBlock.innerHTML = htmls.join("");
  },
  loadCurrentSong: function () {
    heading.innerText = this.currentSong.name;
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
    audio.onloadedmetadata = function () {
      const timeSong = audio.duration;
      const minTotalSong = Math.floor(timeSong / 60);
      const secondTotalSong = Math.floor(timeSong - minTotalSong * 60);
      minEnd.innerText = minTotalSong;
      secondEnd.innerText =
        secondTotalSong < 10 ? "0" + secondTotalSong : secondTotalSong;
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView(false);
    }, 300);
  },
  handleClickToActive: function (index) {
    this.currentIndex = index;
    this.render();
    this.loadCurrentSong();
    audio.play();
    this.scrollToActiveSong();
  },
  start: function () {
    // định nghĩa thuộc tính
    audio.volume = volume.value;
    this.defineProperties();
    this.handleEvent();
    this.loadCurrentSong();
    this.render();
  },
};
app.start();
