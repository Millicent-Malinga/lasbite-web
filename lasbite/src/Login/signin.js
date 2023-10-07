import {auth, provider, facebookProvider} from './config';
import { signInWithPopup,signOut } from "firebase/auth";

function signin() {
const [value, setValue] = useState('');
    const login =()=> {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return (
        <div>
            <button onclick={login}>
                Sign in with Google
            </button>
        </div>
    )
}