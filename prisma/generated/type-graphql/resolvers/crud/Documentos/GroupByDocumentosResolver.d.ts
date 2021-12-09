import { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentosArgs } from "./args/GroupByDocumentosArgs";
import { DocumentosGroupBy } from "../../outputs/DocumentosGroupBy";
export declare class GroupByDocumentosResolver {
    groupByDocumentos(ctx: any, info: GraphQLResolveInfo, args: GroupByDocumentosArgs): Promise<DocumentosGroupBy[]>;
}
