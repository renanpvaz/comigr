import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope, $location) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.steps = [
      { hash: 'mapa', text: 'Seleção de local' },
      { hash: 'tipo', text: 'Seleção do tipo' },
      { hash: 'informacoes', text: 'Informações' }
    ];
    this.breadcrumbs = [this.steps[0]];
  }

  handleRegisterConfirmation() {

  }

  handleCrumbClick({ index }) {
    this.step = index;
  }

  handleConfirmStep($event) {
    this.step++;
    console.log($event);
    Object.assign(this.place, $event);

    this.breadcrumbs = [
      ...this.breadcrumbs,
      this.steps[this.step]
    ];
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
    this.breadcrumbs.pop();
  }
}

export default PlaceRegisterCtrl;
