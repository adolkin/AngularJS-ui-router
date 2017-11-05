angular.module('myApp').component('hello', {
  templateUrl:  'components/hello/hello.html',
             
  controller: function() {
    this.greeting = 'hello';
    
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})