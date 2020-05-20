<template>
    <div>
        <h1>
            {{reactiveStates.text}}
        </h1>
        <p style="font-size: 17px">
            count : {{reactiveStates.count}}
        </p>
        <div>
            <button style="margin: 4px; padding: 2px" @click="reactiveStates.count++">
                add count(reactive)
            </button>
            <button style="margin: 4px; padding: 2px" @click="countIncrease">
                add count(ref)
            </button>
        </div>
        <template v-for="(value, index) in reactiveStateArray">
            <p style="padding: 2px; margin: 0" :key="index">
                {{value}}
            </p>
        </template>
        <hr/>
        <template v-for="(value, index) in reactiveStateArray2">
            <p style="padding: 2px; margin: 0" :key="index + 100">
                {{value}}
            </p>
        </template>
        <div>
            -- readonly
            <p>
                original.count : {{original.count}}
            </p>
            <button @click="original.count++">add original count</button>
            <p>
                originalReadonly.count : {{originalReadonly.count}}<br>
                f12 를 눌러, 크롬 개발자 도구를 확인해보세요!
            </p>
        </div>
    </div>
</template>

<script>

    import {reactive, ref, readonly, watchEffect} from 'vue';

    const countRef = () => {
        const count = ref(0);

        const countIncrease = () => count.value++;

        return [count, countIncrease];
    };

    export default {
        name: "HelloWorld3",

        setup() {

            const [count, countIncrease] = countRef();

            // reactive state
            // 객체를 받고, 반응 프록시 객체를 반환(=== Vue.observable() )
            // 이 상태변화 감지는 deep 하게 동작
            const reactiveStates = reactive({
                text: 'hello world3!',
                count, // ref 객체를 reactive object 속성으로 사용이 가능하며, 자동으로 count.value 값을 참조(그래서, reactiveStates.count 로 참조 가능)
            });

            // reactive state -> array
            const reactiveStateArray = reactive([]);
            reactiveStateArray.push(0);
            reactiveStateArray.push(1);
            reactiveStateArray.push(2);

            // 만약 배열요소(컬렉션 요소)에 ref 객체가 있다면 unwrapping 되지 않음(자동으로 .value 참조가 되지 않음)
            const reactiveStateArray2 = reactive([ref('a'), ref('b')]);
            reactiveStateArray2.push('c');
            // console.log(reactiveStateArray2);


            // readonly
            const original = reactive({count: 0});
            // 읽기전용 프록시 원본 객체 반환(중첩된 참조도 전부 읽기전용)
            // 원본 reactive 객체에 값이 변경되면, 읽기전용 프록시 원본객체도 변경이 이루어짐.
            const originalReadonly = readonly(original);

            // 초기 1번 즉시 함수를 즉시실행하고, 종속된 상태값이 변경될 때 마다 다시 실행
            watchEffect(() => {
                // works for reactivity tracking
                console.log(originalReadonly.count);
            });

            // mutating the copy will fail and result in a warning
            originalReadonly.count++; // warning! -> Set operation on key "count" failed: target is readonly

            return {
                reactiveStates,
                countIncrease,
                reactiveStateArray,
                reactiveStateArray2,
                original,
                originalReadonly,
            }
        },
    }
</script>

<style scoped>

</style>
