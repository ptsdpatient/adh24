import type { LayoutServerLoad } from './$types';
// import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	return {
		// session:  si await getServerSession(event)
	};
};
