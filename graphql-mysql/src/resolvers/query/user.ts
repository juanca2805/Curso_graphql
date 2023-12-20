import { IResolvers } from 'graphql-tools';

const resolverQueryUsers: IResolvers = {
    Query: {
        users() {
            return [
                {
                    id:1,
                    name: 'anartz mugika ledo',
                    instructor: 1,
                    twitter: 'mugan86',
                    web: ''
                }
            ]
        },
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        }
    }
};

export default resolverQueryUsers;