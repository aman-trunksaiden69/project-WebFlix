import axios from "../../Utils/Axios";
import { loadtvdata } from "../Reducers/Tvslice";
export { removetvdata } from "../Reducers/Tvslice";



export const asyncloadtvdata = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/tv/${id}`)
        const externalid = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const translations = await axios.get(`/tv/${id}/translations`)
        const videos = await axios.get(`/tv/${id}/videos`)
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`) 

        let alldetailsdata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t => t.name),
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN
        }
        
        dispatch(loadtvdata(alldetailsdata))

    } catch (error) {
        console.log("Error: tv data unloaded!", error)
    }
}