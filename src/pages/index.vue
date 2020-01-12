<template>
  <v-container>
    <v-row>
      <v-col>
      <v-img :src="require('../assets/img/home_img.jpg')">
      <h1>Welcome!</h1></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <router-link to="/couture">
        <v-img :src="require('../assets/img/index_blackwhite_2.jpg')">
        <h3>COUTURE</h3>
        </v-img></router-link>
      </v-col>
      <v-col md="4">
        <router-link to="/wedding">
        <v-img :src="require('../assets/img/index_blackwhite_3.jpg')">
        <h3>WEDDING</h3>
        </v-img></router-link>
      </v-col>
      <v-col md="4">
        <router-link to="/about">
        <v-img :src="require('../assets/img/index_blackwhite.jpg')">
        <h3>ABOUT</h3>
        </v-img></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
<style scoped>
@font-face {
    font-family: 'Paris';
    src: url('../assets/ParisPro-Regular.otf') format("opentype");
}
h1{
  position: relative;
  text-align: center;
  top: 30%;
  color: #402D31;
  font-size: 5em;
  font-family: Paris;
}
h3{
  position: relative;
  text-align: center;
  top: 40%;
  color: #402D31;
  font-size: 2em;
  font-family: Paris;
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>