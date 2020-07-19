<template>
  <div>
    defineAsyncComponent
    <ul>
      <li v-for="(item, index) in objectItem" :key="index">
        {{ item }}
      </li>
    </ul>
    <span>{{ provideMsg }}</span>
    <slot />
    <!-- 使用component引入没用 rfc 上为更新 -->
    <!-- <component src="./ComponentThree.vue" /> -->

    <div id="teleportDom">
      <component-three />
    </div>
    <!-- <component-three /> -->
  </div>
</template>

<script>
import MixinsOne from '@/mixins/MixinsOne.vue';
import ComponentThree from './ComponentThree.vue';

export default {
  mixins: [MixinsOne],
  components: {
    ComponentThree,
  },
  inject: {
    provideMsg: {
      form: 'provideMsg',
      default: 'self provide message!',
    },
  },
  data() {
    return {
      objectItem: {
        name: 'zhangsan',
        sex: 'boy',
        age: '13',
      },
    };
  },
  created() {
    console.log('ComponentTwo create!');
  },
};
</script>

<style>

</style>
