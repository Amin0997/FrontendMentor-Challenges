import successImg from '../assets/images/icon-success.svg'

export default function SuccessfulSubscribing() {
    return (
        <main className="w-[505px] h-[520px] bg-white rounded-[35px] p-12 px-16 font-roboto">
            <img src={successImg} alt="" />
            <h2 className='mt-10 text-[62px] font-bold tracking-tighter leading-[55px]'>Thanks for subscribing!</h2>
            <p className='mt-7 text-base text-blue-950'>A confirmation email has been sent to <span className='font-bold tracking-tight'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button className='mt-10 h-14 w-full bg-darkSlateGrey rounded-xl text-white font-bold
                                hover:bg-gradient-to-r hover:from-[rgb(226,58,128,1)] hover:to-[rgb(255,98,87,1)] hover:shadow-btnShadow active:scale-95'>Dismiss message</button>
        </main>
    )
}
