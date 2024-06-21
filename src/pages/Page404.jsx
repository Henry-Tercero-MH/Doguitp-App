import image from "../assets/img/error-404.jpg";
import "../assets/css/404.css";
const page404 = () => {
  return (
    <main className="container flex flex--center flex--colum">
      <img className="dog-image" src={image} alt="page404" />
      <p className="notfound-text">Esta página no existe</p>
    </main>
  );
};
export default page404;
