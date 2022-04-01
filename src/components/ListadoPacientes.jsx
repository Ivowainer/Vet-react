import Pacientes from "./Pacientes"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administa tus {''}
        <span className="text-indigo-600">Pacientes y citas</span>
      </p>

      <div className="md:h-screen overflow-y-scroll">
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
      </div>
    </div>
  )
}

export default ListadoPacientes