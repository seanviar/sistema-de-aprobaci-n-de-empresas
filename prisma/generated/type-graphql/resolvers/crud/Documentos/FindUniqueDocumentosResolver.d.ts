import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentosArgs } from "./args/FindUniqueDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class FindUniqueDocumentosResolver {
    findUniqueDocumentos(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDocumentosArgs): Promise<Documentos | null>;
}
