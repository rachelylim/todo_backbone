var app = app || {};
$(document).ready(function(){
  app.TaskList = Backbone.Collection.extend({
    model: app.Task,
    localStorage: new Store("tasks-backbone")
  })

  taskList = new app.TaskList();
})