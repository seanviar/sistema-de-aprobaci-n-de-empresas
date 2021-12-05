import { EmpresaAvgOrderByAggregateInput } from "../inputs/EmpresaAvgOrderByAggregateInput";
import { EmpresaCountOrderByAggregateInput } from "../inputs/EmpresaCountOrderByAggregateInput";
import { EmpresaMaxOrderByAggregateInput } from "../inputs/EmpresaMaxOrderByAggregateInput";
import { EmpresaMinOrderByAggregateInput } from "../inputs/EmpresaMinOrderByAggregateInput";
import { EmpresaSumOrderByAggregateInput } from "../inputs/EmpresaSumOrderByAggregateInput";
export declare class EmpresaOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    razonSocial?: "asc" | "desc" | undefined;
    tipoIdentificacion?: "asc" | "desc" | undefined;
    numeroIdentificacion?: "asc" | "desc" | undefined;
    numeroEmpleados?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    _count?: EmpresaCountOrderByAggregateInput | undefined;
    _avg?: EmpresaAvgOrderByAggregateInput | undefined;
    _max?: EmpresaMaxOrderByAggregateInput | undefined;
    _min?: EmpresaMinOrderByAggregateInput | undefined;
    _sum?: EmpresaSumOrderByAggregateInput | undefined;
}
