import { GraphQLResolveInfo } from "graphql";
import { AggregateEmpresaArgs } from "./args/AggregateEmpresaArgs";
import { AggregateEmpresa } from "../../outputs/AggregateEmpresa";
export declare class AggregateEmpresaResolver {
    aggregateEmpresa(ctx: any, info: GraphQLResolveInfo, args: AggregateEmpresaArgs): Promise<AggregateEmpresa>;
}
