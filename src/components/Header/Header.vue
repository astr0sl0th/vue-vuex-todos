<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    newTodo: {
      // getter
      get() {
        return this.$store.state.todos.newTodo;
      },
      // setter
      set(newValue) {
        return this.$store.dispatch('todos/setNewTodo', newValue, {
          root: true,
        });
      },
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch('todos/addTodo', null, { root: true });
    },
  },
};
</script>
