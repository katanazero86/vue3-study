<template>
    <div style="border: 1px dotted aquamarine; margin: 4px">
        <p>
            Vue2OptionsAPI component
        </p>
        {{nameComputed}}
        <button @click="changeName">
            name change
        </button>
        <button @click="callAlert">
            callAlert in mixin
        </button>
    </div>
</template>

<script>
    import testMixin from "../mixins/testMixin";

    export default {
        name: "Vue2OptionsAPI",
        mixins : [testMixin],

        watch : {
            name(afterValue, previousValue) {
                this.callChange(afterValue, previousValue);
            }
        },

        computed : {
            nameComputed() {
              return this.name;
            },
        },

        // 화살표 함수를 사용하면 안된다.(this 바인딩 이슈)
        data() {
            return {
                name : 'zero86'
            }
        },

        methods : {
            changeName() {
              this.name = `${this.name === 'zero86' ? 'changeName' : 'zero86'}`
            },

            callChange(afterValue, previousValue) {
              alert(`${previousValue} => ${afterValue} change name state`);
            },
        },

        // life cycle

        beforeCreate() {

        },

        created() {

        },

        beforeMount() {

        },

        mounted() {

        },

        beforeUpdate() {
            console.log(`Vue2OptionsAPI component beforeUpdate`);
        },

        updated() {
            console.log(`Vue2OptionsAPI component updated`);
        },

        beforeDestroy() {

        },

        destroyed() {

        }
    }
</script>

<style scoped>

</style>