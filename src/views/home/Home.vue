<template>
  <div>
    <div
      v-for="(country, index) in countrys"
      :key="index"
    >
      <p class="title white--text ml-4">{{ country.name }}</p>
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
export default {
  name: "Home",

  components: {
    RocketCard
  },

  data: () => ({
    show: false,
    countrys: [
      {
        name: "中国",
        rockets: [
          {
            title_cn: "长征5号",
            title_en: "Long march 5",
            desc: "五月五，射胖五",
            img:
              "https://imgsa.baidu.com/forum/w%3D580/sign=585a2abdae44ad342ebf878fe0a30c08/9ed0c9ea15ce36d31c400b6035f33a87e850b184.jpg",
            to: "/longmarch5"
          },
          {
            title_cn: "长征二号F",
            title_en: "The Long March 2F",
            desc: "中华神箭",
            img:
              "http://img.zmblog.wang/blog/20200531/7BuHWyzOydYm.jpeg?imageslim",
            to: "/longmarch5"
          }
        ]
      },
      {
        name: "美国",
        rockets: [
          {
            title_cn: "猎鹰9",
            title_en: "Falcon 9",
            desc: "可回收式中型运载火箭",
            img:
              "http://img.zmblog.wang/blog/20200531/s8lUE5EaSfmW.jpg?imageslim",
            to: "/longmarch5"
          }
        ]
      },
      {
        name: "俄罗斯/苏联",
        rockets: [
          {
            title_cn: "联盟号",
            title_en: "Soyuz",
            desc: "联盟号火箭历史悠久、使用频繁、可靠性高，是知名火箭之一。",
            img:
              "http://img.zmblog.wang/blog/20200531/chvqgBleWpS7.jpg?imageslim",
            to: "/longmarch5"
          }
        ]
      }
    ]
  })
};
</script>