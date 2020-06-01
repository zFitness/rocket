<template>
  <!-- App.vue 这个地方布局外面不能包裹 -->
  <v-app>
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->

    <v-app-bar
      app
      flat
      color="#313646"
      dark
    >
      <v-toolbar-title to="/">
        <v-icon>mdi-rocket</v-icon>
        航天器图鉴
      </v-toolbar-title>

      <!-- 中间的菜单 -->
      <v-layout class="hidden-sm-and-down ml-12">
        <v-btn
          v-for="(link, i) in menus"
          :key="i"
          :to="link.to"
          class="menu_btn"
          text
        >
          <i
            class="iconfont"
            :class="link.icon"
          ></i>
          {{ link.text }}
        </v-btn>

      </v-layout>
      <v-spacer></v-spacer>

      <v-menu offset-y >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            class="hidden-md-and-up"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>

        </template>

        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="item"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content class="addd">

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>

</template>

<script>
export default {
  name: "IndexLayout",
  data() {
    return {
      item: 0,
      items: [
        { text: "火箭", icon: "mdi-rocket", to: "/rockets" },
        { text: "发动机", icon: "mdi-account-multiple" },
        { text: "飞船", icon: "mdi-star" },
        { text: "友链", icon: "mdi-history" }
      ],
      menus: [
        {
          text: "火箭",
          to: "/rockets",
          icon: "iconhome"
        },
        {
          text: "发动机",
          to: "/blog",
          icon: "iconblog"
        },
        {
          text: "飞船",
          to: "/about",
          icon: "iconic_error_outline"
        },
        {
          text: "友链",
          to: "/friends",
          icon: "iconpengyou"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.addd {
  background-color: #152030;
}
</style>