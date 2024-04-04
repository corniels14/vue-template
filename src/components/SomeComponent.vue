<template>
  
    <h1>{{text}}</h1>
    
</template>

<script>
export default {
    created() {
        console.log('SomeComponent loaded')
    },
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {    
        return {
            
        };
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">

</style>