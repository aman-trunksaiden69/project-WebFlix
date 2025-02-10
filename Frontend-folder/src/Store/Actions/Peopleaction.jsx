import axios from "../../Utils/Axios";
import { loadpeopledata } from "../Reducers/Peopleslice";
export { removepeopledata } from "../Reducers/Peopleslice";



export const asyncloadpeopledata = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/people/${id}`)
        const externalid = await axios.get(`/people/${id}/external_ids`)
        const Combinedcredits = await axios.get(`/people/${id}/combined_credits`);
        const Tvcredits = await axios.get(`/people/${id}/tv_credits`);
        const Moviecredits = await axios.get(`/people/${id}/movie_credits`);
 

        let alldetailsdata = {
            detail: detail.data,
            externalid: externalid.data,
            CombinedCredits: Combinedcredits.data,
            TvCredits: Tvcredits.data,
            MovieCredits: Moviecredits.data,
        }
        
        dispatch(loadpeopledata(alldetailsdata))

    } catch (error) {
        console.log("Error: people data unloaded!", error)
    }
}