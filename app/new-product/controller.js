import Controller from '@ember/controller';

export default Controller.extend({
    enviar(newProduct) {
        let novoProduto = newProduct;
        novoProduto.save().then(()=>{
            alert('Produto cadastrado');
        }).catch(()=>{
            console.log("error");
        });
    },
    actions:{
        submit(newProduct){
            this.enviar(newProduct);
        }
    }
});
