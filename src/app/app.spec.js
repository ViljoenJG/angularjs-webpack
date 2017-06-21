import app from './app.module';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });

  describe('HeaderController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HeaderController', {});
      });
    });

    it('should display brand on header', () => {
      expect(ctrl.brand).toBe('Angular Webpack');
    });
  });
});
