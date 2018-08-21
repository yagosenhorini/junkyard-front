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
      {{#products-list}}
      <section class="view__list">
      <div class="products">
          <h2 class="products__title">Valor em R$</h2>
          <div class="list">
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--item">{{produtos.name}}</li>
          {{/each}}
          </ul>
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--price">R$ {{produtos.price}}</li>
          {{/each}}
          </ul>
          </div>
      </div>
      <div class="products">
          <h2 class="products__title">Quantidade em Kg</h2>
          <div class="list">
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--item">{{#link-to 'edit' produtos.id}}{{produtos.name}}{{/link-to}}</li>
          {{produtos.id}}
          {{/each}}
          </ul>
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--price">{{produtos.weight}}</li>
          {{/each}}
          </ul>
          </div>
      </div>
      </section>
      {{/products-list}}
    `);

    assert.equal(this.element.querySelectorAll('section').length, 1, 'Section tag loaded');
    assert.equal(this.element.querySelectorAll('div').length, 5, 'Div tag loaded');
    assert.equal(this.element.querySelectorAll('ul').length, 4, 'Ul tag loaded');
    assert.equal(this.element.querySelectorAll('li').length, 0, 'Li tag loaded');

  });

  test('Should render the css classes', async function (assert) {
    await render(hbs`
      {{#products-list}}
      <section class="view__list">
      <div class="products">
          <h2 class="products__title">Valor em R$</h2>
          <div class="list">
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--item">{{produtos.name}}</li>
          {{/each}}
          </ul>
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--price">R$ {{produtos.price}}</li>
          {{/each}}
          </ul>
          </div>
      </div>
      <div class="products">
          <h2 class="products__title">Quantidade em Kg</h2>
          <div class="list">
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--item">{{#link-to 'edit' produtos.id}}{{produtos.name}}{{/link-to}}</li>
          {{produtos.id}}
          {{/each}}
          </ul>
          <ul class="products__list">
          {{#each model as |produtos|}} 
          <li class="products__list--price">{{produtos.weight}}</li>
          {{/each}}
          </ul>
          </div>
      </div>
      </section>
      {{/products-list}}
    `);

    assert.equal(this.element.querySelectorAll('.view__list').length, 1, 'view__list loaded');
    assert.equal(this.element.querySelectorAll('.list').length, 2, 'list loaded');
    assert.equal(this.element.querySelectorAll('.products').length, 2, 'products loaded');
    assert.equal(this.element.querySelectorAll('.products__title').length, 2, 'products title loaded');
    assert.equal(this.element.querySelectorAll('.products__list').length, 4, 'products list loaded');
    assert.equal(this.element.querySelectorAll('.products__list--item').length, 0, 'list loaded');
    assert.equal(this.element.querySelectorAll('.products__list--price').length, 0, 'list loaded');

  });
});
