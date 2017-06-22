class HeaderController {
  constructor() {
    this.brand = 'Angular Webpack';
  }

  alert() {
    alert('Clicked Submit')
  }
}

const HeaderComponent = {
  template: require('./header.html'),
  controller: HeaderController,
  controllerAs: 'ctrl'
};

export default HeaderComponent;
