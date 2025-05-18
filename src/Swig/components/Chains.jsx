import React, {useState, useEffect} from 'react'
import { API_URL } from '../api'
import {Link} from 'react-router-dom'
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { FadeLoader } from "react-spinners";



const Chains = () => {

    const [vendorData, setVendorData] = useState([])
    const[scrollPosition, setScrollPosition] = useState(0)
    const [Loading, setLoading] = useState(true)

    const vendorFirmHandler = async () => {
      try {
        const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const newData = await response.json()
        setVendorData(newData)
        console.log("this is data",newData)
        setLoading(false)
      } catch (error) {
        alert("Error fetching data")
        console.log("Error fetching data", error)
        setLoading(true)
      }
    }
  useEffect(() => {
      vendorFirmHandler()
      const gallery = document.getElementById("chainGallery");

      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault(); 
          gallery.scrollLeft += e.deltaY; 
        }
      };
      
      gallery.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        gallery.removeEventListener("wheel", handleWheel);
      };
  }, [])

  
const handleScroll = (direction)=>{
  const gallery = document.getElementById("chainGallery");
  const scrollAmount = 500;

  if(direction === "left"){
    gallery.scrollTo({
      left: gallery.scrollLeft - scrollAmount,
      behavior: "smooth"
    })
  }else if(direction === "right"){
    gallery.scrollTo({
      left: gallery.scrollLeft + scrollAmount,
      behavior: "smooth"
    })
  }
}

  return (
    <>
    <div className='LoaderSection'>
      {Loading && <> <div className='loader'>
      Your 🍟 is Loading...
      </div>        
      <FadeLoader color="#ff6600" size={35} />
        </>   
      }
    </div>
  <div className='chainHead'>
    <h3>Top Restaurant Chains in India</h3>
    <div className="btnSection">
      <button onClick={()=>handleScroll("left")}><FaArrowLeft /></button>
      <button onClick={()=>handleScroll("right")}><FaArrowRight /></button>
    </div>     
  </div>
<section className='chainSection' id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
      {vendorData.vendors && vendorData.vendors.map((vendor) => {
        return(
          <div className="vendorBox" key={vendor._id || vendor.vendorName}>
          {vendor.firm.map((item)=>{
            return(
            <div key={item._id || item.firmName}>
              <div>{item.firmName}</div>
              <div className='firmImage' key={item.image}>
                <img src= {`${API_URL}/uploads/${item.image}`}/>
              </div>
            </div>
          
            )
          })}
        </div>
        )
      })}
</section>
    </>
  )
}

export default Chains 
