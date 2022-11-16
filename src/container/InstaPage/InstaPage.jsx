import React from 'react'
import InstaFeeds from '../../components/InstaFeeds'

const InstaPage = () => {
    return (
        <>
            <header style={{ textAlign: 'center' }}>
                <h1>Instagram Feed</h1>
            </header>
            <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
        </>
    );
}

export default InstaPage;