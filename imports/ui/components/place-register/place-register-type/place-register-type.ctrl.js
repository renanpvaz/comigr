import assign from 'angular-assign';

class PlaceTypeSelectCtrl {
  constructor(placeTypes, $emit) {
    'ngInject';

    assign(arguments).to(this);

    this.types = placeTypes;
  }

  confirm() {
    this.$emit(this.onConfirm, { type: this.type });
  }

  goBack() {
    this.$emit(this.onBack, { type: null });
  }
}

export default PlaceTypeSelectCtrl;
