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
> main.js 에서 Vue 를 사용하는게 아닌, createApp 함수를 사용하여 초기화 한다.

- src/components/HelloWorld2.vue
```
<template>
    <!-- 더 이상 root Element 로 감싸지 않아도 된다. -->
    <h1>{{ msg }}</h1>
    <h2>나는 헬로월드 2 이지렁</h2>
</template>
```
> 기존에는 template 에 root element 로 감싸야 했었으나, 이제는 필요가 없다. (Fragment)   

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
