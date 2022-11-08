import './Section.css'
const Section = ({about,info}) => {
  return (
    <div className='section text-center '>
            <p className='fs-1 fw-bold'>{about}</p>
            <p className='fs-4'>{info}</p>
    </div>
  )
}

export default Section