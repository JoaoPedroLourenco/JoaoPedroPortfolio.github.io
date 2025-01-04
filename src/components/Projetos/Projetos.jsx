import React from "react";
import CardProjetos from "./CardProjetos";
import mesasOrder from "../../assets/imgs/Order/mesasOrder.jpeg";
import homeUninetwork from "../../assets/imgs/UniNetwork/HomeUninetwork.jpg";
import textoJogo from "../../assets/imgs/JogoCiencias/TextoJogo.jpg";

const Projetos = () => {
  return (
    <>
      <h1
        className="w-full max-w-5xl m-auto mt-10 text-left text-white font-semibold text-2xl"
        id="Projetos"
      >
        Projetos:
      </h1>
      <div className="w-full h-auto min-h-[50vh] max-w-5xl mx-auto my-5 flex flex-wrap gap-3 items-center">
        <CardProjetos
          nomeProjeto="Order - Gestão de restaurantes"
          descProjeto="O Order é um sistema projetado para melhorar a gestão de restaurantes..."
          imageProjeto={mesasOrder}
          firebase={true}
          linkProjeto="https://github.com/JoaoPedroLourenco/Order"
        />
        <CardProjetos
          nomeProjeto="UniNetwork - Rede social para universitários"
          descProjeto="Uma rede social criada para o bootcamp jovem programador..."
          imageProjeto={homeUninetwork}
          firebase={true}
          linkProjeto="https://github.com/JoaoPedroLourenco/UniNetwork.git"
        />
        <CardProjetos
          nomeProjeto="Jogo sobre biologia"
          descProjeto="Jogo simples criado para um trabalho de biologia..."
          imageProjeto={textoJogo}
          firebase={false}
          linkProjeto="https://github.com/JoaoPedroLourenco/jogo-ciencias.git"
        />
      </div>
    </>
  );
};

export default Projetos;
