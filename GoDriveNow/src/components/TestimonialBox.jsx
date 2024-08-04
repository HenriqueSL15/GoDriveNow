function TestimonialBox() {
  const usuarios = [
    {
      text: '"Excelente serviço! Aluguei um carro para uma viagem de última hora e tudo foi muito rápido e fácil."',
      image: "",
      name: "Maria Souza",
      position: "Gerente",
      company: "Compania 1",
      stars: "5",
    },
    {
      text: '"Os carros estão sempre em ótimas condições e o atendimento é impecável. Recomendo a CarRental a todos."',
      image: "",
      name: "João Silva",
      position: "Supervisor",
      company: "Compania 2",
      stars: "5",
    },
    {
      text: '"Preços acessíveis e uma grande variedade de modelos. Sempre alugo com a CarRental quando preciso viajar."',
      image: "",
      name: "Ana Pereira",
      position: "Líder",
      company: "Compania 3",
      stars: "5",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3">
        {usuarios.map((usuario, index) => {
          return (
            <div key={index} className="mx-20">
              <p className="font-bold text-3xl mb-3">★★★★★</p>
              <p className="font-bold text-lg font-text mb-7">{usuario.name}</p>
              <p className="font-bold text-lg font-text mb-7">{usuario.text}</p>
              <div className="w-14 h-14 mb-3 font-text text-white rounded-full overflow-hidden bg-black">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FdoNV-rKbQRnOvSnKbX9ZNgzXokhl00kdA&s"
                  alt="Foto"
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="font-bold font-text">{usuario.name}</h1>
              <h3 className="font-text">
                {usuario.position}, {usuario.company}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div className="flex flex-col">
  //     <div className="grid grid-cols-3">
  //       {usuarios.map((usuario, index) => {
  //         <div key={index} className="mx-20">
  // <p className="font-bold text-3xl mb-3">★★★★★</p>
  // <p className="font-bold text-lg font-text mb-7">{usuario.name}</p>

  // <div className="w-14 h-14 mb-3 font-text text-white rounded-full overflow-hidden bg-black">
  //   <img
  //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FdoNV-rKbQRnOvSnKbX9ZNgzXokhl00kdA&s"
  //     alt="Foto"
  //     className="object-cover w-full h-full"
  //   ></img>
  // </div>
  // <h1 className="font-bold font-text">{usuario.name}</h1>
  // <h3 className="font-text">
  //   {usuario.position}, {usuario.company}
  // </h3>
  //         </div>;
  //       })}
  //     </div>
  //   </div>
}

export default TestimonialBox;
