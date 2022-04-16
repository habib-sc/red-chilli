import React from 'react';
import './HomeSearch.css';

const HomeSearch = () => {
    return (
        <div>
            <div className='rc-search-bg container-fluid text-center d-flex flex-column justify-content-center'>
                <h1>Best Foods Waitting For You</h1>
                <div className='rc-home-input-group mb-3 mx-auto d-flex'>
                    <input type="text" placeholder='Search Food Items' className='rc-home-input border-0 form-control rounded-pill' />
                    <button className='rc-home-button btn btn-danger rounded-pill px-4'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;