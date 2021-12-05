import { EmpresaOrderByWithAggregationInput } from "../../../inputs/EmpresaOrderByWithAggregationInput";
import { EmpresaScalarWhereWithAggregatesInput } from "../../../inputs/EmpresaScalarWhereWithAggregatesInput";
import { EmpresaWhereInput } from "../../../inputs/EmpresaWhereInput";
export declare class GroupByEmpresaArgs {
    where?: EmpresaWhereInput | undefined;
    orderBy?: EmpresaOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nombre" | "razonSocial" | "tipoIdentificacion" | "numeroIdentificacion" | "numeroEmpleados" | "logo" | "estado">;
    having?: EmpresaScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
