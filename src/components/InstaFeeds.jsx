import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Feed from './Feed'

// import './instaFeeds.css'

const InstaFeeds = ({ token, ...props }) => {

    const Container = styled.div`
    flex: 4;
    flex-wrap: wrap;
    margin:5px;
    display:flex;
    justify-content: center;
    
    @media (max-width: 767px) {
        /* height:190vh; */
        margin:0;
      }
      @media (width: 280px) {
        /* height:430vh; */
        margin:0;
      }
  `;
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;
    console.log(feeds)

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost() {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            }
        }

        // manually call the fecth function 
        fetchInstagramPost();

        return () => {
            // cancel pending efetch request on component unmount
            abortController.abort();
            console.log("abort")
        };
    }, [props.limit, token])

    return (
        <Container className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </Container>
    );
}

export default InstaFeeds;