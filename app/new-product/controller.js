import Controller from '@ember/controller';

export default Controller.extend({
    save(product) {
        console.log(product)
        return product.save().then(() => {
            this.transitionToRoute('product');
        });
    },
    actions: {
        createForm(product){
            console.log(product)
            this.save(product);
        }
    }
});
