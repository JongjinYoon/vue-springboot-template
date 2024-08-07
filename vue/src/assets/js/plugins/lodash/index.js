import _ from 'lodash';

export default {
  name: 'lodash',
  methods: {
    snakeToCamel(obj) {
      if (_.isArray(obj)) {
        return obj.map((v) => this.snakeToCamel(v));
      }
      if (_.isObject(obj)) {
        return _.mapValues(
          _.mapKeys(obj, (v, k) => _.camelCase(k)),
          (v) => this.snakeToCamel(v),
        );
      }
      return obj;
    }
  }
}