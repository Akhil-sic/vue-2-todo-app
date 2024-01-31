<template>
    <div class="list-item">
        <input :checked="Status" @change="updateTaskStatus(Id)" type="checkbox" name="selectItem" :id="'selectItem' + Id"
            class="selectItems">
        <div class="taskContent">
            <label :for="'selectItem' + Id" class="listDetails">
                <h4 :class="['todoName ', { 'completed-task': Status }]">{{ Name }}</h4>
                <p class="todoType">{{ Type }}</p>
                <div class="tag-div">
                    <span :class="'todoTag ' + tagClass(Tag)">{{ Tag }}</span>
                </div>
            </label>
        </div>
        <i @click="removeTask(Id)" class="ri-delete-bin-line"></i>
    </div>
</template>
<script>
export default {
    name: "TodoItem",
    props: {
        Id: Number,
        Name: String,
        Type: String,
        Tag: String,
        Status: Boolean
    },
    methods: {
        tagClass(tagVal) {
            const tagClass = { 'High': 'high', 'Low': 'low', 'Medium': 'medium' };
            return tagClass[tagVal]
        },
        updateTaskStatus(id) {
            this.$store.commit('updateTaskStatus', id)
        },
        removeTask(id) {
            this.$store.commit('removeTask', id)
        }
    }
}
</script>