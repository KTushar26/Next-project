import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className=" relative w-dvw h-screen">
            <div className="bg-[url('/bg-pattern.svg')] bg-no-repeat bg-cover w-full h-[30rem]">
                <div className="
                 bg-no-repeat w-full flex flex-col items-center justify-center h-100 bg-blue-500">
                    <div className='text-2xl font-bold'>Simple, traffic based pricing </div>
                    <div>Sign-up for our 30 day trial.No credit card required</div>
                </div>
                <div className='absolute top-[50%] bg-red-200 h-[400px]'>
                    Content
                </div>
            </div>
        </div>
    )
}

export default Page