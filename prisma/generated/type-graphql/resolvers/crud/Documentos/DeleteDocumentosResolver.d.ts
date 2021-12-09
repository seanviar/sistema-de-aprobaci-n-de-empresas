import { GraphQLResolveInfo } from "graphql";
import { DeleteDocumentosArgs } from "./args/DeleteDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class DeleteDocumentosResolver {
    deleteDocumentos(ctx: any, info: GraphQLResolveInfo, args: DeleteDocumentosArgs): Promise<Documentos | null>;
}
