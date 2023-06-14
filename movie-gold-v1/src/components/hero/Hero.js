import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
    return (
        <Carousel>
            {movies.map((movie) => {
                return(
                    <Paper>
                        <div className='movie-card-container'>
                            <div className='movie-card'>
                                <div className='movie-poster'>
                                    <img src='movie.poster' />
                                </div>
                                <div className='movie-title'>
                                    <h4>{movie.title}</h4>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })

            }

        </Carousel>
    )

}

export default Hero;