import React from 'react'

function Items({item}) {
  return item.length>0 ? (
    <div className="row justify-content-center">
        {
            item.map(p=>(
                <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={p.id}>
                    <div className="portfolio-item mx-auto">
                        <div className="overlay"><i className="fa-solid fa-plus"></i></div>
                        <img className=' w-100' src={p.img} alt="" />
                    </div>
                </div>
            ))
        }
    </div>
  ) :null;
}

export default Items