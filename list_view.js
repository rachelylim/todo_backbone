var app = app || {};

$(document).ready(function(){
  app.ListView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#task-template').html()),
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    initialize: function(){
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this)
    },
    events: {
      'click .toggle': 'doneTask',
      'click .delete': 'destroy'
    },
    doneTask: function(){
      this.model.toggle();
    },
    destroy: function(){
      this.model.destroy();
      console.log("item destroyed")
    }
  });
});