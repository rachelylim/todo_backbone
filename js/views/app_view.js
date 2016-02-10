// VIEW FOR ENTIRE APP
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
        // create new task with new attributes, clear input
        var test = taskList.create(this.newTask());
        this.input.val('');
      }

    },
    addTask: function(todo){
      // add new tasks to top of list
      var view = new app.ListView({model: todo});
      $('#list').prepend(view.render().el);
    },
    addAllTasks: function(){
      // rerender tasks when list is updated
      this.$('#list').html('');
      taskList.each(this.addTask, this);
    },
    // piece together attributes of a new task
    newTask: function(){
      return {
        description: this.input.val().trim(),
        done: false
      }
    },
  });

  var appView = new app.AppView();
});