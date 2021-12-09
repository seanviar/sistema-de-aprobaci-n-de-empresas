import { DocumentosOrderByWithAggregationInput } from "../../../inputs/DocumentosOrderByWithAggregationInput";
import { DocumentosScalarWhereWithAggregatesInput } from "../../../inputs/DocumentosScalarWhereWithAggregatesInput";
import { DocumentosWhereInput } from "../../../inputs/DocumentosWhereInput";
export declare class GroupByDocumentosArgs {
    where?: DocumentosWhereInput | undefined;
    orderBy?: DocumentosOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nombre" | "link" | "empresaId">;
    having?: DocumentosScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
