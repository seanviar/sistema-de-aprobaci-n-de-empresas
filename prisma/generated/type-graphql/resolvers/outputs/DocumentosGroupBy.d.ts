import { DocumentosCountAggregate } from "../outputs/DocumentosCountAggregate";
import { DocumentosMaxAggregate } from "../outputs/DocumentosMaxAggregate";
import { DocumentosMinAggregate } from "../outputs/DocumentosMinAggregate";
export declare class DocumentosGroupBy {
    id: string;
    nombre: string;
    link: string;
    empresaId: string;
    _count: DocumentosCountAggregate | null;
    _min: DocumentosMinAggregate | null;
    _max: DocumentosMaxAggregate | null;
}
