var app = app || {};

$(document).ready(function(){
  app.AppView = Backbone.View.extend({
    el: '.container',
    initialize: function(){
      this.input = this.$('#new-task');
      taskList.on('add', this.addAllTasks, this);
      taskList.on('reset', this.addAllTasks, this)
      taskList.fetch();
    },
    events: {
      'keypress #new-task': 'createNewTaskOnEnter'
    },
    createNewTaskOnEnter: function(event){
      if(event.keyCode === 13) {
        var test = taskList.create(this.newTask());
        this.input.val('');
      }

    },
    addTask: function(todo){
      var view = new app.ListView({model: todo});
      $('#list').prepend(view.render().el);
    },
    addAllTasks: function(){
      this.$('#list').html('');
      taskList.each(this.addTask, this);
    },
    newTask: function(){
      return {
        description: this.input.val().trim(),
        done: false
      }
    },
  });

  var appView = new app.AppView();
});