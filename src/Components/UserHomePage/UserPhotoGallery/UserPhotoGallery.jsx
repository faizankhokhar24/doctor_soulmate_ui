import React from 'react'
import './UserPhotoGallery.css'
import { FaUserAlt } from 'react-icons/fa';

const UserPhotoGallery = () => {
  return (
    <>
    <div>
        <h1>Photos</h1>
        <p>Upload at least one photo, Data shows that user with 3 photos or more are more likely to 
            succeed on Salams.
        </p>
    </div>
    <div>
        <div className='gallaryRow1User'>
            <div className='mainPhotoGallary'><FaUserAlt className='userPicIcon'/></div>
            <div>
                    <div className='firstRowSmPhotoGall'><FaUserAlt className='userPicIconRow1Col2'/></div>
                    <div className='firstRowSmPhotoGall'><FaUserAlt className='userPicIconRow1Col2'/></div>
            </div>
        </div>
        <div className='galleryRow2User'>
                <div className='firstRowSmPhotoGall'><FaUserAlt className='userPicIconRow1Col2'/></div>
                <div className='firstRowSmPhotoGall'><FaUserAlt className='userPicIconRow1Col2'/></div>
                <div className='firstRowSmPhotoGall'><FaUserAlt className='userPicIconRow1Col2'/></div>
        </div>
    </div>
    <div>
        <div>Privacy Settings</div>
        <div>
            <div>
                <p>Blur my photos</p>
                <p>Are you sure? Profiles are visible photos get 300% more matches.</p>

            </div>
            <div>

            </div>
        </div>
    </div>

    </>
  )
}

export default UserPhotoGallery