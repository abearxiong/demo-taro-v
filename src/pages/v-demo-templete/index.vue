<template>
  <view class="demo-templete">
    <view>基本count</view>
    <view>{{ count }}</view>
    <view>{{ countMoney }}</view>
    <button @tap="add">添加</button>
    <view>扩展count</view>
    <view>{{ count2 }} </view>
    <button @tap="addCount2">添加</button>
    <view>store方面</view>
    <view>{{ storeCount }} </view>
    <button @tap="storeCountAdd">storeCountAdd</button>
    <button @tap="storeCountComit">storeCountComit</button>
  </view>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";
import { createStore } from "vuex";

const state = {
  count: 1,
};

const mutations = {
  ADD_NUMBER(state, _payload) {
    state.count++;
  },
};

const actions = {
  addNumber(context) {
    context.commit("ADD_NUMBER");
  },
};

const getters = {
  getCount(state) {
    return state.count;
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default defineComponent({
  setup(props, ctx) {
    console.log("props 组件使用", props, ctx);
    const count = ref(1);
    const countMoney = computed(() => {
      return count.value.toFixed(2) + "元";
    });
    const setCount = (v = 0) => {
      count.value = v;
    };
    const add = () => {
      setCount(++count.value);
    };
    const count2 = reactive({ count: 0 });
    const setCount2 = (v = 0) => {
      count2.count = v;
    };
    const addCount2 = () => {
      count2.count++;
    };
    const storeCount = computed(() => store.getters["getCount"]);
    const storeCountAdd = () => {
      store.dispatch("addNumber");
    };
    const storeCountComit = () => {
      store.commit("ADD_NUMBER");
    };
    return {
      count,
      setCount,
      add,
      countMoney,
      count2,
      setCount2,
      addCount2,
      storeCount,
      storeCountAdd,
      storeCountComit,
    };
  },
});
</script>
