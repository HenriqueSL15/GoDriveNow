function Features() {
  const features = [
    {
      name: "Variedade de Modelos",
      description:
        "De carros econômicos a veículos de luxo, temos o modelo ideal para você.",
      icon: "+30",
    },
    {
      name: "Preços Competitivos",
      description:
        "Oferecemos tarifas justas e transparentes, sem taxas ocultas.",
      icon: "$$$",
    },
    {
      name: "Facilidade na Reserva",
      description:
        "Faça sua reserva online em poucos minutos, de forma simples e segura.",
      icon: "15m - 1H",
    },
    {
      name: "Suporte 24/7",
      description:
        "Nossa equipe está disponível para ajudar você a qualquer hora do dia.",
      icon: "+15 Atendentes",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-title font-bold text-4xl mt-40 mb-32">
          Por Que Escolher a Go Drive Now?
        </h1>
      </div>

      <div className="flex ml-5 text-center mb-10">
        <div className="grid grid-cols-4 gap-12 mx-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full bg-gray-200 rounded p-5">
              <h1 className="font-title font-bold  text-2xl mb-6">
                {feature.name}
              </h1>
              <p className="font-text text-lg font-semibold mb-7">
                {feature.description}
              </p>
              <h3 className="font-title font-bold text-4xl">{feature.icon}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
