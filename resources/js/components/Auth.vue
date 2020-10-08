<template>
  <section class="auth">
      <template v-if="!token">
        <v-tabs v-model="tab" centered>
          <v-tabs-slider></v-tabs-slider>

          <v-tab> Авторизация </v-tab>

          <v-tab> Регистрация </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-form style="width: 500px; margin: 0 auto">
              <v-text-field label="почта" v-model="log_email">Почта</v-text-field>
              <v-text-field label="пароль" type="password" v-model="log_password"
                >Пароль</v-text-field
              >
              <v-btn color="success" class="mr-4" @click="login">Войти</v-btn>
            </v-form>
          </v-tab-item>
          <v-tab-item>
            <v-form style="width: 500px; margin: 0 auto">
              <v-text-field label="имя" v-model="reg_name">Имя</v-text-field>
              <v-text-field label="почта" v-model="reg_email">Почта</v-text-field>
              <v-text-field label="пароль" type="password" v-model="reg_password"
                >Пароль</v-text-field
              >
              <v-btn color="success" class="mr-4" @click="register"
                >Зарегистрироваться</v-btn
              >
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </template>
      <template v-else>
        вы вошли в аккаунт
        {{getInfoUser}}
      </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      reg_name: "",
      reg_email: "",
      reg_password: "",
      log_email: "",
      log_password: "",
    };
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    getInfoUser(){
      if(this.$store.getters.getToken !== null){
          if(this.$store.getters.getUserInfo === null){
            this.$store.dispatch("user",this.token);
          }
          return this.$store.getters.getUserInfo;
      }
      return null;
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", {name: this.reg_name, email: this.reg_email, password: this.reg_password});
    },
    login() {
        this.$store.dispatch("login", {email: this.log_email, password: this.log_password});
    },
  },
};
</script>