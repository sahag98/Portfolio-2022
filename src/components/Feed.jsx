import React from 'react'
import styled from 'styled-components'

const Feed = (props) => {
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
    const Image = styled.img`
        height:490px;
        width:  490px;
        border-radius: 5px;
        margin:25px;
         //padding:15px;
          box-shadow: rgba(186, 186, 186, 0.65) 0px 5px 10px;
        z-index: 1;
        @media (max-width: 768px) {
            margin:0;
            height: 350px;
        width:  350px;
        margin:25px;
        box-shadow: none;
        border-radius: 5px;
          }
          @media (max-width: 380px) {
        margin:25px;
        height: 250px;
        width:  250px;
        border-radius: 5px;
      }
      `;

    const Caption = styled.p`
        width: 30%;
        font-size:12px;
    `

    const ImageContainer = styled.div`
        display: flex;
        flex-direction:column;
    `
    const Video = styled.video`
        height:490px;
        width:  490px;
        border-radius: 5px;
        margin:25px;
        //padding:15px;
        box-shadow: rgba(186, 186, 186, 0.65) 0px 5px 10px;
        z-index: 1;
        @media (max-width: 768px) {
            margin:0;
            height: 350px;
        width:  350px;
            margin:25px;
            box-shadow: none;
            border-radius: 5px;
        }
        @media (max-width: 380px) {
        margin:25px;
        height: 250px;
        width:  250px;
        border-radius: 5px;
      }
    `;
    const { id, caption, media_type, media_url } = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <a href="https://www.instagram.com/mariarenejewels/" target="_blank">
                    <Video
                        id={id}
                        src={media_url}
                        type="video/mp4"
                        controls playsinline>
                    </Video>
                </a>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <a href="https://www.instagram.com/mariarenejewels/" target="_blank">
                    <Image
                        load="lazy"
                        id={id}
                        src={media_url}
                        alt={caption}
                    />
                </a>
            );
            break;
        default:
            post = (

                <Image
                    load="lazy"
                    id={id}
                    src={media_url}
                    alt={caption}
                />

            );
    }

    return (
        <>
            {post}
        </>
    );
}

export default Feed;