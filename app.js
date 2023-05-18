const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        onAdd() {
            this.counter++;
        },
        onReduce() {
            this.counter--;
        }
    }

});

app.mount('#user-goal');