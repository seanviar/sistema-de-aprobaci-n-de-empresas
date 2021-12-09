import { GraphQLResolveInfo } from "graphql";
import { CreateDocumentosArgs } from "./args/CreateDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class CreateDocumentosResolver {
    createDocumentos(ctx: any, info: GraphQLResolveInfo, args: CreateDocumentosArgs): Promise<Documentos>;
}
