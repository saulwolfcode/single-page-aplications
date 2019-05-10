import React from 'react';
const Products = props=>{ 
    // console.log(props.data)   
    const products=props.data.map((product, i)=>{
                  { 
                    const lPrice = product.price.listPrice
                    const sPrice = product.price.sellingPrice
                    if(lPrice>sPrice){
                        let desc=lPrice-sPrice
                        console.log("el descuento es:"+desc)
                    }else{
                        console.log("no hay descuento:")
                    }
                }
        return(
            <div className="card" key={i}>
                    <div className="card__img">
                        <a href={product.href}>
                            <img src={`images/${product.image}`} alt={product.title}/>
                        </a>
                    </div>
                    <div className="card__off">
                     <span className="card__off--price">
                       20%
                     </span>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title">
                           {product.title}
                        </h3>
                        <div className="card__subtitle">
                            $ {product.price.listPrice}
                        </div>
                        <div className="card__footer">
                            <div className="card__footer-text">
                            $ {product.price.sellingPrice}
                            </div>
                        </div>
                    </div>
                </div>
        )
      })
      return (
        <main className="main-grid">
            <div className="cards-grid">
                {products}
            </div>
        </main>
      )
}
export default Products;


