import { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentosArgs } from "./args/AggregateDocumentosArgs";
import { AggregateDocumentos } from "../../outputs/AggregateDocumentos";
export declare class AggregateDocumentosResolver {
    aggregateDocumentos(ctx: any, info: GraphQLResolveInfo, args: AggregateDocumentosArgs): Promise<AggregateDocumentos>;
}
