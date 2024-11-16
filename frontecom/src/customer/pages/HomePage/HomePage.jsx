import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../data/Men/men_kurta';
const HomePage = () => {
  return (
    <>
        <div className=''>
          <MainCarousel />
          <div className='py-20 space-y-10 flex flex-col justify-center'>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
          </div>
          
        </div>

    </>
  )
}

export default HomePage