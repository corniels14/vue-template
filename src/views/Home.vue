<template>

    <div>
        <i class="mdi mdi-account"></i>
        <SomeComponent :text="header"></SomeComponent> 
    </div>

</template>

<script>
import SomeComponent from '../components/SomeComponent.vue';

export default {
    components: {
        SomeComponent
    },
    created() {
        console.log('Home loaded')
    },
    data() {
        return {
            header: `${this.$t('welcome')}!`
        };
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>