angular.module('SPA').uiObject('uiMe', [

/**
 * Module Dependencies
 */

         'Cloud',
function( Cloud  ) {

  return {

    /**
     * Fetch new data from the server.
     *
     * @return {Promise}
     */
    fetch: function (){
      var self = this;

      return Cloud.getMyProfile()
      .then(function whenServerResponds(data) {
        self.replace(data);
      });

    }
  };
}]);

