import {gql} from '@apollo/client'

const get_EMPRESAS = gql`
query{empresas {
  nombre
  razonSocial
  tipoIdentificacion
  numeroIdentificacion
  numeroEmpleados
  logo
  estado
  documentos{
    nombre
    link
  }
}}`
export {get_EMPRESAS}