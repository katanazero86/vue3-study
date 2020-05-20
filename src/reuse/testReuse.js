import {ref, computed} from "vue";

const countRef = () => {
    const count = ref(0);

    function incrementCount() {
        count.value++;
    }

    return [count, incrementCount];
};

export default function () {
    const [count, incrementCount] = countRef();
    const double = computed(() => count.value * 2);
    return {
        count,
        double,
        incrementCount
    }
}