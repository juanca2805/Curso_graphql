import GMR from 'graphql-merge-resolvers'
import resolverQueryUsers from './user'

const resolversQuery=GMR.merge([
    resolverQueryUsers
])

export default resolversQuery;