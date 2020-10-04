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
        return this.$store.state.newTodo;
      },
      // setter
      set(newValue) {
        return this.$store.dispatch('setNewTodo', newValue, {
          root: true,
        });
      },
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', null, { root: true });
    },
  },
};
</script>
