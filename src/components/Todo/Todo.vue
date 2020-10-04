<template>
  <li
    class="todo"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-bind:checked="todo.completed" @click="toggleDone(todo)" />
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input
      class="edit"
      type="text"
      v-bind:value="todo.title"
      v-todo-focus="todo == editedTodo"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"
    />
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean,
    },
  },
  computed: {
    editedTodo() {
      return this.$store.state.editedTodo;
    },
  },
  directives: {
    'todo-focus': function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
  methods: {
    removeTodo(todo) {
      return this.$store.dispatch('removeTodo', todo);
    },

    editTodo(todo) {
      return this.$store.dispatch('editTodo', todo);
    },
    doneEdit(todo) {
      return this.$store.dispatch('doneEdit', todo);
    },

    cancelEdit(todo) {
      return this.$store.dispatch('cancelEdit', todo);
    },

    toggleDone(todo) {
      return this.$store.dispatch('toggleDone', todo)
    }
  },
};
</script>
