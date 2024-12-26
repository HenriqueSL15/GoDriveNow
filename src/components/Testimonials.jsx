import TestimonialBox from "./TestimonialBox";

function Testimonials({ id }) {
  return (
    <>
      <div id={id} className="ml-20 flex justify-start">
        <h1 className="font-title font-bold text-4xl mt-60 mb-20 w-1/3">
          O que Nossos Clientes Dizem
        </h1>
      </div>
      <TestimonialBox></TestimonialBox>
      <div className="grid grid-cols-3"></div>
    </>
  );
}

export default Testimonials;
