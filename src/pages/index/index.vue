<template>
  <view class="index">
    页面
    <view>
      <view v-for="(item, index) in arr" :key="index">{{ item }}</view>
    </view>
    <ModalBlank> 2333 </ModalBlank>
  </view>
</template>

<script lang="ts">
import ModalBlank from "@/components/modal/ModalBlank.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Index",
  components: {
    ModalBlank,
  },
  setup() {
    const arr = Array.from({ length: 100 }, (_, index) => index + 1);
    console.log("arr", arr);
    return {
      arr,
    };
  },
});
</script>

<style></style>
