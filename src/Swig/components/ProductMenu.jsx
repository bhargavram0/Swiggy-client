import React, {useState, useEffect} from 'react'
import { API_URL } from '../api'
import { useParams, useNavigate } from 'react-router-dom'
import  Navbar  from './Navbar'

const ProductMenu = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState('All');
    const {firmId, firmName} = useParams()
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }); 
    const [loading, setLoading] = useState(true)
    const navigate  = useNavigate();
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const productHandler = async() => {
      try {
        const response = await fetch(`${API_URL}/product/${firmId}/products`)
        const newProductData = await response.json()
        setProducts(newProductData.products || [])
        setFilteredProducts(newProductData.products || []);
      } catch (error) {
        console.error("products failed to fetch")
      }
    }

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item._id === product._id);
      if (productExists) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseFromCart = (productId) => {
  setCart((prevCart) => {
    return prevCart.flatMap((item) => {
      if (item._id === productId) {
        if (item.quantity === 1) {
          const confirmDelete = window.confirm("Remove this item from cart?");
          return confirmDelete ? [] : [item];
        } else {
          return [{ ...item, quantity: item.quantity - 1 }];
        }
      }
      return [item];
    });
  });
};

const applyFilter = (type) => {
    setFilter(type);
    if (type === 'All') {
      setFilteredProducts(products);
    } else if (type === 'Veg') {
      setFilteredProducts(products.filter((item) => String(item.category || '').trim().toLowerCase() === 'veg'));
    } else if (type === 'Non-Veg') {
      setFilteredProducts(products.filter((item) => String(item.category || '').trim().toLowerCase() === 'non-veg'));
    } else if (type === 'BestSeller') {
      setFilteredProducts(products.filter((item) => String(item.bestseller)));
    }
  };


  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  

  useEffect(() => {
    productHandler()
  }, [])
  

  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const goToCart = () => {
    navigate('/cart');  
  };


  return (
    <div className='productMenu'>
      <Navbar/>
      <section className="productSection">
        <h3>{firmName}</h3>
        <div className="productButtonSection">
          <button className={`categoryButton  ${filter === 'All' ? 'active' : ''}`} onClick={() => applyFilter('All')}>
             All
          </button>
          <button className={`categoryButton ${filter === 'Veg' ? 'active' : ''}`}  onClick={() => applyFilter('Veg')}>
            <span className="dot greenDot"></span> Veg
          </button>
          <button className={`categoryButton ${filter === 'Non-Veg' ? 'active' : ''}`} onClick={() => applyFilter('Non-Veg')}>
            <span className="dot redDot"></span> Non-Veg
          </button>
          <button className={`categoryButton bestsellerButton ${filter === 'BestSeller' ? 'active' : ''}`} onClick={() => applyFilter('BestSeller')}>
            🌟 BestSeller
          </button>
        </div>
      {filteredProducts.map((item) => {
        const fullDescription = item.description || '';
        const isExpanded = expandedDescriptions[item._id];
        const descriptionToShow =
          isExpanded || fullDescription.length <= 100
            ? fullDescription
            : fullDescription.slice(0, 50) + '...';      

          return (
            <div className="productBox" key={item._id}>
              <div className='productDetails'>
                <div className='productCategory'>
                  <span
                  className={`categoryDot ${String(item.category).trim().toLowerCase() === 'veg' ? 'green' : 'red'}`}
                  ></span>
                  {String(item.category).trim()}
                </div>
                <div className='productName'><strong>{item.productName}</strong></div>
                <div className='productPrice'>₹{item.price}</div>
                <div className="productDescription">
                  {descriptionToShow}
                  {fullDescription.length > 100 && (
                    <span
                      onClick={() => toggleDescription(item._id)}
                      style={{ color: '#ff5722', cursor: 'pointer', marginLeft: '5px' }}
                    >
                      {isExpanded ? ' Show less' : ' Show more'}
                    </span>
                  )}
                </div>
              </div>
              <div className="productImageContainer">
                <img className='productImage' src={`${API_URL}/uploads/${item.image}`} alt={item.productName} onClick={() => {
                  setSelectedProduct(item) 
                  setShowModal(true)}}
                />
                {(() => {
                  const cartItem = cart.find(ci => ci._id === item._id);
                  return cartItem ? (
                    <div className="quantityControl">
                      <button onClick={() => decreaseFromCart(item._id)}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  ) : (
                    <div className="addButton" onClick={() => addToCart(item)}>ADD</div>
                  );
                })()}
              </div>
            </div>
          );
        })}
      </section>
      {cart.length > 0 && (
        <div className={`cartInfo visible`} onClick={goToCart}>
          <p>🛒 Cart: {cart.reduce((sum, item) => sum + item.quantity, 0)} items</p>
        </div>
      )}


      {showModal && selectedProduct && (
        <div className="modalOverlay" onClick={() => setShowModal(false)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${API_URL}/uploads/${selectedProduct.image}`}
              alt={selectedProduct.productName}
            />
            <h3>{selectedProduct.productName}</h3>
            <p>₹{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductMenu
