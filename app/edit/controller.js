import Controller from '@ember/controller';

export default Controller.extend({
    atualiza(evento) {
        console.log(evento)
        return evento.save().then(() => {
            this.transitionToRoute('product');
        });
    },
    actions: {
        updateForm(evento){
            console.log(evento)
            this.atualiza(evento);
        }
    }
});
