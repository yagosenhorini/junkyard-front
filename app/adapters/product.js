import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates, {
    host: 'http://localhost:3000/',
    namespace: 'api',
    findAllUrlTemplate: `{+host}{namespace}/products`,
    queryRecordUrlTemplate: `{+host}{namespace}/products{/id}`
});
