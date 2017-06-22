import { app } from './app.module';

describe('app', () => {

  describe('HomeCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeCtrl', {});
      });
    });

    it('Should have text property', () => {
      expect(ctrl.text).toBe('This is the home view');
    });
  });
});
