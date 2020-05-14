<template>
    <!-- 더 이상 root Element 로 감싸지 않아도 된다. -->
    <h1>{{ msg }}</h1>
    <h2>나는 헬로월드 2 이지렁</h2>
</template>

<script>
    export default {
        name: 'HelloWorld2',
        props: {
            msg: String
        }
    }
</script>
