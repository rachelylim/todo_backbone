// COLLECTION FOR TASKS IN A "LIST"
var app = app || {};
$(document).ready(function(){
  app.TaskList = Backbone.Collection.extend({
    model: app.Task,
    localStorage: new Store("tasks-backbone")
  })

// initialize global taskList so the views can access the collection
  taskList = new app.TaskList();
})