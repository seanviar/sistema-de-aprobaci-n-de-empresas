import { EmpresaAvgAggregate } from "../outputs/EmpresaAvgAggregate";
import { EmpresaCountAggregate } from "../outputs/EmpresaCountAggregate";
import { EmpresaMaxAggregate } from "../outputs/EmpresaMaxAggregate";
import { EmpresaMinAggregate } from "../outputs/EmpresaMinAggregate";
import { EmpresaSumAggregate } from "../outputs/EmpresaSumAggregate";
export declare class AggregateEmpresa {
    _count: EmpresaCountAggregate | null;
    _avg: EmpresaAvgAggregate | null;
    _sum: EmpresaSumAggregate | null;
    _min: EmpresaMinAggregate | null;
    _max: EmpresaMaxAggregate | null;
}
