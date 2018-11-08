import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-products', function (hooks) {
  setupRenderingTest(hooks);

  test('Should render the HTML tags', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{form-products}}
    `);

    assert.equal(this.element.textContent.replace(/[\r\n\s]s* /g, '').trim(), 'Nome do Produto:  Valor do produto:  Quantidade em Kg:  Salvar', 'Text loaded');
    assert.equal(this.element.querySelectorAll('form').length, 1, 'Form tag loaded');
    assert.equal(this.element.querySelectorAll('label').length, 3, 'Label tag loaded');
    assert.equal(this.element.querySelectorAll('input').length, 3, 'Input tag loaded');
    assert.equal(this.element.querySelectorAll('button').length, 1, 'Button tag loaded');

  });

  test('Should load only the css classes', async function (assert) {
    await render(hbs`
      {{form-products}}
    `);
    assert.equal(this.element.querySelectorAll('.form__entry').length, 3, 'input css loaded');
    assert.equal(this.element.querySelectorAll('.form__label').length, 3, 'label css loaded');
    assert.equal(this.element.querySelectorAll('.form').length, 1, 'form css loaded');
    assert.equal(this.element.querySelectorAll('.form__submit').length, 1, 'button css loaded');
  });
});
