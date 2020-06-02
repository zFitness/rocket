<template>
  <div class="rocket_main">
    <!-- 标题和简介 -->
    <div class="mt-10 pa-2">
      <p class="display-3">长征5号</p>
      <p class="title">Long March 5</p>
      <div>
        <p>长征五号系列由中国运载火箭技术研究院抓总研制，设计采用通用化、系列化、组合化思想。
          系列由二级半构型的基本型长征五号运载火箭（CZ-5）、不加第二级的一级半构型长征五号B运载火箭（CZ-5B）
          以及添加上面级的长征五号/远征二号运载火箭（CZ-5/YZ-2）组成，地球同步转移轨道和近地轨道运载能力将分别达到14吨级、25吨级 。
          中国未来天宫空间站、北斗导航系统的建设，探月三期工程及其它深空探测的实施都将使用该火箭系列。</p>
      </div>
    </div>
    <!-- 参数 -->
    <v-row no-gutters>
      <v-col
        cols="12"
        xl="4"
        lg="4"
        md="4"
        sm="6"
        xs="12"
      >
        <div class="rocket_info pa-1">
          <div class="rocket_info_bottom">
            <p class="title blue--text">基本信息</p>
            <div class="d-flex">
              <param-label
                title="起飞质量"
                param="859-879"
                unit="t"
              ></param-label>
              <param-label
                title="起飞推力"
                param="10524"
                unit="KN"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="高度"
                param="56.97"
                unit="m"
              ></param-label>
              <param-label
                title="直径"
                param="5"
                unit="m"
              ></param-label>
            </div>
          </div>
          <!-- 整流罩部分 -->
          <div class="rocket_info_bottom">
            <p class="title blue--text">整流罩</p>
            <p class="title">载荷质量</p>
            <div class="d-flex">
              <param-label
                title="To LEO"
                param="25"
                unit="t"
              ></param-label>
            </div>
            <p class="title">载荷空间</p>
            <div class="d-flex">
              <param-label
                title="直径"
                param="5.2"
                unit="m"
              ></param-label>
              <param-label
                title="长度"
                param="12.267"
                unit="m"
              ></param-label>
            </div>
            <p class="title">远征二号上面级</p>
            <!-- <p>
              四氧化二氮/偏二甲肼
            </p> -->
          </div>
          <!-- 芯二级 -->
          <div class="rocket_info_bottom">
            <p class="title blue--text">芯二级</p>
            <p class="title">两台"YF-75D"液氧/液氢发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                param="2"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                param="660"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="真空推力"
                param="17"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                param="434"
                unit="s"
              ></param-label>
            </div>
          </div>
          <!-- 芯一级 -->
          <div class="rocket_info_bottom">
            <p class="title blue--text">芯一级</p>
            <p class="title">两台"YF-77"液氧/液氢发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                param="2"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                param="480+"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="海平面推力"
                param="100"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                param="421"
                unit="s"
              ></param-label>
            </div>
          </div>
          <!-- 助推器 -->
          <div class="rocket_info_bottom">
            <p class="title blue--text">助推器</p>
            <p class="title">4台"YF-100"液氧/煤油发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                param="2"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                param="480+"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="海平面推力"
                param="100"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                param="421"
                unit="s"
              ></param-label>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        xl="5"
        lg="5"
        md="5"
        sm="6"
        xs="12"
      >
        <img
          src="../../assets/longmarch5.png"
          alt=""
          height="1200"
        >
      </v-col>
      <v-col
        cols="12"
        xl="3"
        lg="3"
        md="3"
        sm="12"
        xs="12"
      >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ParamLabel from "../../components/ParamLabel";

export default {
  name: "Rocket1",

  components: {
    ParamLabel
  },

  data: () => ({
    rocket: {
      id: '',
      name_cn: '',
      name_en: '',
      weight: '',
      thrust: '',//推力
      height: '',
      diameter: '', //直径
      details: '',//描述
      country: '',//国家
      //整流罩
      fairing: {
        weight: '',
        length: '',
        diameter: ''// 直径
      },
      // 芯二级
      third_stage: {
        engine: '',
        
      } 
    }
  })
};
</script>

<style lang="scss" scoped>
.rocket_main {
  color: #fff;
  text-align: center;
  padding-top: 1px;
  .rocket_info {
    text-align: left;
  }

  .data-block {
    display: flex;
    flex-direction: column;
    width: 45%;
    .data-block-l {
      border-bottom: 2px solid #4d95cd;
      padding-bottom: 10px;
      i {
        font-size: 2.2rem;
        line-height: 2.2rem;
        font-style: normal;
      }
    }
    .data-block-r {
      color: #b2b2b2;
    }
  }

  .rocket_info_bottom {
    margin-bottom: 2.6rem;
  }
}
</style>