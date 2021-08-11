import Cookies from 'universal-cookie';
import { ls } from '../utils/Globals';

const cookies = new Cookies();

const names: string = cookies.get('names');
const surnames: string = cookies.get('surnames');
const email: string = cookies.get('email');
const token: string = cookies.get('token');
const auth: boolean = JSON.parse(cookies.get('auth'));
const webCam: boolean = JSON.parse(ls.getItem('webCam') + '');
const buffers: Uint8Array[] = JSON.parse(ls.getItem('imageBuffers') + '') || [];

export { names, surnames, email, token, auth, webCam, buffers };
