import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = ({ className }) => {
  
  const [saleProducts, setSaleProducts] = useState([]);

  // load products on sale on every page load
  useEffect(() => {
    axios.get('/on-sale')
    .then((res) => {
      console.log('res.data: ', res.data);
    })
  }, []);

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