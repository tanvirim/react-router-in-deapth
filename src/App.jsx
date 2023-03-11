import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


import NavLayout from "./layouts/NavLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/pages/home";
import AboutPage from "./component/pages/about";
import ContactPage from "./component/pages/help/contact";
import HelpLayout from "./layouts/HelpLayout";
import FAQ from "./component/pages/help/FAQ";
import NotFoundPage from "./component/pages/notFoundPage";
import Carrers from "./component/pages/carrers/carriers";
import CarrersLayout from "./layouts/carrersLayout";
import CareerDetails from "./component/pages/carrers/careerDeatails";
import CarrierError from "./component/pages/carrers/carrierError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      

      <Route path="carrers" element={<CarrersLayout />}>
        <Route index element={<Carrers />} />
        <Route path=":id"
         element={<CareerDetails/>}
         errorElement={<CarrierError/>}
         /> 
    
      </Route>

      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
