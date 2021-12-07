import { useQuery } from "@apollo/client"

import { get_EMPRESAS } from "../graphql/empresas/queris"
import React , {useEffect} from "react";


export default function Home() {

  const { loading, error, data } = useQuery(get_EMPRESAS);
  useEffect(()=>{console.log(data)},[data])

  return (
    <div className='bg-red-500'  >
      todas las empresas
      
    </div>
  )
}
