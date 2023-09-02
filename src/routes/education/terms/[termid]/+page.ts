
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {

    // console.log(params.termid)
    return {
        term: {
            id: params.termid
        }
    }

};
