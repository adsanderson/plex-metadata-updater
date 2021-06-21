import { PLEX_USERNAME, PLEX_PASSWORD } from './env'
import { Library, MyPlexAccount } from '@ctrl/plex';

export async function getLibrary(): Promise<Library> {
    console.log('ENV', PLEX_USERNAME, PLEX_PASSWORD);
    const account = await new MyPlexAccount('http://192.168.0.32:32400/', PLEX_USERNAME, PLEX_PASSWORD).connect();
    const resource = await account.resource('<SERVERNAME>');
    const plex = await resource.connect();
    const library = await plex.library();
    return library;
}