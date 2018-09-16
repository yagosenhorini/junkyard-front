import Controller from '@ember/controller';

export default Controller.extend({
    save(product) {
        return product.save().then(() => {
            alert(`${product.name} criado com sucesso`);
            this.transitionToRoute('product');
        }).catch(err=>{
            alert(`Erro ao cadastrar ${product.name}`);
            console.log(err);
        });
    },
    actions: {
        createForm(product){
            this.save(product);
        }
    }
});
