import { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentosArgs } from "./args/FindFirstDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class FindFirstDocumentosResolver {
    findFirstDocumentos(ctx: any, info: GraphQLResolveInfo, args: FindFirstDocumentosArgs): Promise<Documentos | null>;
}
