import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const API_URL = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=7ef4dbdea5f04b5b999318ec00601811&reverse_sort=false&Appid=CL2WVGNMA9FB5DG&Apikey=2cba5558c54a4b5f9f57e7af32b2f72a20240713130226696618';
const PRODUCTS_PER_PAGE = 9;
const TOTAL_PAGES = 2; // Assuming you want to display 3 pages

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}&page=${page}&size=${PRODUCTS_PER_PAGE}`);
      setProducts(response.data.items);
    } catch (error) {
      setError('Error fetching the products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>All Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className='grid-row1'>
            {products.map((product) => (
              <div className='card1' key={product.id}>
                <a href="/productdetail">
                  <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
                </a>
                <div>
                  <div className='card1-name'>
                    <h4>{product.name}</h4>
                    <h5>₦{product.current_price[0].NGN[0]}</h5>
                  </div>
                  <div className='desc-and-btn'>
                    <div>
                      <h6>A perfect blend of nature</h6>
                      <div className='rating'>
                        <img src="Ratings.png" alt="rating" />
                        <h6>({58})</h6>
                      </div>
                    </div>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {[...Array(TOTAL_PAGES)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
