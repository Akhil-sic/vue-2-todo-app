<template>
    <div class="container-list">
        <div class="day-header"> Today
            <i class="ri-calendar-todo-fill"></i>
        </div>

        <!-- Calender end -->

        <!-- Task lists section -->
        <div class="date-header" id="dateValue"></div>
        <div class="time-header" id="timeValue"></div>
        <div class="todo-list-items" id="taskLists">
            <TodoItem v-for="item in getAllTasks" :key="item.id" :Id="item.id" :Name="item.todoName" :Type="item.type"
                :Tag="item.tag" :Status="item.status" />
        </div>

        <button type="button" class="add-item" id="addNewListBtn">
            <i @click="$store.state.showAddTodoForm = true" class="ri-add-fill"></i>
        </button>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
import { mapGetters } from 'vuex';
export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        showForm: Boolean
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'getAllTasks',
        ])
    }
} 
</script>
<style scoped></style>