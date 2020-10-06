<template>
  <section class="category">
    <v-container>
      <v-row>
        <v-col
          v-for="(product, index) in products"
          cols="12"
          lg="4"
          md="6"
          :key="index"
        >
          <v-card>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-btn
              @click="addProductBasket(product)"
              absolute
              color="primary"
              class="white--text"
              fab
              right
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="card__title">{{ product.title }}</div>
            <div class="card__price">{{ product.price }} Руб</div>
            <div class="card__descr">{{ product.description }}</div>
            <v-divider class="mx-4" />
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
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    addProductBasket(product) {
      this.$store.dispatch("addProductItem", product);
    },
  },
  mounted() {
    this.$store.dispatch("productsApi", this.$route.params.category);
  },
};
</script>

<style scoped>
.card__title {
  font-size: 26px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}
.card__descr {
  color: gray;
  margin-top: 10px;
}
</style>
