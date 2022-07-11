<template>
  <div class="app">
    <todo-view/>
  </div>
</template>

<script>

import TodoView from "@/views/TodoView";
export default {
  name: 'App',
  components: {
    TodoView
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

.app {
  background: #e9e9e9;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
