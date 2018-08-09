import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let produto = this.store.findAll('product');
        return produto;
    }
});
