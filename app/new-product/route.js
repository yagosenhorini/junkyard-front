import Route from '@ember/routing/route';

export default Route.extend({
    model() {
      let produto =  this.get('store').createRecord('product',{
        name: null,
        price:null,
        weight: null
      });
      return produto;
    },
});
