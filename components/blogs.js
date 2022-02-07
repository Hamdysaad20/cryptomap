import React from "react";

function blogs() {
  return (
    <div className=''>
      <div
        className=' hover:drop-shadow-2xl hover:opacity-90  duration-500 mx-2 h-72 w-64 relative rounded-2xl mt-5 bg-no-repeat bg-center '
        style={{ backgroundImage: "url(/Btest1.png)" }}>
        <div>
          <div className=' duration-500  grid grid-cols-3 backdrop-blur-md bg-white/30 absolute bottom-4   rounded-xl right-0 h-28 left-0 px-2 mx-4'>
            <div className='cursor-pointer pt-3 text-right font-thin text-xs '>
              <h1 className='cursor-pointer bg-yellow-300/40  backdrop-blur-xl rounded-full text-center h-5'>
                {" "}
                كاتب المقالة
              </h1>
            </div>
            <div
              style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "800",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }}
              className='pt-3 col-span-2 text-right '>
              عنوان المقالة يوضع هنا
            </div>

            <div className='col-span-3 grid grid-cols-4'>
              <div className='  col-span-2 '>
                <div className=' gap-1 flex h-8 pt-2 pl-1 rounded-full text-center  duration-500 hover:backdrop-sepia-xl hover:bg-gray-200/20  '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='20'
                    height='20'>
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z' />
                  </svg>
                  <h1 className='cursor-pointer font-bold text-xs '>
                    {" "}
                    ١١ دقيقة قراءة
                  </h1>
                </div>
              </div>

              <div className='absolute text-center  right-2 cursor-pointer'>
                <div className=' p-1 h-6 w-6  text-center rounded-full duration-500 hover:bg-gray-300/20 cursor-pointer'>
                  <svg
                    className=''
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-bookmark'
                    viewBox='0 0 16 16'>
                    <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogs;
