<template>
  <section class="basket">
    <v-container>
      <template v-if="basketisNull">
        <div class="basket__title text-center">Корзина</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Название</th>
                <th class="text-left">Категория</th>
                <th class="text-left">Количество</th>
                <th class="text-left">цена</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in basketItems" :key="item.name">
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>1</td>
                <td>{{ item.price }}</td>
                <td><v-btn @click="deleteItemBasket(index)">Удалить</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <template v-else
        ><div style="text-align: center">
          Корзина Пуста перейдите в
          <router-link to="/category">Категории</router-link>
        </div></template
      >
      <div class="order" style="margin-top:40px">
      <template v-if="token">
        <v-form>
          форма заказа
        </v-form>
      </template>
      <template v-else>
          зарегестрируйтесь на сайте
      </template>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
    basketItems() {
      return this.$store.getters.getBasketItem;
    },
    basketisNull() {
      return this.$store.getters.getBasketItem.length > 0;
    },
    token() {
      return this.$store.getters.getToken;
    },
  },
  methods: {
    deleteItemBasket(index) {
      this.$store.dispatch("deleteProductItem", index);
    },
  },
};
</script>

<style scoped>
</style>
