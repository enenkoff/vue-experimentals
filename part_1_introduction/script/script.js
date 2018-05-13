var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});

var section = new Vue({
    el: '.section',
    data: {
        message: 'Приве, я section'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Привет, Vue!'
    }
});