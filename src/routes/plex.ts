import { getLibrary } from "$lib/plex";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }): Promise<void> {
    // the `slug` parameter is available because this file
    // is called [slug].json.js
    const { slug } = params;

    const library = await getLibrary();

    console.log('library', library);
}