<template>
  <div>
    <div
      v-for="(country, index) in countrys"
      :key="index"
    >
      <p class="title white--text ml-4">{{ country.country }}</p>
      <v-row>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="6"
          sm="6"
          xs="12"
          v-for="(rocket, index) in country.rockets"
          :key="index"
        >
          <rocket-card :rocket="rocket"></rocket-card>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
import RocketCard from "../../components/RocketCard";
import { apiAllRocketByCountry } from "../../request/api";

export default {
  name: "Home",

  components: {
    RocketCard
  },

  data: () => ({
    show: false,
    countrys: []
  }),

  mounted() {
    apiAllRocketByCountry().then(resp => {
      console.log(resp);
      this.countrys = resp.data;
    });
  }
};
</script>