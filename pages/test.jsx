import React from 'react'
import {  PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const empresas = await prisma.empresa.findMany();

    return {
      props: {empresas}, // will be passed to the page component as props
    }
  }


const test = ({empresas}) => {
    console.log(empresas)
    return (
        <div>
            estas son las empresas 
            <div>tabla de empresas</div>
            {empresas &&
            empresas.map((p)=>{
              return <div key={p.id}>{p.nombre}</div>
            })}
        </div>
    )
}

export default test
