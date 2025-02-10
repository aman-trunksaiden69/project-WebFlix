import axios from "../../Utils/Axios";
import { loadmoviedata } from "../Reducers/Movieslice";
export { removemoviedata } from "../Reducers/Movieslice";



export const asyncloadmoviedata = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const translations = await axios.get(`/movie/${id}/translations`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`) 

        let alldetailsdata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t => t.name),
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN
        }
        
        dispatch(loadmoviedata(alldetailsdata))

    } catch (error) {
        console.log("Error: movie data unloaded!", error)
    }
}