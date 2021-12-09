import { DocumentosOrderByWithRelationInput } from "../../../inputs/DocumentosOrderByWithRelationInput";
import { DocumentosWhereInput } from "../../../inputs/DocumentosWhereInput";
import { DocumentosWhereUniqueInput } from "../../../inputs/DocumentosWhereUniqueInput";
export declare class EmpresaDocumentosArgs {
    where?: DocumentosWhereInput | undefined;
    orderBy?: DocumentosOrderByWithRelationInput[] | undefined;
    cursor?: DocumentosWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nombre" | "link" | "empresaId"> | undefined;
}
