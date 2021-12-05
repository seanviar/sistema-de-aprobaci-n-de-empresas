import { GraphQLResolveInfo } from "graphql";
import { GroupByEmpresaArgs } from "./args/GroupByEmpresaArgs";
import { EmpresaGroupBy } from "../../outputs/EmpresaGroupBy";
export declare class GroupByEmpresaResolver {
    groupByEmpresa(ctx: any, info: GraphQLResolveInfo, args: GroupByEmpresaArgs): Promise<EmpresaGroupBy[]>;
}
