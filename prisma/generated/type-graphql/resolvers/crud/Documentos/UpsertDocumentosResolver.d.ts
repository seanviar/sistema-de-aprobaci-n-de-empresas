import { GraphQLResolveInfo } from "graphql";
import { UpsertDocumentosArgs } from "./args/UpsertDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class UpsertDocumentosResolver {
    upsertDocumentos(ctx: any, info: GraphQLResolveInfo, args: UpsertDocumentosArgs): Promise<Documentos>;
}
