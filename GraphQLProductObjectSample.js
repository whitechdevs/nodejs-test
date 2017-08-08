var productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString }
  }
});
