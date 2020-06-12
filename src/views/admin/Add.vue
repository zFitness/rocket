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

    <!-- 描述 -->
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
    <v-switch
      v-model="isFairing"
      label="开启整流罩"
    ></v-switch>
    <div v-if="isFairing">
      <!-- 整流罩 -->
      <v-text-field
        v-model="rocket.fairing.mass"
        label="质量"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.fairing.diameter"
        label="直径"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.fairing.length"
        label="长度"
        required
      ></v-text-field>
    </div>
    <!-- 芯一级 -->
    <v-switch
      v-model="isFirst"
      label="开启第一级"
    ></v-switch>
    <div v-if="isFirst">
      <v-text-field
        v-model="rocket.firstStage.engine"
        label="发动机"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.firstStage.thrust"
        label="推力"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.firstStage.num"
        label="数量"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.firstStage.specificImpulse"
        label="比冲"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.firstStage.burnTime"
        label="燃烧时间"
        required
      ></v-text-field>
    </div>
    <v-switch
      v-model="isSecond"
      label="开启第二级"
    ></v-switch>
    <div v-if="isSecond">
      <v-text-field
        v-model="rocket.secondStage.engine"
        label="发动机"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.secondStage.thrust"
        label="推力"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.secondStage.num"
        label="数量"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.secondStage.specificImpulse"
        label="比冲"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.secondStage.burnTime"
        label="燃烧时间"
        required
      ></v-text-field>
    </div>
    <!-- 助推器 -->
    <v-switch
      v-model="isBooster"
      label="开启助推器"
    ></v-switch>
    <div v-if="isBooster">
      <v-text-field
        v-model="rocket.booster.engine"
        label="发动机"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.booster.thrust"
        label="推力"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.booster.num"
        label="每个助推器的发动机数量"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.booster.specificImpulse"
        label="比冲"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.booster.burnTime"
        label="燃烧时间"
        required
      ></v-text-field>
      <v-text-field
        v-model="rocket.booster.engineNum"
        label="助推器数量"
        required
      ></v-text-field>
    </div>
    <!--  -->
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
    isFirst: false,
    isSecond: false,
    isBooster: false,
    isFairing: false,
    files: [],
    files1: [],
    rocket: {
      nameCn: null,
      nameEn: null,
      mass: null,
      thrust: null,
      height: null,
      diameter: null,
      img: null,
      details:null,
      country: null,
      fairing: {
        mass: null,
        length: null,
        diameter: null
      },
      firstStage: {
        engine: null,
        num: null,
        burnTime: null,
        specificImpulse: null,
        thrust: null,
        tag: 1
      },
      secondStage: {
        engine: null,
        num: null,
        burnTime: null,
        specificImpulse: null,
        thrust: null,
        tag: 2
      },
      // thirdStage: {
      //   id: 3,
      //   engine: '"YF-100"液氧/煤油发动机',
      //   num: 2,
      //   burnTime: 480,
      //   specificImpulse: 333,
      //   thrust: 100,
      //   tag: 0
      // },
      coverImg: null,
      booster: {
        engine: null,
        num: null,
        burnTime: null,
        thrust: null,
        specificImpulse: null,
        engineNum: null
      }
    },
    select: [],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      // let data = { rocket: this.rocket };
      apiAdd(this.rocket).then(resp => {
        console.log(resp);
        if(resp.code == 200) {
          this.$router.push("/admin")
        }
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