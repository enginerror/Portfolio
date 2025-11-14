import bgVideo from '../../assets/bg-video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src={bgVideo}></video>
    </div>
  )
}

export default Video