import './assets/style1.css'
import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
// import './assets/main.css'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showAddTodoForm: false,
    items: [
      { id: 1, todoName: 'cooking', type: 'home', tag: 'Low', status: false },
      { id: 2, todoName: 'cooking', type: 'home', tag: 'Low', status: true },
      { id: 3, todoName: 'cooking', type: 'home', tag: 'Low', status: false }
    ]
  },
  getters: {
    getAllTasks(state) {
      console.log('tasks');
      return state.items;
    }
  },
  mutations: {
    addTask(state, newTask) {
      newTask.id += state.items.length
      state.items.push(newTask)
      console.log('items', state.items)
    },
    updateTaskStatus(state, taskId) {
      let task = state.items.find((e => e.id === taskId));
      if (task) {
        task.status = !task.status;
      }
    },
    removeTask(state, id) {
      let index = state.items.findIndex((e => e.id === id))
      state.items.splice(index, 1)
    }
  }
});

new Vue({
  store: store,
  render: (h) => h(App),
  methods: {
    // showAddTodo() {
    //   let addListContainer = document.querySelector(".add-list-container");
    //   addListContainer.style.display = "block";
    // }
  }
}).$mount('#app')

// let addListContainer = document.querySelector(".add-list-container");
// addListContainer.style.display = "block";