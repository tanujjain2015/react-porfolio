import React, {useState} from 'react';
import Navigation from './Components/Navbar';
import Banner from './Components/Banner';
import Aboutme from './Components/AboutMe';
import './App.css';
import Initiative from './Components/Initiative';
import Innovation from './Components/Innovation';
import PhotoList from './Components/Photolist';
import ContactMe from './Components/Contact';
import ProductsManaged from './Components/ProductsManaged';
import DomainExpertise from './Components/DomainExpertise';
import TechnicalSkill from './Components/TechnicalSkills';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import GitProjects from './Components/GitProjects';

function App() {

  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch (currentPage){
      case "aboutme" :
        return (
          <>
           <Banner></Banner>
           <Aboutme></Aboutme>
           <Footer></Footer>
          </>
        )
        case "initiative" :
        return (
          <>
           <Banner></Banner>
           <Initiative></Initiative>
           <Footer></Footer>
          </>
        )
        case "innovation" :
        return (
          <>
           <Banner></Banner>
           <Innovation></Innovation>
           <Footer></Footer>
          </>
        )
        case "portfolio" :
        return (
          <>
           <Banner></Banner>
           <PhotoList></PhotoList>
           <Footer></Footer>
          </>
        )
        case "contactme" :
        return (
          <>
           <Banner></Banner>
           <ContactMe></ContactMe>
           <Footer></Footer>
          </>
        )
        case "productsmanaged" :
        return (
          <>
           <Banner></Banner>
           <ProductsManaged></ProductsManaged>
           <Footer></Footer>
          </>
        )
        case "domainexpertise" :
        return (
          <>
           <Banner></Banner>
           <DomainExpertise></DomainExpertise>
           <Footer></Footer>
          </>
        )
        case "technicalskills" :
        return (
          <>
           <Banner></Banner>
           <TechnicalSkill></TechnicalSkill>
           <Footer></Footer>
          </>
        )
        case "resume" :
        return (
          <>
           <Banner></Banner>
           <Resume></Resume>
           <Footer></Footer>
          </>
        )
        case "gitprojects" :
          return (
            <>
             <Banner></Banner>
             <GitProjects></GitProjects>
             <Footer></Footer>
            </>
          )
        default :
        return (
          <>
           <Banner></Banner>
           <Aboutme></Aboutme>
           <Footer></Footer>
          </>
        )
    }
    //
  }

  return (
    <div className="App">
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Navigation>
          <main>
            {
              renderPage()
            }
          </main>
    </div>
  );
}

export default App;
