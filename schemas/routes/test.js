const schema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    content: {type:'string'},
    username: {type:'string'},
    review: {type:'string'},
  },
  additionalProperties: false,
}


module.exports = schema;
