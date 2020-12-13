<template>
  <viwe>
    <view>{{ count }}</view>
    <view>{{ countMoney }}</view>
    <button @tap="add">按钮</button>
  </viwe>
</template>

<script>
// vue2 基本操作
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    countMoney() {
      return this.count.toFixed(2) + "元";
    },
  },
  mounted() {
    console.log("初始化加载");
  },
  methods: {
    add() {
      this.count++;
    },
  },
  watch: {
    count(v, old) {
      console.log("new", v, old);
    },
  },
};
</script>
