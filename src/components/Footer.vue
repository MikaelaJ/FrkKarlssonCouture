<template>
  <v-layout text-center>
    <v-flex md12>
      <v-footer padless class="black--text">
        <v-row class="py-3" justify="center">
          <v-btn v-for="(link, i) in links" :key="i" color="black" text rounded class="my-2 black--text">
            <router-link :to="link.route">{{ link.text }}</router-link>
          </v-btn>
        </v-row>
      </v-footer>
      <v-row justify="center" class="bg-social-footer">
        <v-btn v-for="(social, i) in socials" :key="i" color="white" text rounded class="my-2">
          <a :href="social.route">
            <v-icon color="white">{{ social.icon }}</v-icon>
          </a>
        </v-btn>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    socials: [
      { icon: "mdi-facebook-box", route: "/" },
      { icon: "mdi-instagram", route: "/" },
      { icon: "mdi-linkedin-box", route: "/" }
    ],
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
    color: #F2F2F2 !important;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
}

.v-footer {
  background-color: #402D31 !important;
}

.bg-social-footer {
  background-color: #402D31 !important;

}
  
</style>
