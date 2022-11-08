import Section from '../Section/Section'
import Project from './Project'
import './Projects.css'

const Projects = () => {
    const info = 'Here you will find some of the personal projects '
    const link = [  'https://netflix-clone-movie-app.netlify.app/','https://elmontaser-acadmia.netlify.app/',
                    'https://e-commerce-app-store.netlify.app/','https://react-todo-list-s.netlify.app/',
                    'https://mahmoudhamdy12.github.io/Commerce-product-page/']
    return (
    <div className='projects' id='projects'>
        <div className='container'>
        <Section about={'PROJECTS'} info={info}/>
        <div className='project'>
        <Project link={link[0]} />
        <Project link={link[1]} />
        <Project link={link[2]} />
        <Project link={link[3]} />
        <Project link={link[4]} />
        </div>
        </div>
    </div>
    )
}

export default Projects