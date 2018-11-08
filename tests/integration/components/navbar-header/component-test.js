import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navbar-header', function(hooks) {
  setupRenderingTest(hooks);

  test('Should load the navbar', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{navbar-header}}
    `);

    assert.equal(this.element.textContent.replace(/[\r\n\s]s* /g,'').trim(), 'Início Adicionar Item', 'Text loaded');
    assert.equal(this.element.querySelectorAll('header').length, 1, 'Header loaded');
    assert.equal(this.element.querySelectorAll('nav').length, 1, 'Nav loaded');
    assert.equal(this.element.querySelectorAll('ul').length, 1, 'Ul loaded');
    assert.equal(this.element.querySelectorAll('li').length, 2, 'Li loaded');
  });

  test('Should load the css classes', async function(assert){

    await render(hbs`{{navbar-header}}`);
    
    assert.equal(this.element.querySelectorAll('.navbar').length, 1, 'navbar class loaded');
    assert.equal(this.element.querySelectorAll('.navbar__menu').length, 1, 'nav class loaded');
    assert.equal(this.element.querySelectorAll('.navbar__list').length, 1, 'Ul class loaded');
    assert.equal(this.element.querySelectorAll('.navbar__list--item').length, 1, 'Class loaded');
    assert.equal(this.element.querySelectorAll('.navbar__list--index').length, 1, 'Index item class loaded');

  });
});
