<template>
  <div class="container">
    <div class="container-main" id="app">
      <!--<header>

      <div class="wrapper">
        <p>hosdghdo</p>
      </div>
    </header>-->
      <section>

        <!-- Calender section  -->
        <TodoList />

        <!-- Task list end  -->

      </section>
      <section>
        <AddTodo v-show="$store.state.showAddTodoForm" />
      </section>
    </div>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue"
var id = 0;
export default {
  name: "App",
  components: {
    TodoList,
    AddTodo
  },
  // data() {
  //   return {
  //     // id: 0,
  //     // todoName: '',
  //     // type: 'home',
  //     // tag: 'Low',
  //     // deadline: '',
  //     // status: 'pending',

  //     // Items: [
  //     //   { id: 1, todoName: 'cooking', type: 'home', tag: 'Low', deadline: Date.now(), status: false },
  //     //   { id: 2, todoName: 'cooking', type: 'home', tag: 'Low', deadline: Date.now(), status: true },
  //     //   { id: 3, todoName: 'cooking', type: 'home', tag: 'Low', deadline: Date.now(), status: false }
  //     // ]
  //   }
  // },
  methods: {
    // showAddTodo() {
    //   let addListContainer = document.querySelector(".add-list-container");
    //   addListContainer.style.display = "block";
    // }
  },
}
  // addItem() {
  //     console.log('add');
  //     // ...
  //     // const firstName = document.getElementById("firstName").value;
  //     // const lastName = document.getElementById("lastName").value;
  //     // const gender = document.getElementById("gender").value;
  //     let item = { id: ++id, todoName: this.todoName, type: this.type, tag: this.tag, deadline: this.deadline, status: 'pending' };

  //     console.log(item)
  //     this.Items.push(item)
  // },
</script>

<style scoped></style>
