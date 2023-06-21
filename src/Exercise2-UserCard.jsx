import userImage from './images/peculiar.jpg';
import './Exercise2-UserCard.css'

export const Exercise2_UserCard = () => {
  return (
    <div className='user-card'>
        <main>
            <img src={userImage} alt="peculiar image" />
            <h2>PECULIAR OGEDE</h2>
            <p className='title'>Frontend Developer, Nigeria</p>
            <h2 className='skills'>SKILLS</h2>
            <section className='skills-section'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>React</p>
            <p>Git</p>
            </section>
        </main>
    </div>
  )
}
