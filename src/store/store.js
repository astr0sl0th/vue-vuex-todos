import { v4 as uuidv4 } from 'uuid';

// initial state
const state = () => ({
    todos: [{
        id: 1,
        title: 'Buy some milks',
        completed: false
    }],
    newTodo: "",
    editedTodo: null,
    visibility: "all",
})

// getters
const getters = {
}


// actions
export const actions = {
    addTodo({ commit }) {
        commit('addTodo')
    },

    removeTodo({ commit }, todo) {
        commit('removeTodo', todo)
    },

    editTodo({ commit }, todo) {
        commit('editTodo', todo)
    },

    doneEdit({ commit }, todo) {
        commit('doneEdit', todo)
    },

    cancelEdit({ commit }, todo) {
        commit('cancelEdit', todo)
    },

    removeCompleted({ commit }) {
        commit('removeCompleted')
    },

    toggleCompleteAll({ commit }) {
        commit('toggleCompleteAll')
    },

    toggleDone({ commit }, todo) {
        commit('toggleDone', todo)
    },

    setNewTodo({ commit }, title) {
        commit('setNewTodo', title)
    },

    all({ commit }) {
        commit('all')
    },
    active({ commit }) {
        commit('active')
    },
    completed({ commit }) {
        commit('completed')
    }
};

// mutations
const mutations = {
    addTodo(state) {
        const title = state.newTodo && state.newTodo.trim();
        if (!title) {
            return;
        }
        state.todos.push({
            id: uuidv4(),
            title,
            completed: false
        });
        state.newTodo = "";
    },

    removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },

    editTodo(state, todo) {
        state.beforeEditCache = todo.title;
        state.editedTodo = todo;
    },

    doneEdit(state, todo) {
        if (!state.editedTodo) {
            return;
        }
        state.editedTodo = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
            state.removeTodo(todo);
        }
    },

    cancelEdit(state, todo) {
        state.editedTodo = null;
        todo.title = state.title
    },

    removeCompleted(state) {
        state.todos = state.todos.filter(todo => todo.completed === true);
    },

    toggleCompleteAll(state) {
        state.todos = state.todos.map(todo => ({ ...todo, completed: !todo.completed }))
    },

    toggleDone(state, { id }) {
        state.todos = state.todos.map(todo => {
            if (id === todo.id) {
                todo.completed = !todo.completed
            }
            return { ...todo }
        })

    },

    setNewTodo(state, title) {
        state.newTodo = title
    },

    all(state) {
        state.visibility = 'all'
        return state.todos
    },

    active(state) {
        state.visibility = 'active'
        return state.todos.filter((todo) => {
            return !todo.completed;
        });
    },

    completed(state) {
        state.visibility = 'completed'
        return state.todos.filter((todo) => {
            return todo.completed;
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}