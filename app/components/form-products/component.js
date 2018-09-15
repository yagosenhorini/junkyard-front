import Component from '@ember/component';

export default Component.extend({
    actions:{
        salvar(){
          return this.get('salvar')();
        }
    }
});
