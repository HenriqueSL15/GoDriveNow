function FAQBox() {
  const FAQ = [
    {
      pergunta: "Quais documentos são necessários para alugar um carro?",
      resposta:
        "Você precisará de uma carteira de motorista válida e um cartão de crédito no nome do titular da reserva.",
    },
    {
      pergunta: "Existe uma idade mínima para alugar um carro?",
      resposta:
        "Sim, a idade mínima é de 21 anos, e motoristas abaixo de 25 anos podem estar sujeitos a uma taxa adicional.",
    },
    {
      pergunta: "Posso cancelar minha reserva?",
      resposta:
        "Sim, você pode cancelar sua reserva até 24 horas antes do horário programado para a retirada do veículo, sem custos adicionais.",
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta:
        "Aceitamos cartões de crédito, débito e pagamentos via transferência bancária.",
    },
  ];

  return (
    <div className="flex flex-col w-4/6">
      <div className="grid grid-cols-1 gap-5">
        {FAQ.map((item, index) => (
          <div
            key={index}
            className="space-y-3 px-10 py-5 border border-1 border-black"
          >
            <h2 className="font-title font-bold text-xl">{item.pergunta}</h2>
            <p className="font-text font-semibold text-lg text-zinc-900">
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQBox;
