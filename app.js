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
  template: _.template($('task-template').html()),
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

  },
  events: {
    'keypress #new-task': 'createNewTaskOnEnter'
  },
  createNewTaskOnEnter: function(event){
    if(event.keyCode === 13) {
      // create a new task in the collection
    }
    }

  }
})
