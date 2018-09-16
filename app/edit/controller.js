import Controller from '@ember/controller';

export default Controller.extend({
    atualiza(product) {
        console.log(product)
        return product.save().then(() => {
            alert(`${product.name} atualizado`);
            this.transitionToRoute('product');
        }).catch(err=>{
            alert(`Erro ao atualizar ${product.name}`);
            console.log(err);
        });
    },
    actions: {
        updateForm(product){
            this.atualiza(product);
        }
    }
});
