import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://4.imimg.com/data4/GA/NC/MY-19005152/handicraft-products-500x500.jpg'
                    title='Hand Made with Heart!'
                    comment='25% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://5.imimg.com/data5/SELLER/Default/2022/9/IB/MT/HP/114016618/iron-decorative-showpiece-figurine-500x500.jpg'
                    title='Excellence in Artistic crafts!'
                    comment='View More'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection