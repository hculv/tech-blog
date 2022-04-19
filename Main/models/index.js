const User = require('./User');
const Project = require('./Project');
const Comment = require('./comment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.belongsTo(Project, {
  foreignKey: 'projectID'
});

module.exports = { User, Comment, Project };
