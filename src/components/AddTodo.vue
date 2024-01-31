<template>
    <div class="add-list-container">
        <div class="close-icon" id="closeIcon">
            <i @click="$store.state.showAddTodoForm = false" class="ri-close-line"></i>
        </div>

        <!-- todo input field -->
        <div class="text-input">
            <label for="todo">To-do</label>
            <input v-model="todoName" type="text" id="inputText" placeholder="" required />
        </div>

        <!-- Projects DropDown List -->
        <div class="projects">
            <h4>Projects</h4>
            <div class="project-dropdown-list">
                <select v-model.lazy="type" id="projectList" required>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                </select>
            </div>
        </div>

        <!-- Add Tag  Field  -->
        <div class="tag-input">
            <h4>Tags</h4>
            <div class="add-icons">
                <!-- <div class="tagItems"> -->
                <input v-model="tag" type="radio" id="lowTag" name="tagName" value="Low">
                <label for="lowTag">Low</label>
                <input v-model="tag" type="radio" id="medTag" name="tagName" value="Medium">
                <label for="medTag">Medium</label>
                <input v-model="tag" type="radio" id="highTag" name="tagName" value="High">
                <label for="highTag">High</label>
                <!-- </div> -->
            </div>
        </div>

        <!-- Time input Field -->
        <!--<div class="date-input-container">
            <h4>Deadline</h4>
            <div class="date-input">
                <input type="date" name="deadline" id="deadline" required />
            </div>
        </div>-->

        <!-- Submit Button -->
        <div class="submitBtn">
            <button @click="addItem" class="new-task-btn" id="addBtn">Done</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "AddTodo",
    data() {
        return {
            todoName: '',
            type: 'home',
            tag: 'Low',
            status: false
        }
    },
    methods: {
        addItem() {
            let item = { todoName: this.todoName, type: this.type, tag: this.tag, status: this.status };
            this.todoName = ''
            this.type = 'home'
            this.tag = 'Low'
            this.status = false
            console.log(item)
            this.$store.commit('addTask', item)
        },
    }
}
</script>