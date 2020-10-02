<template>
    <section class="catalog">
        <v-container>
            <v-row>
                <v-col v-for="(item,index) in catalogItem" :key="index" cols="12" sm="6" md="4">
                    <router-link :to="'/category/' + item.link" class="category__link">
                        <v-img :src="item.src" height="400px">
                            <div class="category__title">
                                {{item.title}}
                            </div>
                        </v-img>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data(){
        return {
            catalogItem:[
                {
                    title:'Компьютеры',
                    link:'computer',
                    src:'https://avatars.mds.yandex.net/get-zen_doc/3488488/pub_5f15c156f3a8f418626364e3_5f15c5b7ef245729f9befbca/scale_1200'
                },
                {
                    title:'Ноутбуки',
                    link:'laptop',
                    src:'https://it.agnyi.ru/wp-content/uploads/2020/05/%D0%9F%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0-%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%B2-%D0%B2-%D0%A7%D0%B5%D0%B1%D0%BE%D0%BA%D1%81%D0%B0%D1%80%D0%B0%D1%85.jpg'
                },
                {
                    title:'Клавиатуры',
                    link:'keyboard',
                    src:'https://hexus.net/media/uploaded/2016/7/df7d8aee-3512-43bd-81df-89330fce037c.jpg'
                },
                {
                    title:'Мышки',
                    link:'mouse',
                    src:'https://i.playground.ru/p/7o5illYNplO6HQYcg-JV-A.jpeg'
                },
                {
                    title:'Наушники',
                    link:'headphones',
                    src:'https://static.razer.ru/media/offers/razer-kraken-te-gaming-headset-hero.jpg'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .category__title{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 36px;
    }
    .category__link{
        text-decoration: none;
    }
</style>
