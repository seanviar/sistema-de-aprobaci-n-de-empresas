import { GraphQLResolveInfo } from "graphql";
import { CreateManyDocumentosArgs } from "./args/CreateManyDocumentosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDocumentosResolver {
    createManyDocumentos(ctx: any, info: GraphQLResolveInfo, args: CreateManyDocumentosArgs): Promise<AffectedRowsOutput>;
}
