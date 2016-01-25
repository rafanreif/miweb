'use strict';

describe('Controller: RedessocialesCtrl', function () {

  // load the controller's module
  beforeEach(module('miwebApp'));

  var RedessocialesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RedessocialesCtrl = $controller('RedessocialesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RedessocialesCtrl.awesomeThings.length).toBe(3);
  });
});
