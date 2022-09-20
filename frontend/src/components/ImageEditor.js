import React, { useState } from 'react'
import DEFAULT_OPTIONS from './DefaultOptions';

const ImageEditor = () => {

    const [options, setOptions] = useState(DEFAULT_OPTIONS);
    const [mainImg, setMainImg] = useState("");

    function getImageStyle() {
        const filters = options.map((option) => {
          return `${option.property}(${option.value}${option.unit})`;
        });
    
        // filters.push(`url(${mainImg})`);
        // console.log({ filter: filters.join(" ") });
    
        return { filter: filters.join(" "), backgroundImage: `url(${mainImg})` };
      }

  return (
    <div>
        <div>
            <h1 className="text-center">Image Editor with Custom Filter Creation</h1>
        </div>
        <div className='row'>
            <div className="col-2">
                <div className='card'>
                    <img src='' className='card-img-top' />
                </div>
            </div>
            <div className="col-8">
                <div className='card'>
                    <div className='card-body'>
                    <div className="editor-image" style={getImageStyle()} />
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    </div>
  )
}

export default ImageEditor;