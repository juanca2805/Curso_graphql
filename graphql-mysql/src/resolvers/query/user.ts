import { IResolvers } from 'graphql-tools';
import { USER_LIST } from '../../constants/db-operations';

const resolverQueryUsers: IResolvers = {
    Query: {
        users(_, __, {connection}) {
        const users = new Array(0);
        var sql = USER_LIST;
        return new Promise((resolve, reject)=>{
              connection.query(sql, function (error: any, results: any) {
        if (error) { reject([]);}
        // Resultado correcto
        results.forEach((element: any) => {
            users.push({
                id: element.id,
                name: element.name,
                instructor: element.instructor,
                twitter: element.twitter,
                web: element.web
            });
        });
        resolve(users);
        });
        });
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