var app = app || {};

$(document).ready(function(){
  app.Task = Backbone.Model.extend({
    defaults: {
      description: '',
      done: false
    },
    toggle: function(){
      this.save({done: !this.get('done')});
    }
  });
});