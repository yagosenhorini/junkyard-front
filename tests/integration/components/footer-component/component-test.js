import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer-component', function (hooks) {
  setupRenderingTest(hooks);

  test('Should render the footer', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{footer-component}}
    `);
    assert.equal(this.element.textContent.trim(), 'Copyright © 2018 - Todos os direitos reservados.', 'Text loaded');
    assert.equal(this.element.querySelectorAll('footer').length, 1, 'Footer tag loaded');
    assert.equal(this.element.querySelectorAll('span').length, 1, 'Span tag loaded');
    assert.equal(this.element.querySelectorAll('ul').length, 1, 'ul tag loaded');
    assert.equal(this.element.querySelectorAll('li').length, 3, 'li tag loaded');
  });

  test('Should render the footer', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{footer-component}}
    `);

    assert.equal(this.element.querySelectorAll('.footer').length, 1, 'Footer class loaded');
    assert.equal(this.element.querySelectorAll('.footer__copy').length, 1, 'Span class loaded');
    assert.equal(this.element.querySelectorAll('.footer__list').length, 1, 'ul class loaded');
    assert.equal(this.element.querySelectorAll('.footer__list--item').length, 3, 'li class loaded');
  });
});