import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutSection from "./components/AboutSection"
import BrandPartners from "./components/BrandParterners"
import ClientReviews from "./components/ClientReviws"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import HeroSlider from "./components/Slider"
import StatsSection from "./components/StatsSections"
import WhatsAppButton from "./components/WhatsappButton"
import WhyChooseUs from "./components/WhyChooseUs"
import ProductsPage from "./pages/Products"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<> 
<Navbar/>
<HeroSlider/>
<StatsSection/>
<WhatsAppButton/>
<AboutSection/>
<BrandPartners/>
<WhyChooseUs/>
<ClientReviews/>
<Footer/>
</>
    },
    {
      path:"/products",
      element:<><Navbar/><ProductsPage/><Footer/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><ContactPage/><Footer/></>
    },{
      path:"/about",
      element:<><Navbar/><AboutPage/><Footer/></>
    }
  ])

  return (
        <RouterProvider router={router} />
  )
}

export default App
