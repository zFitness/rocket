<template>
  <p class="data-block">
    <span class="data-block-l">
      <i>{{ param }}</i>
      {{ unit }}
    </span>
    <span class="data-block-r">{{title}}</span>
  </p>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    param: {
      type: String
    },
    // 单位
    unit: {
      type: String
    }
  }
};
</script>


<style lang="scss" scoped>
.data-block {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 1rem;
  .data-block-l {
    border-bottom: 2px solid #4d95cd;
    padding-bottom: 10px;
    i {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-style: normal;
    }
  }
  .data-block-r {
    color: #b2b2b2;
  }
}
</style>