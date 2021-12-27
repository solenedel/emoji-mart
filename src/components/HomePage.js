import React from "react";

const HomePage = ({ className }) => {
  return ( 
    <div className={className}>
      <h1>Welcome to emoji mart!</h1>

      <section className="sale">
      <h4>Currently on sale</h4>
        
      </section>

       <section className="featured">
        <h4>Featured products</h4>
      </section>
    </div>
   );
}
 
export default HomePage;