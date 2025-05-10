import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from '../src/ProductCard';
function App() {
  const[products,setProducts]=useState([]);
  const[currentPage,setCurrentPage]=useState(0);
  const PAGE_SIZE=10;
   const totalSize=products.length;
   const noofpages=Math.ceil(totalSize/PAGE_SIZE);
   const start=currentPage+PAGE_SIZE;
   const end=start+PAGE_SIZE;

  const fetchData= async()=>{
  const data=await fetch('https://dummyjson.com/products?limit=500');
  const totaldata=await data.json();
    setProducts(totaldata.products);
  }
   const handlePagechange=(n=>{
   setCurrentPage(n);
   })
useEffect(()=>{
fetchData();
  },[]);

   
  return (
    <>
    <h1>Pagination</h1>
    <div className='elements'>{[...Array(noofpages).keys().map((n)=>(
      <span className='page-number' key={n} onClick={()=>handlePagechange(n)}>{n}</span>
    ))]}</div>
    <div className="App">
       {
           products.slice(start,end).map((p)=>(
           <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>
           ))}
    </div>
    </>
  );
}
export default App;
