import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product',{path: '/produtos'},function(){
  });
  this.route('edit', {path: '/produtos/:id/'});
  this.route('new-product', {path: '/inserir/'});
});

export default Router;
