import Controller from '@ember/controller';

export default Controller.extend({
    atualiza(product) {
        return product.save().then(() => {
            alert(`Produto ${product.name} alterado!`);
            this.transitionToRoute('product');
        });
    },
    actions: {
        updateForm(product){
            this.atualiza(product);
        }
    }
});
