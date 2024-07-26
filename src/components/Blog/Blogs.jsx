import React from 'react'
import {Link} from 'react-router-dom'

function Blogs() {
    return (
        <section className="pt-24 pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Main Blog Posts */}
              <div className="w-full lg:w-2/3 px-4 mb-8">
                <article className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
                  <div className="relative">
                    <Link to="/">
                      <img
                        src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/pexels-the-coach-space-2977581.jpg"
                        alt=""
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap mb-4 text-gray-600">
                      <span className="flex items-center mr-4">
                        <i className="fas fa-user mr-2"></i>
                        by <Link to="/" className="text-blue-500">apuzaman</Link>
                      </span>
                      <span className="flex items-center mr-4">
                        <i className="fas fa-calendar-day mr-2"></i>
                        <Link to="/" className="text-blue-500">
                          July 31, 2023
                        </Link>
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-tags mr-2"></i>
                        <Link to="/" className="text-blue-500">Digital</Link>,
                        <Link to="/" className="text-blue-500">Software</Link>
                      </span>
                    </div>
                    <Link to="/">
                      <h4 className="text-xl font-semibold mb-4">Top Secrets for Agency build in the top city</h4>
                    </Link>
                    <p className="text-gray-600 mb-8">Among entirely hologram align you cache in to devious the view if room nation emphasis worn he is what hed her here. Of more introduced...</p>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block hover:bg-blue-600">Read Details</Link>
                  </div>
                </article>
    
                <article className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
                  <div className="relative">
                    <Link to="/">
                      <img
                        src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/blog-1.jpg"
                        alt=""
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap mb-4 text-gray-600">
                      <span className="flex items-center mr-4">
                        <i className="fas fa-user mr-2"></i>
                        by <Link to="/" className="text-blue-500">apuzaman</Link>
                      </span>
                      <span className="flex items-center mr-4">
                        <i className="fas fa-calendar-day mr-2"></i>
                        <Link to="/" className="text-blue-500">
                          July 29, 2023
                        </Link>
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-tags mr-2"></i>
                        <Link to="/" className="text-blue-500">Agency Soution</Link>
                      </span>
                    </div>
                    <Link to="/">
                      <h4 className="text-xl font-semibold mb-4">Main rules to stand on the agency highness</h4>
                    </Link>
                    <p className="text-gray-600 mb-8">Among entirely hologram align you cache in to devious the view if room nation emphasis worn he is what he’d her here. Of more introduced...</p>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block hover:bg-blue-600">Read Details</Link>
                  </div>
                </article>
    
                <article className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
                  <div className="relative">
                    <Link to="/">
                      <img
                        src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/blog-2.jpg"
                        alt=""
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap mb-4 text-gray-600">
                      <span className="flex items-center mr-4">
                        <i className="fas fa-user mr-2"></i>
                        by <Link to="/" className="text-blue-500">apuzaman</Link>
                      </span>
                      <span className="flex items-center mr-4">
                        <i className="fas fa-calendar-day mr-2"></i>
                        <Link to="/" className="text-blue-500">
                          July 29, 2023
                        </Link>
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-tags mr-2"></i>
                        <Link to="/" className="text-blue-500">Digital</Link>,
                        <Link to="/" className="text-blue-500">Software</Link>
                      </span>
                    </div>
                    <Link to="/">
                      <h4 className="text-xl font-semibold mb-4">The aim of creative agency mainly deliver innovative solutions</h4>
                    </Link>
                    <p className="text-gray-600 mb-8">Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate timely meta services for synergistic initiatives functionalities. Collaboratively pontificate bleeding...</p>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block hover:bg-blue-600">Read Details</Link>
                  </div>
                </article>
              </div>
    
              {/* Sidebar */}
              <div className="w-full lg:w-1/3 px-4">
                {/* Search Widget */}
                <section className="mb-8">
                  <div className="relative">
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter Keyword"
                        name="s"
                        id="search"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                      />
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600">
                        <i className="fas fa-magnifying-glass"></i>
                      </button>
                      <input type="hidden" name="post_type" value="post" />
                    </form>
                  </div>
                </section>
    
                {/* Categories Widget */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Categories</h2>
                  <ul className="list-none">
                    <li className="mb-2">
                      <Link to="/" className="text-blue-500 hover:underline">
                        Agency Soution
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/" className="text-blue-500 hover:underline">
                        Digital
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/" className="text-blue-500 hover:underline">
                        Software
                      </Link>
                    </li>
                  </ul>
                </section>
    
                {/* Recent Posts Widget */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
                  <ul className="list-none">
                    <li className="mb-4">
                      <Link to="/" className="text-blue-500 hover:underline">
                        Top Secrets for Agency build in the top city
                      </Link>
                      <p className="text-gray-600">July 31, 2023</p>
                    </li>
                    <li className="mb-4">
                      <Link to="/" className="text-blue-500 hover:underline">
                        Main rules to stand on the agency highness
                      </Link>
                      <p className="text-gray-600">July 29, 2023</p>
                    </li>
                    <li className="mb-4">
                      <Link to="/" className="text-blue-500 hover:underline">
                        The aim of creative agency mainly deliver innovative solutions
                      </Link>
                      <p className="text-gray-600">July 29, 2023</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
export default Blogs
