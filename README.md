# vue3-study

## project npm script
```
- Project setup
npm install

- Compiles and hot-reloads for development
npm run serve

- Compiles and minifies for production
npm run build

- Lints and fixes files
npm run lint
```

## project setting history
```
npm i -g @vue/cli
vue -V
vue create <project-name>

생성된 vue 프로젝트 폴더로 이동
vue add 명령어를 이용하여 생성된 프로젝트에 플러그인 설치

vue add vue-next
https://github.com/vuejs/vue-cli-plugin-vue-next

플러그인 설치를 하면, package.json 파일 내용을 살펴보면 몇가지 라이브러리에 beta 라고 붙은것들이 존재합니다.
저는 일단 수동으로 alpha 로 변경하였습니다.

```

## 뭐가 달라졌을까?🧐
- src/main.js
```
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
``` 
> main.js 에서 Vue 생성자 함수를 사용하는게 아닌, createApp 함수를 사용하여 초기화 한다.

- src/components/HelloWorld2.vue
```
<template>
    <!-- 더 이상 root Element 로 감싸지 않아도 된다. -->
    <h1>{{ msg }}</h1>
    <h2>나는 헬로월드 2 이지렁</h2>
</template>
```
> 기존에는 template 에 root element 로 감싸야 했었으나, 이제는 필요가 없다. (Fragment)

- src/components/HelloWorld2.vue
```
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
            const helloMessage = 'hello composition API';

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
```
> composition API 를 통한 반응형 데이터 정의(ref)


- vue 2 기존
```
<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg : 'vue2',
            }
        }  
    }
</script>

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
