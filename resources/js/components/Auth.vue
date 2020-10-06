<template>
  <section class="auth">
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
  mounted() {
    axios
      .post(
        "/api/auth/user",
        {},
        {
          headers: {
            Authorization:
              "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMTkwNDI1MiwiZXhwIjoxNjAxOTA3ODUyLCJuYmYiOjE2MDE5MDQyNTIsImp0aSI6InNMakZuU0k0dE5ZeDAxTTAiLCJzdWIiOjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.s05SNwVQ2E0Z-aEQH5gO7yNhr4Jor_mVKxGU1YrQJdo",
          },
        }
      )
      .then((res) => console.log(res));
  },
  methods: {
    register() {
      axios
        .post("/api/auth/register", {
          name: this.reg_name,
          email: this.reg_email,
          password: this.reg_password,
        })
        .then((res) => console.log(res));
    },
    login() {
      axios
        .post("/api/auth/login", {
          email: this.log_email,
          password: this.log_password,
        })
        .then((res) => console.log(res));
    },
  },
};
</script>