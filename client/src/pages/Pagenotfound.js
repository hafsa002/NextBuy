import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layout/Layout';


const  Pagenotfound = () => {
    return (
       <Layout title = 'Go back- NextBuy'>
            <div className='pnf'>
                <h1 className='pnf-title '>404</h1>
                <h3 className='pnf-subtitle'> Page Not Found!!  </h3>
                <Link to = "/" className='pnf-btn'>Go Back</Link>
            </div>
        </Layout>
    );
};

export default Pagenotfound;