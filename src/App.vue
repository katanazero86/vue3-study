<template>
  <div id="app">
    <div :ref="el => divElement = el">
      isRef : {{isRefResult}} <br>
      isReactive : {{isReactiveResult}}
      <button @click="changeElementStyle(divElement)">
        element style 주기(ref 조작)
      </button>
    </div>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HelloWorld2 msg="나는 헬로월드2 컴포넌트야!"/>
    <HelloWorld3/>
    <HelloWatch/>
    <HelloLifeCycle/>
    <Vue2OptionsAPI/>
    <Vue3CompositionAPI/>
    <hr/>
    <HelloStore/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";
import HelloWatch from "./components/HelloWatch";
import HelloLifeCycle from "./components/HelloLifeCycle";

import { ref, reactive, isRef, isReactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured } from 'vue'
import Vue2OptionsAPI from "./components/Vue2OptionsAPI";
import Vue3CompositionAPI from "./components/Vue3CompositionAPI";
import HelloStore from "./components/HelloStore";

const changeElementStyle = (targetElement) => {
  targetElement.style = 'border : 1px dotted black';
};

export default {
  name: 'App',
  components: {
    HelloStore,
    Vue3CompositionAPI,
    Vue2OptionsAPI,
    HelloLifeCycle,
    HelloWatch,
    HelloWorld3,
    HelloWorld2,
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  },

  // life cycle
  setup() {

    const testRef = ref('test');

    // eslint-disable-next-line no-unused-vars
    const testReactive = reactive({text : 'test'});
    const isRefResult = isRef(testRef); // check __v_isRef
    const isReactiveResult = isReactive(testRef); // check __v_reactive
    const divElement = ref(null);

    console.log(`setup()`);

    onBeforeMount(() => {
      console.log(`onBeforeMount()`);
    });

    onMounted(() => {
      console.log(`onMounted()`);
    });

    onBeforeUpdate(() => {
      console.log(`onBeforeUpdate()`);
    });

    onUpdated(() => {
      console.log(`onUpdated()`);
    });

    onBeforeUnmount(() => {
      console.log(`onBeforeUnmount()`);
    });

    onUnmounted(() => {
      console.log(`onUnmounted()`);
    });

    onErrorCaptured(() => {
      console.log(`onErrorCaptured()`);
    });


    return {
      isRefResult,
      isReactiveResult,
      divElement,
      changeElementStyle
    }

  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
