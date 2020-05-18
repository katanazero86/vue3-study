<template>
    <!-- 더 이상 root Element 로 감싸지 않아도 된다. -->
    <h1>{{ msg }}</h1>
    <h2>나는 헬로월드 2 이지렁</h2>
    <h3>{{helloMessage}}</h3>
    <hr/>
    <div>
        {{ testMessage }}
        <button @click="changeTestMessage('change!!')"> testMessageChange </button>
    </div>
    <div>
        {{ testMessage2.msg }}
        <button @click="changeTestMessage2('변경이 되었습니다!!')"> testMessageChange2 </button>
    </div>
</template>

<script>

    import { ref } from 'vue'

    const changeTestMessageRef = () => {
        // ref 객체에는 value 속성을 가지고 있음.
        // Takes an inner value and returns a reactive and mutable ref object. => 반응하고 변경가능한 ref 객체를 반환
        // 내부값은 .value 속성을 의미한다.
        const testMessage = ref('이히히히힝!');

        const changeTestMessage = (targetValue) => {
            testMessage.value = targetValue;
        };

        return [testMessage, changeTestMessage];
    };

    const changeTestMessageRef2 = () => {
        // ref 는 원시타입 및 객체에 해당하는 내부값을 가지는 ref 객체 생성 가능
        const testMessage2 = ref({msg : '아햏햏햏햏!'});

        const changeTestMessage2 = (targetValue) => {
            testMessage2.value.msg = targetValue;
        };

        return [testMessage2, changeTestMessage2];
    };

    export default {
        name: 'HelloWorld2',
        props: {
            msg: String
        },

        // The setup function is a new component option
        // Composition API 를 사용하기 위한 진입점 역할(컴포넌트 내에서)
        setup() {

            const [testMessage, changeTestMessage] = changeTestMessageRef();
            const [testMessage2, changeTestMessage2] = changeTestMessageRef2();
            let helloMessage = 'hello composition API';

            setTimeout(() => {
                helloMessage = 'setTimeout change;';
                console.log('setTimeout call..');
            }, 1000); // 1초후에 helloMessage 값을 변경

            // expose to template
            return {
                testMessage, // .value 할 필요가 없다, 자동으로 참조
                changeTestMessage,
                testMessage2,
                changeTestMessage2,
                helloMessage, // 값 변경 시 DOM 에 반영되지는 않는다(not reactive)
            }
        },
    }
</script>
