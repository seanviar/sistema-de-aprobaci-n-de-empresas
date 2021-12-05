import { GraphQLResolveInfo } from "graphql";
import { CreateManyEmpresaArgs } from "./args/CreateManyEmpresaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEmpresaResolver {
    createManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmpresaArgs): Promise<AffectedRowsOutput>;
}
