import React from 'react'
import { useResultContext } from '../Context/ContextResult'
import { useLocation } from 'react-router-dom'
import Pagination from './Pagination'
import Loading from './Loading'
import '../scss/ResultSearch.scss'
const Result = () => {
    let data = useResultContext()
    const location = useLocation()

    //pagination start
    let { currentPage } = useResultContext()
    let quatityDataainpages = 10  // quatity data in one pagination
    let indexOfLastPage = currentPage * quatityDataainpages  //so luong phan tu cuoi cung trong page vd Page4 = 20
    let indexOfFirstPage = (currentPage - 1) * quatityDataainpages //Vd Page4 = 15

    //pagination end




    if (data.loading) return <Loading />


    switch (location.pathname) {
        case '/search':
            var { results } = data.data
            return <div className='search-result'>
                {Array.isArray(results) ? results.slice(indexOfFirstPage, indexOfLastPage).map(({ title, link, description }, index) => {
                    return <div className='search-result-item' key={index}>
                        <div className='search-result__link'>{link.substr(0, 50)}</div>
                        <div className='search-result__title'><a href="{link}" className='search-result__link'>{title}</a></div>
                        <div className='search-result__desc'>{description}</div>

                    </div>

                }) : ""}
                {Array.isArray(results) ? <Pagination /> : ""}
            </div>

        case '/image':
            let { image_results } = data.data
            console.log('imageresult', image_results)
            console.log(Array.isArray(image_results))
            return <div className='image-result'>

                {Array.isArray(image_results) ?
                    image_results.map(({ image, link }, index) => {
                        return <div className='image-result-item' key={index}>
                            <div><img src={image.src} alt="sai duong dan" /></div>
                            <div>{link.href}</div>


                        </div>
                    })

                    : ""}


            </div>
        case '/news':
            let { entries } = data.data

            return <div className='news-result'>
                {Array.isArray(entries) ?
                    entries.map(({ link, title }, index) => {
                        return <div className='image-result-item' key={index}>
                            <div><a href={link}>{title}</a></div>
                            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae explicabo repellendus ipsa ut nulla voluptas accusantium magni omnis natus!</div>


                        </div>
                    })

                    : ""}

            </div>

        case '/video':
            let urlimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3I0MdOvq8aSDcOwopdYs1yOlEVbzfcnhYqA&usqp=CAU"
            let { results: result1 } = data.data
            console.log(result1)
            return <div>
                {Array.isArray(result1) ? result1.map(({ title, link, description }, index) => {
                    return <div className='video-result' key={index}>
                        <h3><a href={link}>{title}</a></h3>
                        <div><img src={urlimg} alt="" /></div>
                        <div className="video-description">
                            {description}
                        </div>


                    </div>
                }) : ""}

            </div>
        default:
            return "Error"
    }


}

export default Result