import React from 'react'
import InstaFeeds from '../../components/InstaFeeds'

const InstaPage = () => {
    return (
        <>
            <header className="App-header" style={{ textAlign: 'center' }}>
                <h1>Instagram Feed with Instagram API</h1>
            </header>

            <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
        </>
    );
}

export default App;