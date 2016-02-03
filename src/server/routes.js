var todosRoutes = require('server/todos/routes');

module.exports = function routes(app) {
    app.use('/todos', todosRoutes);
};