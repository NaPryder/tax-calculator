import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-content">
        <Outlet></Outlet>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}
