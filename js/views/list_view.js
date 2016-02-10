var app = app || {};

$(document).ready(function(){
  app.ListView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#task-template').html()),
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      this.input = this.$('.edit');
      return this;
    },
    initialize: function(){
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this)
    },
    events: {
      'click .toggle': 'doneTask',
      'click .delete': 'destroy',
      'dblclick label': 'edit',
      'keypress .edit': 'enterSave',
      'blur .edit': 'save'
    },
    edit: function(){
      this.$el.addClass('editing');
      this.input.focus();
    },
    save: function(){
      var update = this.input.val().trim();
      if(update){
        this.model.save({description: update});
      }
      this.$el.removeClass('editing');
    },
    enterSave: function(event){
      if(event.which === 13){
        this.save();
      }
    },
    doneTask: function(){
      this.model.toggle();
    },
    destroy: function(){
      this.model.destroy();
    }
  });
});