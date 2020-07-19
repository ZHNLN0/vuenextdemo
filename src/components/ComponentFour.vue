<template>
  <div>
    <span>{{ user }}</span>
    <span>{{ repositories }}</span>
    <ul>
      <li v-for="(item, index) in repositories" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  ref, onMounted, watch, toRefs,
} from 'vue';

function fetchUserRepositories(user) {
  return new Promise((resolve) => {
    if (user === 'zhangsan') {
      setTimeout(() => { resolve(['a', 'b', 'c']); }, 1000);
    } else {
      setTimeout(() => { resolve(['1', '2', '3']); }, 1000);
    }
  });
}

export default {
  props: {
    user: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { user } = toRefs(props);
    console.log(user);
    const repositories = ref([]);
    console.log(repositories);
    const getUserRepositories = async () => {
      repositories.value = await fetchUserRepositories(user.value);
      console.log(repositories.value);
    };

    watch(user, (currentUser, oldUser, onCleanup) => {
      getUserRepositories();
      onCleanup(() => {
        // 当观察数据源再次变换可取消还未完成的异步操作
        // token.cancel(); 这里要配合axios 可以使用防抖函数也行
      });
    });

    onMounted(() => {
      getUserRepositories();
    });
    return {
      repositories,
      getUserRepositories,
    };
  },
};
</script>

<style>

</style>
