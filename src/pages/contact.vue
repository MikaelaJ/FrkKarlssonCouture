<template>
  <v-container>
        <v-row>
      <v-col>
      <v-img :src="require('../assets/img/home_img.jpg')">
      <h1>Contact me!</h1></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      <p class="text-center">Please contact me if you have any questions or inqueries.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="text-center"><strong>Mobile:</strong> 070 734 07 72 <br><strong>Email:</strong> info@frkkarlssoncouture.com</p>
      </v-col>
    </v-row>
    
    

    <!-- <v-row justify="center">
      <v-col md="8">
        <v-card flat width="500px">
          <v-card-titel>
            <h2 class="text-center pt-10 pb-4">Get in touch</h2>
          </v-card-titel>
          <v-img :src="require('../assets/img/profile.jpg')"></v-img>
        </v-card>
        <p>07300099988</p>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { icon: "mdi-facebook-box", route: "/" },
        { icon: "mdi-instagram", route: "/" },
        { icon: "mdi-linkedin-box", route: "/" }
      ]
    };
  }
};
</script>
<style scoped>
h1{
  position: relative;
  text-align: center;
  top: 30%;
  color: #402D31;
  font-size: 5em;
  font-family: Paris;
}
p{
  position: relative;
  text-align: center;
  color: #402D31;
  font-size: 1.3em;
  font-family: Paris;
}
</style>