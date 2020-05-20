<template>
    <div>
        {{number}}
        <button @click="increaseNumber">increase number</button>
        <br/>
        {{stringReactive.value}}
        <button @click="stringReactive.value === 'zero86' ? stringReactive.value = 'katana' : stringReactive.value = 'zero86'">change string</button>
    </div>
    <div style="border: 1px dotted skyblue">
        <p>watch value (number)</p>
        <p>afterValue : {{afterValue}}</p>
        <p>previousValue : {{previousValue}}</p>
    </div>
    <div style="border: 1px dotted #2c3e50">
        <p>watch value(string)</p>
        <p>afterValue : {{afterString}}</p>
        <p>previousValue : {{previousString}}</p>
    </div>
</template>

<script>

    import {ref, reactive, watch} from 'vue';

    const numberRef = () => {

        const number = ref(9999);

        const increaseNumber = () => {
          number.value++;
        };

        return [number, increaseNumber];
    };

    export default {
        name: "HelloWatch",

        setup() {

            const [number, increaseNumber] = numberRef();
            const afterValue = ref(0);
            const previousValue = ref(0);

            const stringReactive = reactive({value : 'zero86'});
            const afterString = ref('');
            const previousString = ref('');

            // watchEffect 랑 다른점은 콜백은 무조건 변경이 감지되어야 실행이됨.
            watch(number, (after, previous) => {
                console.log(`afterValue : ${after}`);
                console.log(`previousValue : ${previous}`);
                afterValue.value = after;
                previousValue.value = previous;
            });

            // 만약 reactive 객체를 받는다면, 변화는 감지되지만 참조타입이므로 이전값에 대한 정보를 얻을 수 없다.
            watch(() => stringReactive.value, (after, previous) => {
                console.log(`afterValue : ${after}`);
                console.log(`previousValue : ${previous}`);
                afterString.value = after;
                previousString.value = previous;
            });


            return {
                number,
                increaseNumber,
                afterValue,
                previousValue,
                stringReactive,
                afterString,
                previousString
            }

        }
    }
</script>

<style scoped>

</style>
