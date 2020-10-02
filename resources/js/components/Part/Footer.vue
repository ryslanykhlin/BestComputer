<template>
    <v-footer>
        <v-container>
            <v-row>
                <v-col>
                    <div class="footer__title text-h5">BestPizza</div>
                    <div class="footer__desrc text-subtitle-1">Используя данный сайт, вы автоматически
                        принимаете условия пользовательского соглашения и соглашаетесь
                        с политикой конфиденциальности.</div>
                </v-col>
                <v-col>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto, corporis culpa
                    debitis distinctio dolorum ducimus enim laudantium magni modi molestias mollitia officiis
                    pariatur reprehenderit sequi similique veritatis voluptatibus?
                </v-col>
                <v-col>
                    <div class="footer__title text-h5">Свяжитесь с нами</div>
                    <div class="footer__descr text-subtitle-1">115114, г.Москва, Кожевническая ул., 1 стр. 1, оф. 515</div>
                    <div class="footer__descr text-subtitle-1">E-mail: support@infotrade.com</div>
                    <div class="footer__descr text-subtitle-1">Tell: 8-980-340-56-70</div>
                </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-card-text class="text-center">
                {{ new Date().getFullYear() }} — <strong>BestComputer</strong>
            </v-card-text>
        </v-container>
    </v-footer>
</template>

<script>
export default {

}
</script>
