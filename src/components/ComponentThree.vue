<template>
  <div >
    use teleport
    <teleport to="#teleportDom">
      <span id="content">
        it will mount some DOM
      </span>
    </teleport>
  </div>
  <!-- <div id="teleportDom"></div> -->
</template>

<script>
export default {
  created() {
    console.log('Mixins create');
  },
};
</script>

<style>

</style>
