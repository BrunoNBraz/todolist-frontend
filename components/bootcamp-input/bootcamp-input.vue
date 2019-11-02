<template>
    <div>
        <form id="todolistbootcamp" @submit.prevent="addItemList">
            <label for="input">What will you do</label>
            <input id="input" 
            :placeholder="getMessagePlaceHolder"
             type="text" 
             v-model="valueInput" 
             autocomplete="off" 
             :disabled="state == 'warning'"/>
            <button>X</button>
        </form>
    </div>
</template>

<script src="./bootcamp-input.js">
</script>