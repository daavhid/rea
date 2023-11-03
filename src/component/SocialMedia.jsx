
import React from 'react'
import { facebook, instagram, linkedIn, twitter } from '../assets'

const SocialMedia = () => {
  return (
    <div className='flex justify-center md:justify-start mt-12 gap-6'>
        <a href="https://www.linkedin.com"
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 duration-500'>
            <img src={linkedIn} alt="linkedin" />
        </a>
        <a href="https://www.linkedin.com"
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 duration-500'>
            <img src={facebook} alt="linkedin" />
        </a>
        <a href="https://www.linkedin.com"
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 duration-500'>
            <img src={twitter} alt="linkedin" />
        </a>
        <a href="https://www.linkedin.com"
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 duration-500'>
            <img src={instagram} alt="linkedin" />
        </a>
    </div>
  )
}

export default SocialMedia
































// import React from 'react'
// import { facebook, instagram, linkedIn, twitter } from '../assets'

// const SocialMedia = () => {
//   return (
//     <div className='flex justify-center md:justify-start my-10 gap-7'>
//         <a
//             href="https://www.linkedin.com"
//             target='_blank'
//             rel='noreferrer'
//             className='hover:opacity-50 duration-500'
//         >
//             <img src={linkedIn} alt="linkedin" />
//         </a>
//         <a
//             href="https://www.facebook.com"
//             target='_blank'
//             rel='noreferrer'
//             className='hover:opacity-50 duration-500'
//         >
//             <img src={facebook} alt="linkedin" />
//         </a>
//         <a
//             href="https://www.instagram.com"
//             target='_blank'
//             rel='noreferrer'
//             className='hover:opacity-50 duration-500'
//         >
//             <img src={instagram} alt="linkedin" />
//         </a>
//         <a
//             href="https://www.twitter.com"
//             target='_blank'
//             rel='noreferrer'
//             className='hover:opacity-50 duration-500'
//         >
//             <img src={twitter} alt="linkedin" />
//         </a>
        
//     </div>
//   )
// }

// export default SocialMedia