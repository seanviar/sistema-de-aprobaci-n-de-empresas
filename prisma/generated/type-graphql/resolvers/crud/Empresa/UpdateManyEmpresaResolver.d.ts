import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEmpresaArgs } from "./args/UpdateManyEmpresaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEmpresaResolver {
    updateManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmpresaArgs): Promise<AffectedRowsOutput>;
}
