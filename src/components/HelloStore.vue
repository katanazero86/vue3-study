<template>
    <div style="border: 1px dotted cornflowerblue; padding: 6px">
        <input type="number" min="0" v-model="tNumber1"/>
        <input type="number" min="0" v-model="tNumber2">
        <button @click="addNumber(tNumber1, tNumber2)">
            더하기
        </button>
        <div>
            <span style="color: #2c3e50; font-weight: 600">결과 : {{resultNumberComputed}}</span> <br/>
            rootState 테스트용 : {{rootTestComputed}} <br/>
            <p>rootName 테스트용 : {{rootName}}</p>
            <p>rootName 테스트용2 : {{store.state.rootName}}</p>
            <p>mapRootStateValue : {{mapRootStateValue}}</p>
            <button @click="store.state.rootName = 'zero86'">
                rootName 테스트용 값 변경
            </button>
        </div>
    </div>
</template>

<script>

    import {ref, computed} from 'vue';
    import {useStore} from 'vuex';

    // const store = useStore(); // 이런식으로 사용하면 store 에 undefined 가 정의되어 있어서 사용불가

    const targetNumber1 = () => {
        const targetNumber1 = ref(0);
        return [targetNumber1];
    };

    const targetNumber2 = () => {
        const targetNumber2 = ref(0);
        return [targetNumber2];
    };

    export default {
        name: "HelloStore",

        setup() {
            // 기존 this.$store 에서 변경이 되었다.
            const store = useStore(); // 스토어 호출

            const [tNumber1] = targetNumber1();
            const [tNumber2] = targetNumber2();

            const mapRootStateValue = computed(() => {
                return store.state.mapRootStateValue;
            });

            const resultNumberComputed = computed(() => {
                return store.getters[`calculator/resultNumber`];
            });

            const rootTestComputed = computed(() => {
                return store.getters[`calculator/rootState`];
            });

            const addNumber = (tNumber1, tNumber2) => {
                console.log(store);
                const resultNumber = tNumber1 + tNumber2;
                store.dispatch(`calculator/resultNumberAction`, {resultNumber});
            };

            return {
                tNumber1,
                tNumber2,
                addNumber,
                resultNumberComputed,
                rootTestComputed,
                rootName : store.state.rootName, // not reactive
                store,
                mapRootStateValue
            }

        }

    }
</script>

<style scoped>

</style>
