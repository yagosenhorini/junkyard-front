import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
      let produto = this.get('store').createRecord('product', {
            id: params.id,
            title: null,
            price: null,
            instock: null
        });
        return produto;
    }
});
