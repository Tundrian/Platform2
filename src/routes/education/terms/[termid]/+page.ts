
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {

    return {
        term: {
            id: params.termid
        }
    }

};
