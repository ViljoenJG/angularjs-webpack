const HeaderDirective = () => {
  return {
    template: require('./header.html'),
    controller: 'HeaderController',
    controllerAs: 'ctrl'
  }
};

class HeaderController {
  constructor() {
  }

  alert() {
    alert('Yahoo')
  }
}

const header = {
  HeaderDirective,
  HeaderController
}

export default header;
