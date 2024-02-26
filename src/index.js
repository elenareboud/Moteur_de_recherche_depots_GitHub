import { createRoot } from 'react-dom/client';
// créer une racine de rendu pour l'application React
import App from './components/App';
//App est composant racine, contenant toute la structure de l'application
import './index.scss';

//sélectionne l'élément DOM dans lequel l'application React sera rendue
//pour trouver un élément dont l'ID est app
//(point d'ancrage dans le fichier HTML pour toute l'application React.)
const rootDOMElement = document.getElementById('app');
const root = createRoot(rootDOMElement);

//rendu
root.render(<App />);