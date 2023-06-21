import htmlImage from './images/html.png';
import cssImage from './images/css.png';
import javascriptImage from './images/js.png';
import reactImage from './images/react.png';
import './Exercise1-ImageComponent.css'

export const Exercise1_ImageComponent = () => {
  return (
    <div className='frontend-techs'>
      <h2>
        Front End Technologies
      </h2>
      <div className='images'>
      <img src={htmlImage} alt="html logo" />
      <img src={cssImage} alt="css logo" />
      <img src={javascriptImage} alt="javascript logo" />
      <img src={reactImage} alt="react logo" />
      </div>
    </div>
  )
}
