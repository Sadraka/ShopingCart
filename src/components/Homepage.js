import React, { Component } from 'react';
import Banner from "./Homepageco/Banner"
import Cards from "./Homepageco/Cards"
import Searchbox from "./Homepageco/Searchbox"
import Support from "./Homepageco/Support"
class Homepage extends Component {
    render() {
        return (
            <div>

                <Banner />
                <Cards />
                <Searchbox />
                <Support />



            </div>
        );
    }
}

export default Homepage;