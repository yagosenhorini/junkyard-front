import DS from 'ember-data';
import { assign } from '@ember/polyfills';

export default DS.RESTSerializer.extend({
    // primaryKey: '_id',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { products: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    
});
