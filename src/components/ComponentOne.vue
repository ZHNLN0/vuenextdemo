<template>
  <div>
    <button @click="increment">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script>
// import { computed, reactive } from 'vue'

export default {
  // setup() {
  //   const state = reactive({
  //     count: 0,
  //     double: computed(() => state.count * 2 )
  //   })
  //   function increment() {
  //     state.count++
  //   }
  //   return {
  //     state,
  //     increment
  //   }
  // }
  name: 'ComponentOne',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  inject: ['provideMsg'],
  methods: {
    increment() {
      const result = this.count + 1;
      console.log(result);
      this.$emit('update:count', result);
    },
  },
};
</script>

<style>

</style>
