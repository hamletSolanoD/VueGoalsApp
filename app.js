const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            counter2: 10,
        };
    },
    computed: {
        getCounter() {
            console.log("counter");
            return "primer valor: " + this.counter;
        }

    },
    methods: {
        onAdd(num) {
            this.counter += num;
        },
        onReduce(num) {
            this.counter = this.counter > 0 ? this.counter - num : 0;
        },
        onReduceOtro(num) {
            this.counter2 -= num;
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
        setSelected(index) {
            this.goals[index].selected = !this.goals[index].selected;
            console.log(!this.goals[index].selected);

        },
        isColor(text) {
            const colorPattern = /^#([0-9A-F]{3}){1,2}$/i; // Hexadecimal color pattern
            const predefinedColors = [
                'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple',
                'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue',
                'teal', 'aqua'
            ];


            return colorPattern.test(text) || predefinedColors.includes(text.toLowerCase());;
        },
        getClass(index) {
            goal = this.goals[index];
            if (this.isColor(goal.name))
                return {
                    backgroundColor: goal.name,
                    borderColor: goal.name,
                }
            else if (goal.selected) return {
                active: true,
                inactive: false,
            }
            else {
                return {
                    active: false,
                    inactive: true,
                }

            }
        },
        addGoal() {
            this.goals.push({
                name: this.newGoal,
                selected: false,
            });
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
        addText() {
            this.textBox += this.userName + ":" + this.newText + "\n";
            this.reset();
        },
        reset() {
            this.newText = '';
            this.userName = '';
        }

    }

});

userChat.mount('#user-chat');
