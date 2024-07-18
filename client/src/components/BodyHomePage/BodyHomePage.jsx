import Picture from "../../assets/images/picture.png";

export default function BodyHomePage() {
  return (
    <div className="bg-secondary  text-center rounded-md flex justify-center flex-col mt-5 mx-auto px-3 mb-5 shadow-lg w-full  max-w-sm md:max-w-md lg:max-w-lg">
      <h1 className="bg-secondary text-white text-2xl mt-4">
        Naos'Guard Pet-Sitting
      </h1>
      <h2 className=" text-white mt-2">Confiez-moi votre toutou</h2>

      <div className="flex justify-center  bg-secondary">
        <img
          className="w-44 mt-5 mb-5 rounded-sm"
          src={Picture}
          alt="page d'accueil"
        />
      </div>
      <p className="text-white mb-6 mt-2">
        Bienvenue sur Naos'Guard Pet-Sitting, votre solution de confiance pour
        la garde de chiens. Offrez à votre compagnon à quatre pattes une
        expérience sécurisée et attentionnée, que ce soit pour une journée ou
        plusieurs jours. Découvrez comment je peux prendre soin de votre chien
        avec amour et professionnalisme.
      </p>
    </div>
  );
}
