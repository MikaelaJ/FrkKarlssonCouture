<template>
  <v-container>
    <v-row justify="center">
      <v-col class="contact-link" md="8">
        <h1 class="text-center pt-10 pb-4">Couture</h1>
        <p>
          I have been sewing couturedresses for the last 20 years, toghether with different designers. I can make your couturedress after your wishes. Do you need a dress for the Nobel party or a wedding you will attend? Are you a singer and looking for the perfect stage costume.
          Book a consultation and we will talk about the occation you will wear the couture dress, look at fabrics and models.
        </p>
        <p>
          If you choose to go on I will make a toile, a dress in a similar fabric so you can get the feeling and we can adjust it after your wishes and get a perfect fit. Then I start cutting the real fabric. To get the perfect fit we will have 2-4 fittings. I reccomend that you put your order a least 4 month prior the occation you will wear it.
          Patternmaking and prototypesewing:
          Do you need pattern for your collection and/or prototypes?
          I can make your patterns and protypes. I have been working with high end collections within both womenswear and childrenswear, and I have great knowledge when it comes to production chains and contacts with factorys and suppliers.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row class="ma-0">
              <v-col v-for="(couture, i) in coutures" :key="i" class="d-flex child-flex" cols="4">
                <v-card flat tile class="d-flex">
                  <v-img :src="couture.img" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      coutures: [
        { img: require("../assets/img/img_1.jpg") },
        { img: require("../assets/img/img_2.jpg") },
        { img: require("../assets/img/img_2.1.jpg") },
        { img: require("../assets/img/img_2.2.jpg") },
        { img: require("../assets/img/img_3.jpg") },
        { img: require("../assets/img/img_4.jpg") },
        { img: require("../assets/img/img_5.jpg") },
        { img: require("../assets/img/img_6.jpg") },
        { img: require("../assets/img/img_7.jpg") }
      ]
    };
  }
};
</script>
<style scoped>
p a {
  color: blue;
  text-decoration: none;
}
</style>