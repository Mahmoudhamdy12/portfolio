import { RiEyeCloseLine } from 'react-icons/ri';
import image from '../../Images/image.png'
const Project = ({link}) => {
  return (
    <div className='image'>
      <div><a href={link} target='blank'><RiEyeCloseLine/></a></div>
      <input type="image" img src = {image} alt="photo" />
    </div>
  )
}

export default Project