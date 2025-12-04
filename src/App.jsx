import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home/Home";
import About_us from "./about/About_us";
import Contract_us from "./pages/Contract_us";
import Download from "./pages/Download";
import Error_page from "./pages/Error_page";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
import Blog_Datails from "./blogs/Blog_Datails";
import Blog from "./blogs/Blog";
import Details_left from "./blogs/Details_left";
import Details_right from "./blogs/Details_right";
import Create_Accounts from "./accounts/Create_Accounts";
import Forget from "./accounts/Forget";
import Login from "./accounts/Login";
import Reset from "./accounts/Reset";
import Verify_Email from "./accounts/Verify_Email";
import Success from "./accounts/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/pages/contract-us" element={<Contract_us />} />
        <Route path="/pages/download" element={<Download />} />
        <Route path="*" element={<Error_page />} />
        <Route path="/pages/features" element={<Features />} />
        <Route path="/pages/pricing" element={<Pricing />} />
        <Route path="/pages/testimonial" element={<Testimonial />} />
        <Route path="/blogs/blog-detailes" element={<Blog_Datails />} />
        <Route path="/blogs/blog" element={<Blog />} />
        <Route path="/blogs/detailes-left" element={<Details_left />} />
        <Route path="/blogs/detailes-right" element={<Details_right />} />
        <Route path="/accounts/create-accounts" element={<Create_Accounts />} />
        <Route path="/accounts/forget" element={<Forget />} />
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/reset" element={<Reset />} />
        <Route path="/accounts/verify-email" element={<Verify_Email />} />
        <Route path="/accounts/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
