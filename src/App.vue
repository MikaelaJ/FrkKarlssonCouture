<template>
  <v-app>
    <v-app-bar flat  height="250px">
      <Header />
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({})
};
</script>
