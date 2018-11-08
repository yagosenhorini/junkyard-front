import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | products-list', function (hooks) {
  setupRenderingTest(hooks);

  test('Should render the html tags', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{products-list}}
    `);

    assert.equal(this.element.querySelectorAll('section').length, 1, 'Section tag loaded');
    assert.equal(this.element.querySelectorAll('div').length, 3, 'Div tag loaded');

  });

  test('Should render the css classes', async function (assert) {
    await render(hbs`
      {{products-list}}
    `);

    assert.equal(this.element.querySelectorAll('.view__list').length, 1, 'view__list loaded');
    assert.equal(this.element.querySelectorAll('.list').length, 1, 'list loaded');
    assert.equal(this.element.querySelectorAll('.products').length, 1, 'products loaded');
    assert.equal(this.element.querySelectorAll('.products__title').length, 1, 'products title loaded');
    assert.equal(this.element.querySelectorAll('.products__list').length, 1, 'products list loaded');
  });
});
