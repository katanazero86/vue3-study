<template>
    <div>

    </div>
</template>

<script>
    import {
        onBeforeMount,
        onBeforeUnmount,
        onBeforeUpdate,
        onErrorCaptured,
        onMounted,
        onUnmounted,
        onUpdated
    } from "vue";

    export default {
        name: "HelloLifeCycle",

        setup() {
            console.log(`HelloLifeCycle setup()`);

            onBeforeMount(() => {
                console.log(`HelloLifeCycle onBeforeMount()`);
            });

            onMounted(() => {
                console.log(`HelloLifeCycle onMounted()`);
            });

            onBeforeUpdate(() => {
                console.log(`HelloLifeCycle onBeforeUpdate()`);
            });

            onUpdated(() => {
                console.log(`HelloLifeCycle onUpdated()`);
            });

            onBeforeUnmount(() => {
                console.log(`HelloLifeCycle onBeforeUnmount()`);
            });

            onUnmounted(() => {
                console.log(`HelloLifeCycle onUnmounted()`);
            });

            onErrorCaptured(() => {
                console.log(`HelloLifeCycle onErrorCaptured()`);
            });
        },

    }
</script>

<style scoped>

</style>
