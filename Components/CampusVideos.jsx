/* eslint-disable jsx-a11y/iframe-has-title */
import './Style/campusvideos.css'

export default function CampusVideos(props) {
    
    const videos = ['-MCPJqC2Iy8', 'axb944xoerU', '1Qzr8jDWRVM']

    return (
        <>
            <div className='campuslife-box'>
                <div className='component-title'>campus life of skct</div>
                <div className='video-box-bg'>
                    <div className='video-box'>
                        {
                            videos.map(video => (
                                <div className='video'>
                                    <iframe src={`https://www.youtube.com/embed/${video}`} allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen='true' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
