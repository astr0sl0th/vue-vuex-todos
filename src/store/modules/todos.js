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
    all: state => {
        state.visibility = 'all'
        return state.todos
    },
    active: state => {
        state.visibility = 'active'
        return state.todos.filter((todo) => {
            return !todo.completed;
        });
    },
    completed: state => {
        state.visibility = 'completed'
        return state.todos.filter((todo) => {
            return todo.completed;
        });
    }
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

    markComplete({ commit }, { id }) {
        commit('markComplete', id)
    },

    setNewTodo({ commit }, title) {
        commit('setNewTodo', title)
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

    markComplete(state, { id }) {
        state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = true
            }

        })

    },

    setNewTodo(state, title) {
        state.newTodo = title
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}