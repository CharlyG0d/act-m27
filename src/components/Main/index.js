import trailer from "../../assets/SoloLevelingTrailer.mp4"

const Main = () =>{
    const style = { fontSize: "20px" }
    
    return (
        <main className="py-4 md:py-8 bg-[#7178b3] px-4 font-lato">
              <article className="flex flex-col items-center pb-5">
                <h2 className="text-5xl text-[#1c1d31]">Solo Leveling</h2>
                <p style={style}>Solo Leveling (나 혼자만 레벨업), conocida como Ore dake Level Up na Ken en japonés, es una web novel surcoreana escrita por Chugong. 
                     Fue serializado por primera vez el 14 de febrero de 2016 en la plataforma Munpia y posteriormente fue publicado íntegramente por D&C Media bajo su sello Papyrus el 4 de noviembre de 2016. 
                     Desde entonces, la novela ha sido licenciada en inglés por Webnovel bajo el título Only I Level Up.
                     La adaptación webtoon de Solo Leveling se serializó por primera vez en KakaoPage el 4 de marzo de 2018 y está ilustrada por Jang-Sung-Rak (también conocido como Dubu).</p>
                     
                <p style={style}> En un mundo en el que ciertos humanos llamados «cazadores» poseen habilidades mágicas, estos deben luchar contra monstruos para proteger a la raza humana de una aniquilación segura. 
                    Un cazador muy débil llamado Sung Jinwoo se encuentra en una lucha en la que solo puede tratar de sobrevivir. 
                    Un día, después de sobrevivir por poco a una mazmorra doble abrumadoramente poderosa que casi acaba con todo su grupo, un programa misterioso llamado Sistema lo elige como su único jugador y, a su vez, le da la sorprendente habilidad de subir de nivel sin límites. 
                    Durante su viaje, Jinwoo luchará contra todo tipo de enemigos, tanto humanos como monstruos, y descubrirá los secretos que entrañan las mazmorras y la verdadera fuente de sus poderes.
                </p>
              
              </article>

              <article className="flex justify-center">
                <video
                  src={trailer}
                  controls
                  muted
                  className="w-full max-w-[720px] aspect-video rounded-lg shadow-lg"
                />
              </article>
        </main>
    )
}

export default Main;
