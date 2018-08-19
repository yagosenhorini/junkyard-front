import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer-component', function (hooks) {
  setupRenderingTest(hooks);

  test('Should render the footer', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{footer-component}}`);
    assert.equal(this.element.querySelector('span').textContent, 'Copyright © 2018 - Todos os direitos reservados.', 'Span loaded');

    // Template block usage:
    await render(hbs`
      {{#footer-component}}
      <footer class="footer">
      <span class="footer__copy">Copyright &copy; 2018 - Todos os direitos reservados.</span>
      <ul class="footer__list">
          <li class="footer__list--item"><i class="fa fa-github"></i></li>
          <li class="footer__list--item"><i class="fa fa-linkedin-square"></i></li>
          <li class="footer__list--item"><i class="fa fa-twitter"></i></li>
      </ul>
      </footer>
      {{/footer-component}}
    `);
    assert.equal(this.element.textContent.trim(), 'Copyright © 2018 - Todos os direitos reservados.', 'Text loaded');
  });
});