import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDocumentosArgs } from "./args/DeleteManyDocumentosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDocumentosResolver {
    deleteManyDocumentos(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDocumentosArgs): Promise<AffectedRowsOutput>;
}
