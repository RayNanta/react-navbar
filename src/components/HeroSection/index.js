import React from 'react'
import Video from '../../videos/earth.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'
import { IoIosArrowForward } from "react-icons/io";


const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Halo! Ini Section Home.</HeroH1>
            <HeroP>
                Hidup sehat, finansial kuat, orang dalam <br></br>
                merapat.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup">
                    Ini Tombol Dummy <IoIosArrowForward />
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;