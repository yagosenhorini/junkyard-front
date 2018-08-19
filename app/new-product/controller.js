import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        enviar() {
           return this.get('model').save().then(()=>{
                alert('Produto cadastrado');
                this.transitionToRoute('product');
            }).catch((err)=>{
                console.log(err);
            });
        },
    }
});
