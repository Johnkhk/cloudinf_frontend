import React, { useState } from 'react';
import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// axios.defaults.baseURL = 'django-env38.eba-bqym8ypp.us-west-2.elasticbeanstalk.com/';
axios.defaults.baseURL = 'http://cloudinf11-nc-env.eba-syys7q3t.us-west-1.elasticbeanstalk.com/';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true

const Summarizer = () => {
    const [isSending, setIsSending] = useState(false)
    const [context, setContext] = useState("");
    const [summary, setSummary] = useState("");

    // const sendRequest = useCallback(async () => {
    // const sendRequest = useCallback(async () => {
    const sendRequest = () => {
        console.log("sending req")
        // console.log(axios.defaults.baseURL)
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        // await API.sendRequest()
        // axios.post('/api/summarizer', {content: "LMFAO", requested_at: Date.now() },{withCredentials: true})
        console.log({content: context, requested_at: Date.now() })
        axios.post('/api/summarizer', {content: context, requested_at: Date.now() })

        .then(response =>{
            // console.log("cool")
            console.log(response.data.summary)
            setSummary(response.data.summary)
            // setSummary(response.data.)
        })
        // once the request is sent, update state again
        setIsSending(false)
    }
    //   }, [isSending]) // update the callback if the state changes
    


    return (
        <>
            <div className="flex flex-col h-screen "> 
                <div className="flex flex-col h-screen">

                <div className="grid grid-cols-2 gap-1 h-1/2">
                    <div className="flex justify-center h-full">
                        {/* <div className="mb-3 xl:w-96"> */}
                        {/* <div className="mb-3 w-screen"> */}
                        <div className="mb-3 w-9/12 h-full">



                            <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                            >Enter Text To Summarize</label
                            >
                            <textarea
                            value={context} onChange={(e) => setContext(e.target.value)}
                            className="
                                form-control
                                block
                                w-full
                                h-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"
                            ></textarea>
                        </div>
                    </div>
                    {/* {sss} */}
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                    </button> */}
                    <div className="flex justify-center ">
                        {/* <div className="mb-3 xl:w-96"> */}
                        {/* <div className="mb-3 w-screen"> */}
                        <div className="mb-3 w-9/12 h-full">



                            <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                            >Output Text</label
                            >
                            <textarea
                            value={summary} //onChange={(e) => setContext(e.target.value)}
                            className="
                                read-only
                                form-control
                                block
                                w-full
                                h-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            // placeholder="Your message"
                            disabled readOnly
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your Summary"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isSending} onClick={sendRequest}>
                        Summarize
                    </button>
                </div>
                
                </div>

            </div>
        </>
    )
}
export default Summarizer