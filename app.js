// MODEL //
var Task = Backbone.Model.extend({
  defaults: {
    description: '',
    done: false
  },
  toggle: function(){
    this.save({done: !this.get('done')});
  }
});

// COLLECTION //
var TaskList = Backbone.Collection.extend({
  model: Task,
  localStorage: new Store("tasks-backbone")
})

// VIEW //

var ListView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#task-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    this.model.on('change', this.render, this);
  },
});

var AppView = Backbone.View.extend({
  el: '.container',
  initialize: function(){
    this.input = this.$('#new-task');
  },
  events: {
    'keypress #new-task': 'createNewTaskOnEnter'
  },
  createNewTaskOnEnter: function(event){
    if(event.keyCode === 13) {
      TaskList.create(this.newTask());
      this.input.val('');
    }
  },
  addTask: function(todo){
    var view = new TaskView({model: todo});
    $('#list').append(view.render().el);
  },
  newTask: function(){
    return {
      description: this.input.val().trim(),
      done: false
    }
  }
});

$(document).ready(function(){
  // create instances of...//

  // collections
  var taskList = new TaskList();
  // views
  var appView = new AppView();
})
