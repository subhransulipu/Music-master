/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Artist =({artist})=>{

    if (!artist) return null;
    // const{name,followers,genres,images} = artist;
    return(
        <div>
            <h2>{artist.name}</h2>
            <p >{artist.followers.total} followers</p>
            <p>{artist.genres.join(',')}</p>
            <img 
            src={artist.images[0].url}
            style={{
                width:200,
                height:200,
                borderRadius:100,
                objectFit:'cover'
            }}
            />

          
        </div>
    )

}
export default Artist;