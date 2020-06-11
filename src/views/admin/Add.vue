<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="rocket.nameCn"
      label="中文名"
      required
    ></v-text-field>

    <v-text-field
      v-model="rocket.nameEn"
      label="英文名"
      required
    ></v-text-field>

    <v-text-field
      v-model="rocket.mass"
      label="质量"
      required
    ></v-text-field>

    <v-text-field
      v-model="rocket.height"
      label="高度"
      required
    ></v-text-field>
    <v-text-field
      v-model="rocket.thrust"
      label="推力"
      required
    ></v-text-field>

    <v-text-field
      v-model="rocket.diameter"
      label="直径"
      required
    ></v-text-field>

    <v-text-field
      v-model="rocket.country"
      label="国家"
      required
    ></v-text-field>

    <v-textarea
      solo
      v-model="rocket.details"
      label="描述"
    ></v-textarea>

    <v-file-input
      accept="image/*"
      label="封面"
      show-size
      v-model="files"
      @change="upload"
    ></v-file-input>

    <v-file-input
      accept="image/*"
      label="火箭大图"
      show-size
      v-model="files1"
      @change="upload1"
    ></v-file-input>

    <!-- :disabled="!valid" -->
    <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      提交
    </v-btn>
  </v-form>
</template>

<script>
import { apiUpload, apiAdd } from "../../request/api";

export default {
  data: () => ({
    valid: true,
    files: [],
    files1: [],
    rocket: {
      nameCn: "长征1号",
      nameEn: "Long march 5",
      mass: -20.0,
      thrust: 10524.0,
      height: 56.97,
      diameter: 5.0,
      img: "",
      details:
        "长征五号系列由中国运载火箭技术研究院抓总研制，设计采用通用化、系列化、组合化思想。 系列由二级半构型的基本型长征五号运载火箭（CZ-5）、不加第二级的一级半构型长征五号B运载火箭（CZ-5B） 以及添加上面级的长征五号/远征二号运载火箭（CZ-5/YZ-2）组成，地球同步转移轨道和近地轨道运载能力将分别达到14吨级、25吨级 。 中国未来天宫空间站、北斗导航系统的建设，探月三期工程及其它深空探测的实施都将使用该火箭系列。china",
      country: "中国",
      // fairing: {
      //   id: 1,
      //   mass: 25.0,
      //   length: 12.267,
      //   diameter: 5.2
      // },
      // firstStage: {
      //   id: 1,
      //   engine: 'YF-77"液氧/液氢发动机',
      //   num: 2,
      //   burnTime: 480,
      //   specificImpulse: 421,
      //   thrust: 10,
      //   tag: 1
      // },
      // secondStage: {
      //   id: 2,
      //   engine: 'YF-75D"液氧/液氢发动机',
      //   num: 2,
      //   burnTime: 480,
      //   specificImpulse: 434,
      //   thrust: 17,
      //   tag: 2
      // },
      // thirdStage: {
      //   id: 3,
      //   engine: '"YF-100"液氧/煤油发动机',
      //   num: 2,
      //   burnTime: 480,
      //   specificImpulse: 333,
      //   thrust: 100,
      //   tag: 0
      // },
      coverImg:
        "",
      // booster: null
    },
    nameCn: "",
    nameEn: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      // let data = { rocket: this.rocket };
      apiAdd(this.rocket).then(resp => {
        console.log(resp);
      });
    },
    upload() {
      // console.log(this.files);
      apiUpload(this.files).then(resp => {
        this.rocket.coverImg = resp.data;
      });
    },
    upload1() {
      // console.log(this.files);
      apiUpload(this.files1).then(resp => {
        this.rocket.img = resp.data;
      });
    }
  }
};
</script>