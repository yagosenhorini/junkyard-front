import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | product', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /product', async function(assert) {
    await visit('/produtos');
    assert.equal(currentURL(), '/produtos');
  });
});
