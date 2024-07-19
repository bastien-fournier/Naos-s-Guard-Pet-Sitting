import Picture from "../../assets/images/picture.png";

export default function BodyHomePage() {
  return (
    <div className="flex justify-center mt-5 mb-5 ">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-xs md:max-w-lg lg:max-w-xl">
        <h1 className=" text-secondary text-center text-2xl mt-4">
          Naos'Guard Pet-Sitting
        </h1>
        <h2 className=" text-secondary text-center mt-2">
          Confiez-moi votre toutou
        </h2>

        <div className="flex justify-center  ">
          <img
            className="w-44 mt-5 mb-5 rounded-sm"
            src={Picture}
            alt="page d'accueil"
          />
        </div>
        <p className="text-secondary text-center mb-6 mt-2">
          Bienvenue sur Naos'Guard Pet-Sitting, votre solution de confiance pour
          la garde de chiens. Offrez à votre compagnon à quatre pattes une
          expérience sécurisée et attentionnée, que ce soit pour une journée ou
          plusieurs jours. Découvrez comment je peux prendre soin de votre chien
          avec amour et professionnalisme.
        </p>
      </div>
    </div>
  );
}
