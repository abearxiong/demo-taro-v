<template>
  <view
    class="modal-blank-wrapper"
    v-if="visible"
    @tap="preventTouchMove"
    :catchtouchmove="preventTouchMove"
    :onTouchMove="preventTouchMove"
    catch-move
  >
    <slot />
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: () => true,
    },
  },
  setup() {
    const preventTouchMove = (e) => {
      // 滚动设置后还是失效，折中方案，添加一层滚动层
      // 0.1的可以识别， 0.01失败
      if (e) {
        e.stopPropagation();
        e.preventDefault();
        console.log("move", e);
      }
    };
    return {
      preventTouchMove,
    };
  },
});
</script>
<style lang="scss">
.modal-blank-wrapper {
  position: fixed;
  z-index: 999;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
</style>
