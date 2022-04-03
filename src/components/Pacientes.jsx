const Pacientes = () => {
  return (
    <div className="mx-5  mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Ivo</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
          <span className="font-normal normal-case">10 diciembre 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos dolorum qui placeat consectetur ratione modi, optio unde excepturi facere, accusamus porro dolore? Ea consequuntur excepturi nisi, vel rerum magnam.</span>
        </p>
    </div>
  )
}

export default Pacientes