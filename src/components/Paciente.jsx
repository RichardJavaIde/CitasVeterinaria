const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

  const {nombre, propietario, sintoma, email, alta,id} = paciente

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'>{nombre}

        </span>
      </p>

      <p className=' font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className='font-normal normal-case'>{propietario}

        </span>
      </p>

      <p className=' font-bold mb-3 text-gray-700 uppercase'>correo: {''}
        <span className='font-normal normal-case'>{email}

        </span>
      </p>

      <p className=' font-bold mb-3 text-gray-700 uppercase'>fecha alta: {''}
        <span className='font-normal normal-case'>{alta}

        </span>
      </p>

      <p className=' font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>{sintoma}
        </span>
      </p>

        <div className="flex justify-between">
          <button className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold
          uppercase rounded-lg p-4"
          type="button"
          onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white text-center font-bold
          uppercase rounded-lg "
          type="button"
          onClick={handleEliminar}

          >
            Editar
          </button>
        </div>
    </div>
  )
}

export default Paciente
