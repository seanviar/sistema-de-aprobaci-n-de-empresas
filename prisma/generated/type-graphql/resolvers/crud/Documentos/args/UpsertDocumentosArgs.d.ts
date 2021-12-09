import { DocumentosCreateInput } from "../../../inputs/DocumentosCreateInput";
import { DocumentosUpdateInput } from "../../../inputs/DocumentosUpdateInput";
import { DocumentosWhereUniqueInput } from "../../../inputs/DocumentosWhereUniqueInput";
export declare class UpsertDocumentosArgs {
    where: DocumentosWhereUniqueInput;
    create: DocumentosCreateInput;
    update: DocumentosUpdateInput;
}
