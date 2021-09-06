import Cookies from 'universal-cookie';
import { ls } from '../utils/Globals';

const cookies = new Cookies();

const names: string = cookies.get('names');
const surnames: string = cookies.get('surnames');
const email: string = cookies.get('email');
const token: string = cookies.get('token');

const auth: boolean = JSON.parse(cookies.get('auth') || false);
const webCam: boolean = JSON.parse(ls.getItem('webCam') + '');
const images: string[] = JSON.parse(ls.getItem('images') + '') || [];
const namesImages: string[] = JSON.parse(ls.getItem('names') + '') || [];

export { names, email, token, auth, webCam, images, surnames, namesImages };
