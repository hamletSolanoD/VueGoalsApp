const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        onAdd(num) {
            this.counter += num;
        },
        onReduce(num) {
            this.counter = this.counter > 0 ? this.counter - num : 0;
        }
    }

});

app.mount('#user-counter');

const app2 = Vue.createApp({
    data() {
        return {
            goals: [],
            newGoal: "",
        };
    },
    methods: {
        getGoal(event) {
            this.newGoal = event.target.value;
        },
        addGoal() {
            this.goals.push("<p>" + this.newGoal + "</p>");
        }

    }

});

app2.mount('#user-goal');

const userChat = Vue.createApp({
    data() {
        return {
            newText: "",
            textBox: '',
            userName: '',


        };
    },
    methods: {
        getText(event) {
            this.newText = event.target.value;
        },
        setUserName(event) {
            this.userName = event.target.value;
        },
        addText() {
            this.textBox += this.userName + ":" + this.newText + "\n";
        }

    }

});

userChat.mount('#user-chat');