<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ pageX }}</p>
    <p>{{ clientWidth }}</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
/**
 * @deprecated named import 命名导入失败？？？？
 * @example export function debounce() {}
 * import { debounce }
 */
import utils from '@/utils/index';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const pageX = ref(0);
    const clientWidth = ref(0);
    const getPageX = utils.debounce((e) => {
      pageX.value = e.pageX;
    }, 100);
    const getClientWidth = utils.throttle(() => {
      clientWidth.value = document.body.clientWidth;
    }, 1000);
    onMounted(() => {
      window.addEventListener('mousemove', getPageX);
      window.addEventListener('resize', getClientWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', getClientWidth);
      window.removeEventListener('mousemove', getPageX);
    });

    return {
      pageX,
      clientWidth,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
