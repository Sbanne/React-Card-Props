import './App.css';
import Contact from './components/Contact';
import img1 from './images/cat1.PNG'
import img2 from './images/cat2.PNG'
import img3 from './images/cat3.PNG'
import img4 from './images/cat4.PNG'

export default function App() {
  return (
    <div className='contacts'>
      <Contact
        img={img1}
        name="Mr. Whiskerson"
        phone='(212) 555-1234'
        email="mr.whiskaz@catnap.meow" />
      <Contact
        img={img2}
        name="Fluffykins"
        phone='(212) 555-2345'
        email="fluff@me.com" />
      <Contact
        img={img3}
        name="Felix"
        phone='(212) 555-4567'
        email="thecat@hotmail.com" />
      <Contact
        img={img4}
        name="Pumpkin"
        phone='(0800) CAT KING'
        email="pumpkin@scrimba.com" />
    </div>
  )
}
