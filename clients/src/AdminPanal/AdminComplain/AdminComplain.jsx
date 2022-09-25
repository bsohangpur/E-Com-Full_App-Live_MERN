import React, { useEffect } from 'react';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux'
import { FetchComplain } from '../../container/Redux/Reducers/complainSlice';
import { MdSupportAgent, MdOutlinePending, MdIncompleteCircle } from 'react-icons/md';
import { FcSupport } from 'react-icons/fc'
import Loading from '../../constant/Loading/Loading';

const AdminComplain = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.complain);

  useEffect(() => {
    dispatch(FetchComplain())

  }, [dispatch])

  if (status === 'loading') {
    return (
      <div style={{height:"80vh"}} className="grid place-items-center">
        <Loading />
      </div>
    )
  }
  else if (status === 'idle') {
    return (
      <div className="">
        <div>
          <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
            <div class="px-4 md:px-10 mx-auto w-full">
              <div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div
                            class="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              class="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              All Complain
                            </h5>
                            <span class="font-semibold text-xl text-blueGray-700">
                              {data.length}
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div
                              class="text-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                            >
                              <MdSupportAgent />
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-blueGray-400 mt-4">
                          <span class="text-emerald-500 mr-2">
                            {/* <i class="fas fa-arrow-up"></i>  */}
                            3.48%
                          </span>
                          <span class="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div
                            class="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              class="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Pending
                            </h5>
                            <span class="font-semibold text-xl text-blueGray-700">
                              2,356
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div
                              class="text-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                            >
                              <MdOutlinePending />
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-blueGray-400 mt-4">
                          <span class="text-red-500 mr-2">
                            {/* <i class="fas fa-arrow-down"></i>  */}
                            3.48%
                          </span>
                          <span class="whitespace-nowrap"> Since last week </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div
                            class="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              class="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Completed
                            </h5>
                            <span class="font-semibold text-xl text-blueGray-700">
                              924
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div
                              class="text-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                            >
                              <FcSupport />
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-blueGray-400 mt-4">
                          <span class="text-orange-500 mr-2">
                            {/* <i class="fas fa-arrow-down"></i>  */}
                            1.10%
                          </span>
                          <span class="whitespace-nowrap"> Since yesterday </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div
                            class="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              class="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Under Progress
                            </h5>
                            <span class="font-semibold text-xl text-blueGray-700">
                              49,65%
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div
                              class="text-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-200"
                            >
                              <MdIncompleteCircle />
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-blueGray-400 mt-4">
                          <span class="text-emerald-500 mr-2">
                            {/* <i class="fas fa-arrow-up"></i>  */}
                            12%
                          </span>
                          <span class="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <div class="flex flex-wrap mt-4">
              <div class="w-full mb-12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                  <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 class="font-semibold text-lg text-blueGray-700">
                          All Complain Detail
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="block w-full overflow-x-auto">
                    <Table data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <h1>Something went wrong</h1>
    )
  }
}

export default AdminComplain
