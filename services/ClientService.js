ClientService = function(connection) {
  this.connection = connection;
};

ClientService.prototype.getAll = function(callback) {
  var self = this,
    result = {};
  this.connection
    .sql("SELECT * FROM [Claimtrakv0905_cwatson].[dbo].[FormList]")
    .execute()
    .then(function(results) {
      callback(null, results);
    })
    .fail(function(err) {
      callback(err, null);
    });
};

module.exports = function(tp) {
  return new ClientService(tp);
};
