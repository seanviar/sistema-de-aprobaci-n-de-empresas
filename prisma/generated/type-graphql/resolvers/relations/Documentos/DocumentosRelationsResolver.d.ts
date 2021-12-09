import { Documentos } from "../../../models/Documentos";
import { Empresa } from "../../../models/Empresa";
export declare class DocumentosRelationsResolver {
    empresa(documentos: Documentos, ctx: any): Promise<Empresa>;
}
