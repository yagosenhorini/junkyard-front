import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates, {
    host: 'http://localhost:3000/',
    namespace: 'v1',
    findAllUrlTemplate: '{+host}{namespace}/products',
    createRecordUrlTemplate: '{+host}{namespace}/products/',
    findRecordUrlTemplate: '{+host}{namespace}/products/{id}',
    queryUrlTemplate: '{+host}{namespace}/products/{id}',
    updateRecordUrlTemplate: '{+host}{namespace}/products/{id}',

});
