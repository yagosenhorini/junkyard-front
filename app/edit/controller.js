import Controller from '@ember/controller';

export default Controller.extend({
    atualiza(evento) {
        return evento.save().then(() => {
            this.transitionToRoute('product');
        });
    },
    actions: {
        updateForm(evento){
            this.atualiza(evento);
        }
    }
});
