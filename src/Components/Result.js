import React, { useRef } from 'react'
import { useResultContext } from '../Context/ContextResult'
import { useLocation } from 'react-router-dom'
import Pagination from './Pagination'
import Loading from './Loading'
import '../scss/ResultSearch.scss'
import '../scss/ResultNews.scss'
import '../scss/ResultImage.scss'
const Result = () => {
    let data = useResultContext()
    const location = useLocation()
    let refvideo = useRef()

    //pagination start
    let { currentPage } = useResultContext()
    let quatityDataainpages = 10  // quatity data in one pagination
    let indexOfLastPage = currentPage * quatityDataainpages  //so luong phan tu cuoi cung trong page vd Page4 = 20
    let indexOfFirstPage = (currentPage - 1) * quatityDataainpages //Vd Page4 = 15

    //pagination end
    //handle play video
    function handlePlayVideo() {

    }



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
                        return <a className='image-result-item'
                            href={link.href}
                            key={index}>
                            <img src={image.src} alt="sai duong dan" />
                            <div className='image-result-link'>{link.href.substr(29, 30)}</div>


                        </a>
                    })

                    : ""}


            </div>
        case '/news':
            let { entries } = data.data

            return <div className='news-result'>
                {Array.isArray(entries) ?
                    entries.slice(indexOfFirstPage, indexOfLastPage).map(({ link, title }, index) => {
                        return <div className='news-result-item' key={index}>
                            <div className='news-result-item__title'><a href={link}>{title}</a></div>
                            <div className="news-result-item__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae explicabo repellendus ipsa ut nulla voluptas accusantium magni omnis natus!</div>


                        </div>
                    })

                    : ""}
                {Array.isArray(entries) ? <Pagination /> : ""}
            </div>

        case '/video':

            let { items: result1 } = data.data
            console.log(result1)
            return <div>
                {Array.isArray(result1) ? result1.map(({ thumbnails, title, url, author, uploadedAt }, index) => {
                    return <div className='video-result' key={index}>
                        <div className="video-result__connect">
                            <div className="connect-video__link">{url}</div>
                            <div className="connect-video-title">{title}</div>
                        </div>
                        <iframe src="https://youtube.com/embed/E00v8ebUNgs"
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            title={index}
                        ></iframe>



                    </div>
                }) : ""
                }

            </div >
        default:
            return "Error"
    }


}

export default Result