import Vue from 'vue'

export const pluralize = (n) => n === 1 ? "item" : "items";
Vue.filter('pluralize', pluralize)
