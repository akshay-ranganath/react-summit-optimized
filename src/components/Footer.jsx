import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation } from 'cloudinary-react'
import { ReactComponent as IconTelephone } from 'bootstrap-icons/icons/telephone.svg'
import { ReactComponent as IconEnvelope } from 'bootstrap-icons/icons/envelope.svg'
import { ReactComponent as IconBriefcase } from 'bootstrap-icons/icons/briefcase.svg'
import { ReactComponent as IconBadgeAd } from 'bootstrap-icons/icons/badge-ad.svg'
import { ReactComponent as IconGift } from 'bootstrap-icons/icons/gift.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid bg-primary'>
          <div className='row '>
            <div className='col-md-9 py-3 text-white'>
              Get connected with us on social networks!
            </div>
            <div className='col-md-3 py-3 text-center text-white'>
              <Link to='/' title='Apple'>
                <FontAwesomeIcon icon={faApple} className='text-light mr-3' />
              </Link>
              <Link to='/' title='Windows'>
                <FontAwesomeIcon icon={faWindows} className='text-light mr-3' />
              </Link>
              <Link to='/' title='Android'>
                <FontAwesomeIcon icon={faAndroid} className='text-light mr-3' />
              </Link>
              |
              <Link to='/' title='Twitter'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='text-light ml-3 mr-3'
                />
              </Link>
              <Link to='/' title='Facebook'>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className='text-light mr-3'
                />
              </Link>
              <Link to='/' title='Instagram'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='text-light mr-3'
                />
              </Link>
              <Link to='/' title='Youtube'>
                <FontAwesomeIcon icon={faYoutube} className='text-light mr-3' />
              </Link>
            </div>
          </div>
        </div>
        <div className='container-fluid bg-dark text-white'>
          <div className='row '>
            <div className='col-md-3 py-3'>
              <div className='h6'>Company Name</div>
              <hr />

            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Products</div>
              <hr />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Electronics
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Mobiles
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Car & bike
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Super Market
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Policy</div>
              <hr />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Return Policy
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Security
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Privacy
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Address</div>
              <hr />
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title='Phone'>P:</abbr> (123) 456-7890
              </address>
              <div className='h6'>Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
              <IconEnvelope /> info@email.com
            </div>
          </div>
        </div>
        <div className='container-fluid bg-secondary text-white text-center'>
          <div className='row'>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                <IconBriefcase className='text-warning' /> Partner with us
              </Link>
            </div>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                <IconBadgeAd className='text-info' /> Advertise
              </Link>
            </div>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                <IconGift className='text-dark' /> Gift
              </Link>
            </div>
            <div className='col-md-3 py-2'>
              ?? 2009-{new Date().getFullYear()} React-E-Commerce.com
            </div>
            <div className='col-md-3 py-2 bg-white'>
              <Image cloudName='dbmataac4' publicId='workshop/payment/american_express' american_express width='32' height='32' alt='American Express' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/maestro' width='32' height='32' alt='Maestro' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/netbanking' width='32' height='32' alt='Net Banking' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/paypal' width='32' height='32' alt='PayPal' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/rupay' width='32' height='32' alt='RU Pay' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/upi' width='32' height='32' alt='UPI' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>

              <Image cloudName='dbmataac4' publicId='workshop/payment/visa' width='32' height='32' alt='Visa' className='mr-2'>
                <Transformation fetchFormat='auto' quality='auto' width='32' height='32' crop='scale' />
              </Image>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
