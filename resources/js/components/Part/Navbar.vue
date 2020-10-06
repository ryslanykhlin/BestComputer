<template>
  <nav class="nav">
    <v-app-bar app>
      <v-toolbar-title>BestComputer</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, index) in navBarItems"
          :key="index"
          text
          :to="item.to"
          @click="drawer = false"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <router-link to="/basket" style="margin-right: 20px; margin-left: 10px">
        <v-badge overlap :content="String(basketCount)">
          <v-icon large> mdi-basket </v-icon>
        </v-badge>
      </router-link>
      <router-link to="/auth" style="text-decoration: none">
        <v-icon large> mdi-account </v-icon>
      </router-link>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in navBarItems" :key="index">
            <v-list-item-title>
              <v-btn text :to="item.to" @click="drawer = false">
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    basketCount() {
      return this.$store.getters.getbasketCount;
    },
  },
  data: () => {
    return {
      drawer: false,
      navBarItems: [
        { title: "Главная", to: "/" },
        { title: "Каталог", to: "/category" },
        { title: "О нас", to: "/about" },
        { title: "Конкурсы", to: "/contest" },
      ],
    };
  },
};
</script>

<style scoped>
.posFix {
  position: fixed;
}
</style>
