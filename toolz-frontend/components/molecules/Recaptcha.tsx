import RecaptchaLogo from "../atoms/RecaptchaLogo";

export default function Recaptcha() {
    return <div className='border-captchaBorder bg-captcha border items-center hidden lg:w-[454px] lg:flex pl-4 justify-between'>
        <div className='flex gap-x-5 items-center'>
            <div className='w-8 h-8 rounded-[4px] border-captchaCheckboxBorder border' />
            <span className='font-normal text-sm text-captchaHumanText'>I am a human</span>
        </div>
        <div className='flex flex-col items-end pr-4'>
            <div className='mr-2'>
                <RecaptchaLogo />
            </div>
            <span className='text-[12px] text-captchaHumanText'>Privacy - Terms</span>
        </div>
    </div>
}