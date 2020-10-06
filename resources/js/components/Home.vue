<template>
  <div>
    <v-carousel cycle delimiter-icon="mdi-minus" hide-delimiter-background>
      <v-carousel-item
        v-for="(item, index) in items"
        :key="index"
        :src="item.src"
      >
        <div class="slider__container">
          <div class="slider__title">{{ item.title }}</div>
          <div class="slider__text">{{ item.text }}</div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <section class="about mb-3 mt-3">
      <v-container>
        <div class="about__title text-h3 text-center mb-3">
          Почему иммено мы?
        </div>
        <v-row>
          <v-col>
            <div class="about__icon">
              <v-icon class="icon">mdi-forklift</v-icon>
            </div>
            <div class="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tempora earum reiciendis odit cum deserunt at facere consequuntur
              vel amet?
            </div>
          </v-col>
          <v-col>
            <div class="about__icon">
              <v-icon class="icon">mdi-alarm</v-icon>
            </div>
            <div class="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tempora earum reiciendis odit cum deserunt at facere consequuntur
              vel amet?
            </div>
          </v-col>
          <v-col>
            <div class="about__icon">
              <v-icon class="icon">mdi-calendar</v-icon>
            </div>
            <div class="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tempora earum reiciendis odit cum deserunt at facere consequuntur
              vel amet?
            </div>
          </v-col>
          <v-col>
            <div class="about__icon">
              <v-icon class="icon">mdi-xbox-controller</v-icon>
            </div>
            <div class="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tempora earum reiciendis odit cum deserunt at facere consequuntur
              vel amet?
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="comments">
      <div class="comments__title text-h4 text-center">
        Коментарии о нашей компании
      </div>
      <v-carousel
        v-model="commentsSlider"
        :show-arrows="false"
        hide-delimiter-background
      >
        <v-carousel-item v-for="(comment, index) in comments" :key="index">
          <v-sheet style="background-color: transparent !important">
            <div class="nameSlider text-h4">Егор</div>
            <div class="commentSlider">
              {{ comment.text }}
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="gallery" style="padding: 0 30px">
      <v-row>
        <v-col
          v-for="(item, index) in GalleryItems"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-img :src="item.src" @click.stop="dialog = true"> </v-img>
          <v-dialog v-model="dialog" max-width="70vh">
            <v-img :src="item.src"> </v-img>
          </v-dialog>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      commentsSlider: 0,
      comments: [
        {
          text:
            "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, quos.",
        },
        {
          text:
            "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, quos.",
        },
        {
          text:
            "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, quos.",
        },
      ],
      items: [
        {
          src:
            "https://static.razer.ru/media/offers/razer-kraken-te-gaming-headset-hero.jpg",
          title: "ИГРОВЫЕ КОМПЬЮТЕРЫНА БАЗЕ GEFORCE RTX™ 30",
          text:
            "Компьютеры на базе видеокарт GeForce RTX™ 30 обеспечивают исключительную производительность в играх, стриминге и при обработке графики и видео. В их основе лежит Ampere — архитектура видеокарт NVIDIA RTX второго поколения с новыми ядрами RT, тензорными ядрами и потоковыми мультипроцессорами, обеспечивающими максимально реалистичные эффекты трассировки лучей и передовые функции на базе искусственного интеллекта.",
        },
        {
          src:
            "https://geek.md/wp-content/uploads/2020/01/RZ03-03080100-R3M1-Razer-Huntsman-Tournament-Edition-7.jpg",
          title: "ИГРОВЫЕ КОМПЬЮТЕРЫНА БАЗЕ GEFORCE RTX™ 30",
          text:
            "Компьютеры на базе видеокарт GeForce RTX™ 30 обеспечивают исключительную производительность в играх, стриминге и при обработке графики и видео. В их основе лежит Ampere — архитектура видеокарт NVIDIA RTX второго поколения с новыми ядрами RT, тензорными ядрами и потоковыми мультипроцессорами, обеспечивающими максимально реалистичные эффекты трассировки лучей и передовые функции на базе искусственного интеллекта.",
        },
        {
          src:
            "https://storage-asset.msi.com/global/picture/image/feature/desktop/TridentA-9th/tridentA-RGB-bg.jpg",
          title: "ИГРОВЫЕ КОМПЬЮТЕРЫНА БАЗЕ GEFORCE RTX™ 30",
          text:
            "Компьютеры на базе видеокарт GeForce RTX™ 30 обеспечивают исключительную производительность в играх, стриминге и при обработке графики и видео. В их основе лежит Ampere — архитектура видеокарт NVIDIA RTX второго поколения с новыми ядрами RT, тензорными ядрами и потоковыми мультипроцессорами, обеспечивающими максимально реалистичные эффекты трассировки лучей и передовые функции на базе искусственного интеллекта.",
        },
      ],
      GalleryItems: [
        { src: "https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg" },
        { src: "https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg" },
        { src: "https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg" },
        { src: "https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.slider__title {
  font-size: 36px;
  padding-top: 60px;
}
.slider__text {
  font-size: 18px;
  color: gray;
}
.slider__container {
  width: 600px;
  margin-left: 100px;
}
@media (max-width: 862px) {
  .slider__container {
    width: 300px;
  }
  .slider__title {
    font-size: 26px;
  }
  .slider__text {
    font-size: 12px;
  }
}
.about__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 150px;
  height: 150px;
  background-color: #f5f5f5;
  margin-bottom: 30px;
}
.icon {
  font-size: 100px;
}
.about__text {
  text-align: center;
}
.commentSlider {
  font-size: 30px;
  text-align: center;
  margin-top: 100px;
}
.nameSlider {
  margin-top: 100px;
  font-weight: bold;
  text-align: center;
}
</style>
