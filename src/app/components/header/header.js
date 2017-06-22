function HeaderController() {
  this.brand = 'Angular Webpack';
  
  this.alert = () => {
    alert('Clicked Submit');
  }
}

const HeaderComponent = {
  template: require('./header.html'),
  controller: HeaderController,
  controllerAs: 'ctrl'
};

export default HeaderComponent;
