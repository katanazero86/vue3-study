<template>
    <div style="border: 1px dotted aquamarine">
        <p>
            Vue3CompositionAPI component
        </p>
        {{count}} <br/>
        {{double}}
        <button @click="incrementCount">
            incrementCount
        </button>
    </div>
</template>

<script>

    // mixin 에서 충돌이 되는 옵션명이 해결.
    // mixin 에서 컴포넌트 상태값에 대한 종속성이 있으면 추론하기가 어렵고 상태에 대한 의존성으로 변경이 일어날수 있으나, 명시적으로 전달해야함.
    // mixin 도 훌륭한 재사용 방법 및 캡슐화 기능을 제공하나 병합이슈라던가 상태에 대한 의존성이 생기면 추론하기 어려워져 오히려 복잡해 지거나 유지보수 비용이 증가할 수 있음.
    import testReuse from "../reuse/testReuse";

    export default {
        name: "Vue3CompositionAPI",

        setup() {

            const {count, double, incrementCount} = testReuse();

            return {
                count,
                double,
                incrementCount,
            }

        },
    }
</script>

<style scoped>

</style>