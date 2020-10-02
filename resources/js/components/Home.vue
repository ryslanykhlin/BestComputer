<template>
    <div>
        <v-carousel cycle delimiter-icon="mdi-minus" hide-delimiter-background>
            <v-carousel-item v-for="(item,index) in items"
                             :key="index"
                             :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <section class="reviews mb-10">
            <div class="reviews__title text-h2 mb-10 mt-5 text-center">Отзывы наших посетителей</div>
            <v-carousel hide-delimiters height="150px" light>
                <v-carousel-item>
                    <v-sheet height="100%">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <div class="reviews__name text-h4 text-center mb-5">Егор</div>
                                    <div class="reviews__desrc text-subtitle-1 text-center">Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.
                                        Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum
                                        odio quam ullam veniam? Tempore!</div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                    <v-sheet height="100%">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <div class="reviews__name text-h4 text-center mb-5">Егор</div>
                                    <div class="reviews__desrc text-subtitle-1 text-center">Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.
                                        Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum
                                        odio quam ullam veniam? Tempore!</div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                    <v-sheet height="100%">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <div class="reviews__name text-h4 text-center mb-5">Егор</div>
                                    <div class="reviews__desrc text-subtitle-1 text-center">Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.
                                        Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum
                                        odio quam ullam veniam? Tempore!</div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </section>
        <section class="gallery">
            <v-container>
                <v-row>
                    <v-col v-for="(item,index) in GalleryItems" :key="index" cols="12" sm="6" md="4">
                        <v-img :src="item.src" class="gallery__img"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            items: [
                {
                    src: 'https://www.tokkoro.com/picsup/5721188-pc-gaming-hd-wallpapers.jpg',
                },
                {
                    src: 'https://static.razer.ru/media/offers/razer-kraken-te-gaming-headset-hero.jpg',
                },
                {
                    src: 'https://geek.md/wp-content/uploads/2020/01/RZ03-03080100-R3M1-Razer-Huntsman-Tournament-Edition-7.jpg',
                },
                {
                    src: 'https://apac.coolermaster.com/tw/assets/products/mastercase-h500p/wallpaper/Wallpaper_4k_H500P_1.jpg',
                },
            ],
            GalleryItems:[{src:'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'},
                {src:'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'},
                {src:'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'},
                {src:'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'}]

        }
    }
}
</script>

<style scoped>

</style>
