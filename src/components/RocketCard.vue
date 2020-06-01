<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="rocket.img"
      height="200px"
      position="end"
    ></v-img>

    <v-card-title>
      {{rocket.title_cn}}
    </v-card-title>

    <v-card-subtitle>
      {{rocket.title_en}}
    </v-card-subtitle>

    <v-card-actions>

      <v-btn
        color="purple"
        text
        :to="rocket.to"
      >
        探索
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ rocket.desc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    rocket: {
      type: Object
    }
  },
  data(){
    return {
      show: false
    }
  }
};
</script>


<style lang="scss" scoped>
</style>