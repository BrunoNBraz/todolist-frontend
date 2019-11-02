<template>
    <h1 v-if="todos.length < 0">todolist</h1>
    <ul v-else>
        <li v-for="todo in todos" v-bind:key="todo._id">{{todo.description}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            todos: []
        }
    },

    mounted(){
        this.$axios.$get('items')
        .then(() => {
            //this.todos = response
        })
        .catch((e) => {
            console.error(e)
        })
    }
}
</script>