import { useEffect } from "react"
import Paciente from "./Paciente"

//import React from 'react'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){}
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll mx-5">

    {pacientes && pacientes.length ? (
      <>
<h2 className='font-black text-3xl text-center' >Listado Pacientes</h2>
<p className='text-xl mt-5 mb-10 text-center'>
  Adminstra tus {''}
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>

  {pacientes.map(paciente =>(
    <Paciente 
    key={paciente.id}
      paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
    />

  ))}    
  </>
    ):
    
    <>
<h2 className='font-black text-3xl text-center' >No hay pacientes</h2>
<p className='text-xl mt-5 mb-10 text-center'>
  Agrega tus {''}
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>
    </>
    
    }

    
   

    </div>
  )
}

export default ListadoPacientes
