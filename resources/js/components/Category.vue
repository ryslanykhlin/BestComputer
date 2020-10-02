<template>
    <section class="category">
        <v-container>
            <v-row>
                <v-col v-for="(product,index) in products" cols="12" lg="4" md="6" :key="index">
                    <v-card>
                        <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                        <v-card-title>{{product.title}}</v-card-title>
                        <v-card-text>{{product.category}}</v-card-text>
                        <v-card-text>{{product.description}}</v-card-text>
                        <v-card-subtitle>{{product.price}}</v-card-subtitle>
                        <v-divider class="mx-4"/>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import router from "../plugins/router";

export default {
    name: "Category",

    computed:{
        products(){
            return this.$store.getters.getProducts
        }
    },
    mounted() {
        this.$store.dispatch('productsApi',this.$route.params.category);
    }
}
</script>

<style scoped>

</style>
