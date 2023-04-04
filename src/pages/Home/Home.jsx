import React, { useEffect, useState } from 'react'
import Header from "../../containers/Header/Header";
import Card from "../../components/Card/Card";

import "./Home.scss";
import Footer from "../../containers/Footer/Footer";
import PaginationTable from "../../components/PaginationTable/PaginationTable";

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";



const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostsPerPage ] = useState(16);

    useEffect(() => {
        fetch(URL)
          .then(res => res.json())
          .then(response => {
            setIsLoaded(true);
            setData(response);
        })
          .catch(err => {
                setIsLoaded(true);
                setError(err);
          });
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);


    // let num = currentPosts.slice(1, 5)

    return (
        <div className="Home">
            <Header />
            
            <div className="flex justify-between flex-wrap container">
                {
                    error ? <h2 className="loadMessage">Error: {error.message}</h2> :
                    !isLoaded ? <h2 className="loadMessage">Loading...</h2> :
                    currentPosts.map(el => {
                        return (
                                <Card
                                    currentPosts={currentPosts}
                                    key={el.id}
                                    id={el.id}
                                    symbol={el.symbol}
                                    name={el.name}
                                    image={el.image}
                                    price={el.current_price}
                                    ath={el.ath}
                                />
                            )
                    })
                }


            </div>

                <PaginationTable
                    totalPosts={data.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />

            <Footer />
        </div>
    )
}

export default Home;
