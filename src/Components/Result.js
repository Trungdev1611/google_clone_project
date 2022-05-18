import React from 'react'
import { useResultContext } from '../Context/ContextResult'
import { useLocation } from 'react-router-dom'
import Pagination from './Pagination'
import Loading from './Loading'
import '../scss/ResultSearch.scss'
import '../scss/ResultNews.scss'
import '../scss/ResultImage.scss'
import '../scss/styleResultvideo.scss'
import NotFound from './NotFound'
const Result = () => {
    let data = useResultContext()
    const location = useLocation()

    //pagination start
    let { currentPage } = useResultContext()
    let quatityDataainpages = 10  // quatity data in one pagination
    let indexOfLastPage = currentPage * quatityDataainpages  //so luong phan tu cuoi cung trong page vd Page4 = 20
    let indexOfFirstPage = (currentPage - 1) * quatityDataainpages //Vd Page4 = 15



    if (data.loading) return <Loading />


    switch (location.pathname) {
        case '/search':
            var { results } = data.data
            console.log(results)
            return <div className='search-result'>


                {Array.isArray(results) ? (results.length) ?
                    results.slice(indexOfFirstPage, indexOfLastPage).map(({ title, link, description }, index) => {
                        return <div className='search-result-item' key={index}>
                            <div className='search-result__link'>{link.substr(0, 50)}</div>
                            <div className='search-result__title'><a href="{link}" className='search-result__link'>{title}</a></div>
                            <div className='search-result__desc'>{description}</div>

                        </div>

                    }) : <NotFound />
                    : ""}
                {Array.isArray(results) && results.length ? <Pagination /> : ""}
            </div>

        case '/image':
            let { image_results } = data.data
            console.log('imageresult', image_results)
            console.log(Array.isArray(image_results))
            return <div className='image-result'>

                {Array.isArray(image_results) ? image_results.length > 0 ?
                    image_results.map(({ image, link }, index) => {
                        return <a className='image-result-item'
                            href={link.href}
                            key={index}>
                            <img src={image.src} alt="sai duong dan" />
                            <div className='image-result-link'>{link.href.substr(29, 30)}</div>


                        </a>
                    }) : <NotFound />

                    : ""}


            </div>
        case '/news':
            let { entries } = data.data
            console.log('entries', entries)
            return <div className='news-result'>
                {Array.isArray(entries) ? entries.length > 0 ?
                    entries.slice(indexOfFirstPage, indexOfLastPage).map(({ link, title }, index) => {
                        return <div className='news-result-item' key={index}>
                            <div className='news-result-item__title'><a href={link}>{title}</a></div>
                            <div className="news-result-item__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae explicabo repellendus ipsa ut nulla voluptas accusantium magni omnis natus!</div>


                        </div>
                    }) : <NotFound />

                    : ""}
                {Array.isArray(entries) && entries.length > 0 ? <Pagination /> : ""}
            </div>

        case '/video':

            let { items: result1 } = data.data
            console.log(result1)
            return <div className='video-result'>
                {Array.isArray(result1) && result1.length > 0 ? result1.map(({ description, title = 'How to Get Away with Murder', url, author, uploadedAt, id = 'azq0S0DKS50' }, index) => {
                    console.log(description)
                    return <div className='video-result-item' key={index}>

                        <a className="video-result__connect" href={url}>
                            <div className="connect-video__link">{"www.youtube.com>watch"}</div>
                            <div className="connect-video-title">{`${title.substr(0, 30)} - YouTube`}</div>
                        </a>
                        <div className="video-result__desc">
                            <div className="video">
                                <iframe src={`https://youtube.com/embed/${id}`}

                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                    title={index}
                                ></iframe>
                            </div>
                            <div className='desc'>
                                <div className="desc-article">
                                    {description ? description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.."}
                                </div>
                                <p>{uploadedAt}</p>
                            </div>

                        </div>



                    </div>
                }) : ""
                }

            </div >
        default:
            return "Error"
    }


}

export default Result