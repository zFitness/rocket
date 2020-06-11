<template>
  <div
    class="rocket_main"
    v-if="rocket!={}"
  >
    <!-- 标题和简介 -->
    <div class="mt-10 pa-2">
      <p
        class="display-3"
        v-text="rocket.nameCn"
      >长征5号</p>
      <p
        class="title"
        v-text="rocket.nameEn"
      >Long March 5</p>
      <div>
        <p v-text="rocket.details"></p>
      </div>
    </div>
    <!-- 参数 -->
    <v-row no-gutters>
      <!-- 左边参数 -->
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="6"
        xs="12"
      >
        <div class="rocket_info pa-1">
          <div class="rocket_info_bottom">
            <p class="title blue--text">基本信息</p>
            <div class="d-flex">
              <param-label
                title="起飞质量"
                :param="rocket.mass"
                unit="t"
              ></param-label>
              <param-label
                title="起飞推力"
                :param="rocket.thrust"
                unit="KN"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="高度"
                :param="rocket.height"
                unit="m"
              ></param-label>
              <param-label
                title="直径"
                :param="rocket.diameter"
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
                :param="rocket.fairing['mass']"
                unit="t"
              ></param-label>
            </div>
            <p class="title">载荷空间</p>
            <div class="d-flex">
              <param-label
                title="直径"
                :param="rocket.fairing.diameter"
                unit="m"
              ></param-label>
              <param-label
                title="长度"
                :param="rocket.fairing.length"
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
            <p
              class="title"
              v-text="rocket.secondStage.engine"
            >"YF-75D"液氧/液氢发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                :param="rocket.secondStage.num"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                :param="rocket.secondStage.burnTime"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="真空推力"
                :param="rocket.secondStage.thrust"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                :param="rocket.secondStage.specificImpulse"
                unit="s"
              ></param-label>
            </div>
          </div>
          <!-- 芯一级 -->
          <div class="rocket_info_bottom">
            <p class="title blue--text">芯一级</p>
            <p
              class="title"
              v-text="rocket.firstStage.engine"
            >两台"YF-77"液氧/液氢发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                :param="rocket.firstStage.num"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                :param="rocket.firstStage.burnTime"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="海平面推力"
                :param="rocket.firstStage.thrust"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                :param="rocket.firstStage.specificImpulse"
                unit="s"
              ></param-label>
            </div>
          </div>
          <!-- 助推器 -->
          <div
            class="rocket_info_bottom"
            v-if="rocket.booster!=null"
          >
            <p class="title blue--text">助推器</p>
            <p
              class="title"
              v-text="rocket.booster.engineNum + '台' + rocket.booster.engine"
            >2台"YF-100"液氧/煤油发动机</p>
            <div class="d-flex">
              <param-label
                title="发动机"
                :param="rocket.booster.num"
                unit="台"
              ></param-label>
              <param-label
                title="燃烧时间"
                :param="rocket.booster.burnTime"
                unit="s"
              ></param-label>
            </div>
            <div class="d-flex">
              <param-label
                title="海平面推力"
                :param="rocket.booster.thrust"
                unit="t"
              ></param-label>
              <param-label
                title="真空比冲"
                :param="rocket.booster.specificImpulse"
                unit="s"
              ></param-label>
            </div>
          </div>
        </div>
      </v-col>
      <!-- 右边大图 -->
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="6"
        xs="12"
      >
        <img
          src="../../assets/longmarch5.png"
          alt=""
          height="1200"
        >
      </v-col>

      <!-- 下边发射记录 -->
      <v-col cols="12">
        <past-launche-table></past-launche-table>
      </v-col>
      <!-- 图片壁纸 -->
      <v-col cols="12">
        <v-card color="transparent blue--text">
          <v-card-title>壁纸</v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
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
  </div>
</template>

<script>
import ParamLabel from "../../components/ParamLabel";
import PastLauncheTable from "../../components/PastLauncheTable";
import { apiGetRocketById } from "../../request/api";

export default {
  name: "Rocket",
  components: {
    ParamLabel,
    PastLauncheTable
  },

  data: () => ({
    rocket: {
      id: 1,
      nameCn: "长征五号",
      nameEn: "Long march 5",
      mass: -20.0,
      thrust: 10524.0,
      height: 56.97,
      diameter: 5.0,
      details:
        "长征五号系列由中国运载火箭技术研究院抓总研制，设计采用通用化、系列化、组合化思想。 系列由二级半构型的基本型长征五号运载火箭（CZ-5）、不加第二级的一级半构型长征五号B运载火箭（CZ-5B） 以及添加上面级的长征五号/远征二号运载火箭（CZ-5/YZ-2）组成，地球同步转移轨道和近地轨道运载能力将分别达到14吨级、25吨级 。 中国未来天宫空间站、北斗导航系统的建设，探月三期工程及其它深空探测的实施都将使用该火箭系列。china",
      country: "中国",
      fairing: {
        id: 1,
        mass: 25.0,
        length: 12.267,
        diameter: 5.2
      },
      firstStage: {
        id: 1,
        engine: 'YF-77"液氧/液氢发动机',
        num: 2,
        burnTime: 480,
        specificImpulse: 421,
        thrust: 10,
        tag: 1
      },
      secondStage: {
        id: 2,
        engine: 'YF-75D"液氧/液氢发动机',
        num: 2,
        burnTime: 480,
        specificImpulse: 434,
        thrust: 17,
        tag: 2
      },
      thirdStage: {
        id: 3,
        engine: '"YF-100"液氧/煤油发动机',
        num: 2,
        burnTime: 480,
        specificImpulse: 333,
        thrust: 100,
        tag: 0
      },
      coverImg:
        "https://imgsa.baidu.com/forum/w%3D580/sign=585a2abdae44ad342ebf878fe0a30c08/9ed0c9ea15ce36d31c400b6035f33a87e850b184.jpg",
      booster: {
        id: 1,
        engine: '"YF-100"液氧/煤油发动机',
        num: 4,
        burnTime: 480,
        thrust: 100,
        specificImpulse: 333,
        engineNum: 2
      }
    }
  }),

  mounted() {
    apiGetRocketById(this.$route.params.id).then(resp => {
      console.log(resp);
      this.rocket = resp.data;
    });
  }
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