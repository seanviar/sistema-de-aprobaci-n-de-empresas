import { Documentos } from "../../../models/Documentos";
import { Empresa } from "../../../models/Empresa";
import { EmpresaDocumentosArgs } from "./args/EmpresaDocumentosArgs";
export declare class EmpresaRelationsResolver {
    documentos(empresa: Empresa, ctx: any, args: EmpresaDocumentosArgs): Promise<Documentos[]>;
}
