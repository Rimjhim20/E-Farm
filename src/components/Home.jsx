import React from 'react'
import DATA from '../Data';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const cardItem = (item) => {
        return (
          <div className="card my-5 py-4" key={item.id} style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="lead">${item.price}</p>
              <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
                Buy Now
              </NavLink>
            </div>
            
          </div>
        );
      };
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/farmers.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/cereal-grains-crops.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/crops.jpeg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/co.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        
          <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
                    </div>
                    )
}

                    export default Home
