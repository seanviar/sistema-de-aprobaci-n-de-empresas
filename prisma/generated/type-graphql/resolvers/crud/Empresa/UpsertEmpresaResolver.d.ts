import { GraphQLResolveInfo } from "graphql";
import { UpsertEmpresaArgs } from "./args/UpsertEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class UpsertEmpresaResolver {
    upsertEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpsertEmpresaArgs): Promise<Empresa>;
}
