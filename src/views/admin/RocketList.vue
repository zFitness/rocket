<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="id"
      show-select
      show-expand
      v-model="selected"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <div>
          <v-toolbar
            flat
            color="white"
          >
            <v-toolbar-title> 列表</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="搜索"
              single-line
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              dark
              class="mb-2 mr-1"
            >删除选中</v-btn>
            <v-btn
              color="primary"
              dark
              class="mb-2"
              to="/article/add"
            >新增</v-btn>
          </v-toolbar>
        </div>
        <div class="hidden-md-and-up">
          <v-toolbar
            flat
            color="white"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>

          </v-toolbar>
        </div>
      </template>
      <!-- 操作按钮 -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:expanded-item="{ headers, item }">

        <td
          :colspan="headers.length"
          class="pa-2"
        >
          <span>参加原因：</span>{{item.details}} <br>

        </td>
      </template>

    </v-data-table>
    <!-- 提示框 -->
    <v-dialog
      v-model="dialog"
      width="300"
    >
     

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          确认删除？？？
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="delete1"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 提示框2 -->
    <v-dialog
      v-model="dialog2"
      width="300"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          删除失败
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog2 = false"
          >
            确定
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { apiGetAll, apiDelete } from "../../request/api";
export default {
  data() {
    return {
      search: '',
      dialog: false,
      dialog2: false,
      current: 1,
      selected: [],
      size: 10,
      itemsPerPage: 10,
      headers: [
        {
          text: "name",
          align: "start",
          sortable: true,
          value: "nameCn"
        },
        { text: "国家", value: "country" },
        { text: "质量", value: "mass" },
        { text: "高度", value: "height" },
        { text: "直径", value: "diameter" },
        { text: "操作", value: "actions", sortable: false },
        { text: "", value: "data-table-expand" }
      ],
      desserts: []
    };
  },
  methods: {
    getAll() {
      apiGetAll().then(resp => {
        this.desserts = resp.data;
      });
    },
    delete1() {
      apiDelete(item.id).then(resp => {
        if (resp.data.code == 200) {
          location.href = "/admin/rockets";
        } else {
          this.dialog2 = true;
        }
      });
    },
    deleteItem(item) {
      console.log(item);
      apiDelete(item.id).then(resp => {
        if (resp.code == 200) {
          // this.$router.push('/admin/rockets')
          location.reload();
        } else {
          this.dialog2 = true;
        }
      });
    },
    editItem() {}
  },
  mounted() {
    this.getAll();
  }
};
</script>