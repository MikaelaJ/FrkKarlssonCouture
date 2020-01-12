<template>
  <v-layout text-center wrap>
    <v-flex xs12>
      <v-responsive>
        <v-row justify="center">
          <router-link to="/">
            <v-img
              height="auto"
              width="100%"
              :src="require('../assets/img/logo_frkkarlsson.svg')"
              alt="logo"
            ></v-img>
          </router-link> 
        </v-row>
      </v-responsive>

      <v-toolbar floating flat justify="center">
        <v-row justify="center">
          <v-btn v-for="(link, i) in links" :key="i" color="black" text rounded class="my-2">
            <router-link :to="link.route">{{ link.text }}</router-link>
          </v-btn>
        </v-row>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: "Footer",

  data: () => ({
    links: [
      { text: "Home", route: "/" },
      { text: "Couture", route: "/couture" },
      { text: "Wedding", route: "/wedding" },
      { text: "About", route: "/about" },
      { text: "Contact", route: "/contact" }
    ]
  })
};
</script>

<style scoped>
a {
    display: block;
    color: #402D31 !important;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
}
</style>