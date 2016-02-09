// MODEL //
var Task = Backbone.Model.extend({
  defaults: {
    description: '',
    done: false
  },
  toggle: {
    this.save({done: !this.get('done')});
  }
});

// COLLECTION //
var TaskList = Backbone.Collection.extend({
  model: Task,
  localStorage: new Store("tasks-backbone")
})

// VIEW //

$(function() {

})