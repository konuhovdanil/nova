<template>
  <div class="todo-form" @click="() => setTodoFormState(false)">
    <div class="todo-form__content" @click.stop>
      <div class="row">
        <form class="col s12 todo-form__form" ref="todoForm">
          <div class="row">
            <div class="input-field col s12">
              <textarea v-model="description" id="todo-description" class="materialize-textarea"></textarea>
              <label for="todo-description" :class="{ 'active': editMode }">Description</label>
            </div>

            <div class="input-field col s12">
              <input ref="formDatepicker" type="text" id="todo-lead-time" class="datepicker">
              <label for="todo-lead-time" :class="{ 'active': editMode }">Lead time</label>
            </div>

            <div class="input-field col s12">
              <div class="chips todo-form__chips" ref="chipsField"></div>
            </div>
          </div>
          <a class="btn waves-effect waves-light black-text white" @click="saveData">
            Submit
            <i class="material-icons right grey-text">send</i>
          </a>
          <p v-if="errorText" class="flow-text red-text">{{ errorText }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {Datepicker, Chips} from 'materialize-css/dist/js/materialize'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "TodoForm",
  mounted() {
    this.editMode = this.getTodoToEdit !== null

    const defaultDate = this.editMode ? new Date(this.getTodoToEdit?.leadTime.split('-').reverse()) : new Date()
    const defaultChips = this.editMode ? this.getTodoToEdit?.tags : []

    Datepicker.init(this.$refs.formDatepicker, {
      autoClose: true,
      format: 'd-mm-yyyy',
      defaultDate,
      setDefaultDate: defaultDate
    })

    Chips.init(this.$refs.chipsField, {
      placeholder: 'Tags',
      data: defaultChips
    })

    if (this.editMode) {
      this.description = this.getTodoToEdit?.description
    }
  },
  data() {
    return {
      description: '',
      errorText: '',
      editMode: false
    }
  },
  computed: {
    ...mapGetters({
      getTodoToEdit: 'todos/getTodoToEdit'
    })
  },
  methods: {
    ...mapMutations({
      addTodo: 'todos/addTodo',
      editTodo: 'todos/editTodo',
      setTodoFormState: 'todos/setTodoFormState'
    }),
    saveData() {
      const chips = Chips.getInstance(this.$refs.chipsField)
      const datepicker = Datepicker.getInstance(this.$refs.formDatepicker)

      const todoId = this.editMode ? this.getTodoToEdit?.id : Date.now()

      const todo = {
        id: todoId,
        description: this.description,
        leadTime: datepicker.toString(),
        tags: chips.chipsData
      }

      if (todo.description === '' || todo.leadTime === '' || !todo.tags.length) {
        this.errorText = 'Fill in all the fields'
        return
      }

      this.errorText = ''
      if (this.editMode) {
        this.editTodo(todo)
        return
      }

      this.addTodo(todo)
    }
  }
}
</script>

<style scoped lang="scss">
.todo-form {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  &__content {
    max-width: 683px;
    min-height: 240px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 25px 50px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
