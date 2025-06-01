import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from '../src/ProductCard';
import { useMemo } from 'react';

function App() {
  const[products,setProducts]=useState([]);
  const[currentPage,setCurrentPage]=useState(0);
  const[loading,setLoading]=useState(true);
  const PAGE_SIZE=10;
  const totalSize=products.length;
  const noofpages=Math.ceil(totalSize/PAGE_SIZE);
  
const PaginationProduct=useMemo(()=>{
  const start=currentPage*PAGE_SIZE;
  const end=start+PAGE_SIZE;
  return products.slice(start, end);
  },[products,currentPage]);

  const fetchData= async()=>{
  const data=await fetch('https://dummyjson.com/products?limit=500');
  const totaldata=await data.json();
    setProducts(totaldata.products);
    setLoading(false);
  }
   const handlePagechange=(n=>{
   setCurrentPage(n);
   })

   useEffect(()=>{
    fetchData();
     },[]);

  if(loading){
    return <div>Loading...</div>
  } 
  return (
    <>
    <h1 className='heading'>Pagination</h1>
    <div className='elements'>{[...Array(noofpages).keys().map((n)=>(
      <span  className={`page-number ${n === currentPage ? 'active' : ''}`} key={n} onClick={()=>handlePagechange(n)}>{n}</span>
    ))]}</div>
    <div className="App">
       {
           PaginationProduct.map((p)=>(
           <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>
           ))}
    </div>
    </>
  );
}
export default App;
