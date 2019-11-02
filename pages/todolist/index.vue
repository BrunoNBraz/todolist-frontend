<template>
    <div>
        <nuxt-link to="/"> </nuxt-link>
        <bootcamp-input :itemsList='itemsList' @addItemList="addItemList"/>
        <bootcamp-list :itemsList='itemsList'/>
    </div>
</template>

<script src='./index.js'>

</script>