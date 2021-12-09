import { DocumentosCountOrderByAggregateInput } from "../inputs/DocumentosCountOrderByAggregateInput";
import { DocumentosMaxOrderByAggregateInput } from "../inputs/DocumentosMaxOrderByAggregateInput";
import { DocumentosMinOrderByAggregateInput } from "../inputs/DocumentosMinOrderByAggregateInput";
export declare class DocumentosOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    empresaId?: "asc" | "desc" | undefined;
    _count?: DocumentosCountOrderByAggregateInput | undefined;
    _max?: DocumentosMaxOrderByAggregateInput | undefined;
    _min?: DocumentosMinOrderByAggregateInput | undefined;
}
