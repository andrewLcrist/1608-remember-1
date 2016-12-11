import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit/edit-reminder', 'Integration | Component | edit/edit reminder', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit/edit-reminder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit/edit-reminder}}
      template block text
    {{/edit/edit-reminder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
