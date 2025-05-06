import { ArticleHistory, SectionHistory, TextHistory, TitleHistory, VideoHistory } from "./styles";
import temp2 from "../../../assets/SoloLevelingSeason2.mp4"

const Historia = () =>{
    return (
        <>
        <SectionHistory>
            <TitleHistory>Segunda Temporada</TitleHistory>
            <TextHistory>
                 Se anunció después del episodio final de la primera temporada.
                 La segunda temporada se desarrolla directamente después de los eventos de la primera temporada y comienza con Sung Jinwoo adoptando sus nuevos poderes como el Monarca de las Sombras.
                 Si bien mantiene sus nuevos poderes en secreto para las personas que lo rodean, un extraño cazador que ha estado perdido durante casi diez años regresa con una terrible advertencia de una catástrofe inminente.
            </TextHistory>
        </SectionHistory>

        <ArticleHistory>
            <VideoHistory src={temp2} controls muted className="aspect-video rounded-lg shadow-lg"></VideoHistory>
        </ArticleHistory>
        </>
    )
}

export default Historia;