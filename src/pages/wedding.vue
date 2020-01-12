<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h1 class="text-center pt-10 pb-4">Wedding</h1>
        <p>Do you have a dream weddingdress, but you cant find it? I can make your dream weddingdress.</p>
        <p>Book a consultation and we talk about fabrics and models and I can present a sketch and a qoutation. If you choose to go on I will make a toile, a dress in a similar fabric so you can get the feeling and we can adjust it after your wishes and get a perfect fit. Then I start cutting the real fabric.</p>
        <p>
          To create the perfect weddingdress we have about 3-5 fittings, and you will be part of the creative process from the start to the finish dress.
          I reccomend that you put your order a least 6 month prior the weddingday.
        </p>
      </v-col>
    </v-row>

 <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row class="ma-0">
              <v-col v-for="(wedding, i) in weddings" :key="i" class="d-flex child-flex" cols="4">
                <v-card flat tile class="d-flex">
                  <v-img :src="wedding.img" aspect-ratio="1" class="grey lighten-2">
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
      weddings: [
        { img: require("../assets/img/img_8.jpg") },
        { img: require("../assets/img/img_9.jpg") },
        { img: require("../assets/img/img_10.jpg") },
        { img: require("../assets/img/img_11.jpg") },
        { img: require("../assets/img/img_12.jpg") },
        { img: require("../assets/img/img_14.jpg") },
        { img: require("../assets/img/img_15.jpg") },
        { img: require("../assets/img/img_17.jpg") }
      ]
    };
  }
};
</script>
<style>
</style>