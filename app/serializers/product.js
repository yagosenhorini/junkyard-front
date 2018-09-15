import { assign } from '@ember/polyfills';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { products: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {
        assign(hash, this.serialize(snapshot, options));
        if (hash.product) {
            hash = hash.product;
        }
    }
});
