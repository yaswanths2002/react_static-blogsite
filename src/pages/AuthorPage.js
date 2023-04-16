import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <h2>About the Author:Author_Nme</h2>
      <section>
      <img src="./img/profile.jpg" className="hero-image1" alt="authorimage" />
      </section>
      <section>
        <p>Descption About the author </p>
      </section>
    </div>
  );
}
 
export default AuthorPage;