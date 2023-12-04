import './styles.css'
import NavComponent from "./components/Nav/NavComponent";
import { ContactComponent } from './components/Contact/ContactComponent';

export default function App() {
  return (
    <>
      <NavComponent />
      <ContactComponent />
    </>
  );
}