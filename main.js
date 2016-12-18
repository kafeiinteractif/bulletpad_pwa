//
// Bulletpad app
//
//
// Loads local storage if present, saves incoming data as it comes in.
(function() {
  'use strict';

  const app = new Vue({
    el: '#app',
    data() {
      if (localStorage.getItem("lystical") === null) {
        return {
          newTodo: '',
          todos: [
            {text: 'to delete press the × beside the entry and then enter to confirm'},
            {text: 'to create a note type in the field at the top and press enter'}
        ]};
      }
      else {
        return {
          newTodo:'',
          todos: JSON.parse(localStorage.getItem("lystical"))
        };
      }
    },
    methods: {
      addTodo() {
        const input = this.newTodo.trim();
        if (input) {
          this.todos.push({ text: input });
          this.newTodo = '';
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
      removeTodo(index) {
        const item = this.todos.length - 1 - index;
        if (confirm(`Delete this?\n${this.todos[item].text}`) == true) {
          this.todos.splice(item, 1);
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
    },
    computed: {
      reversedTodos() {
        return this.todos.slice().reverse();
      }
    }
  });

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function() { console.log('Service Worker Registered'); });
  }

  // the JS has loaded. remove the spinner.
  document.querySelector('.woahLoader').setAttribute('hidden', true);
})();

