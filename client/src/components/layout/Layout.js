import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import {Helmet} from "react-helmet";


const  Layout = ({children, title, description, keywords, author}) => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content= {description}/>
                <meta name="keywords" content= {keywords} />
                <meta name="author" content= {author} />


                
            </Helmet>

            <Header/>
            <main style = {{minHeight: '76vh'}}>
            {children}
            </main>

          <Footer/>
        </div>
    );
};

export default Layout;
Layout.defaultProps = {

    title: "NextBuy eCommerce Store",
    description: "Its a online eCommerce store for daily necessary items",
    keywords: "eCommerce, store, online, daily items",
    author: "Hafsa",


};