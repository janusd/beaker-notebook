module.exports = function() {
  return this.Widgets.ProjectDetail = this.Widget.extend({
    root: '.projects-root',

    edit: function() {
      return this.click('.edit-project');
    },

    name: function() {
      return this.read('.project-name');
    },

    description: function() {
      return this.read('.project-description');
    }
  });
};
