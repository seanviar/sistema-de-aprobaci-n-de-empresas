import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEmpresaArgs } from "./args/DeleteManyEmpresaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEmpresaResolver {
    deleteManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmpresaArgs): Promise<AffectedRowsOutput>;
}
