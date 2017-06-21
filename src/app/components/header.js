const HeaderDirective = () => {
  return {
    template: require('./header.html'),
    controller: 'HeaderController',
    controllerAs: 'ctrl'
  }
};

class HeaderController {
  constructor() {
    this.brand = 'Angular Webpack';
  }

  alert() {
    alert('Clicked Submit')
  }
}

const header = {
  HeaderDirective,
  HeaderController
}

export default header;
