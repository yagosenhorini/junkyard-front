import Component from '@ember/component';

export default Component.extend({
    actions:{
        save(){
          return this.get('save')();
        }
    }
});
