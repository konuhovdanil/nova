<template>
  <div class="header">
    <h4 class="header__title">
      Todo List
    </h4>
    <a class="btn-floating btn-small waves-effect waves-light white" @click="() => setTodoFormState(true)"><i class="material-icons grey-text">add</i></a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeaderComponent",
  methods: {
    ...mapMutations({
      setTodoFormState: 'todos/setTodoFormState'
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 15px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__title {
    margin: 0;
  }
}
</style>
