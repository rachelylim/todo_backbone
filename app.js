// MODEL //
var Task = Backbone.Model.extend({
  defaults: {
    description: '',
    done: false
  },
  toggle: {
    this.save({done: !this.get('done')});
  }
})

$(function() {

})