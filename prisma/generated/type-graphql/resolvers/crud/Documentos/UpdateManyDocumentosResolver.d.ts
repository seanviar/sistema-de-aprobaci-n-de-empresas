import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDocumentosArgs } from "./args/UpdateManyDocumentosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDocumentosResolver {
    updateManyDocumentos(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDocumentosArgs): Promise<AffectedRowsOutput>;
}
