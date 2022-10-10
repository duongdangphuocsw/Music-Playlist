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
const app = {
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
      path: ".assets/songs/tungLaCuaNhau.mp3",
      image: "./assets/images/tungLaCuaNhau.jpg",
    },
    {
      name: "Ngày hôm nay của em thế nào",
      singer: "Huynim",
      path: "https://taibaihat.org/bai-hat/MicZf9nrbLKg/tai-nhac-ngay-hom-nay-cua-em-the-nao-mp3.html",
      image: "https://avatar-ex-swe.nixcdn.com/mv/2022/09/07/8/7/a/1/1662520028444_640.jpg",
    },
    {
      name: "Vì anh đâu có biết",
      singer: "Madihu x Vũ",
      path: "https://www.youtube.com/watch?v=02ODKglDVQs",
      image: "https://i.scdn.co/image/ab67616d0000b2732461003df8139247949c8a9d"
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },   {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },   {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },   {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },   {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    }, {
      name: "Sinh ra đã là thứ đối lập nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      path: "https://www.youtube.com/watch?v=redFrGBZoJY",
      image:
        "https://images.genius.com/37e000e03a925e37eb4b13de2be18179.700x700x1.jpg",
    },
    
  ],
  render: function() {
    console.log(playListBlock);
    console.log(">>> check list song: " , this.songs);
    let htmls = this.songs.map((item, index)=> {
      return `
      <div class="song">
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
      `
    })
    playListBlock.innerHTML = htmls.join("");
  },
  start: function() {
    this.render()
  }
};
app.start()
