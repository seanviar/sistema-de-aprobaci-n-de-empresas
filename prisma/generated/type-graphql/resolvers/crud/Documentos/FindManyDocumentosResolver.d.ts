import { GraphQLResolveInfo } from "graphql";
import { FindManyDocumentosArgs } from "./args/FindManyDocumentosArgs";
import { Documentos } from "../../../models/Documentos";
export declare class FindManyDocumentosResolver {
    findManyDocumentos(ctx: any, info: GraphQLResolveInfo, args: FindManyDocumentosArgs): Promise<Documentos[]>;
}
