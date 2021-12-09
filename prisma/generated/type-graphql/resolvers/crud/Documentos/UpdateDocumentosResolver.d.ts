import { GraphQLResolveInfo } from "graphql";
import { UpdateDocumentosArgs } from "./args/UpdateDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class UpdateDocumentosResolver {
    updateDocumentos(ctx: any, info: GraphQLResolveInfo, args: UpdateDocumentosArgs): Promise<Documentos | null>;
}
