import Controller from '@ember/controller';

export default Controller.extend({
    atualiza(product) {
        console.log(product)
        return product.save().then(() => {
            this.transitionToRoute('product');
        });
    },
    actions: {
        updateForm(product){
            console.log(product)
            this.atualiza(product);
        }
    }
});
