'use client';
import HumanBackground from '@/assets/human_studying.jpg';
import HumanBackground2 from '@/assets/human_studying_2.jpg'
import HumanBackground3 from '@/assets/human_studying_3.jpg';
import Badge from '@/components/atoms/Badge';
import CustomCheckbox from '@/components/atoms/CustomCheckbox';
import CustomLink from '@/components/atoms/CustomLink';
import Input from '@/components/atoms/Input';
import LockSvg from '@/components/atoms/LockSvg';
import LogoSvg from '@/components/atoms/LogoSvg';
import MainContainer from '@/components/atoms/MainContainer';
import SubmitButton from '@/components/atoms/SubmitButton';
import UserSvg from '@/components/atoms/UserSvg';
import ApplicationContextProvider from '@/components/molecules/ApplicationContextProvider';
import FacebooksButton from '@/components/molecules/FacebookButton';
import LineBreak from '@/components/molecules/LineBreak';
import MacButton from '@/components/molecules/MacButton';
import MobileHeader from '@/components/molecules/MobileHeader';
import Notifier from '@/components/molecules/Notifier';
import Recaptcha from '@/components/molecules/Recaptcha';
import ToolzButton from '@/components/molecules/ToolzButton';
import TwitterButton from '@/components/molecules/TwitterButton';
import CarouselSection from "@/components/organisms/CarouselSection";
import useLoginViewModel from '@/viewmodel/useLoginViewModel';

export default function Page() {
    const {username, password, setUsername, setPassword, login, error, success, toggleSuccess, setError} = useLoginViewModel();
    return (
        <ApplicationContextProvider>
            <MainContainer className="w-full flex-col lg:justify-start h-screen flex lg:flex-row">
                <MobileHeader />
                <CarouselSection images={[{
                    alt: 'Homem estudando em uma mesa grande com um computador e um caderno olhando concentrado para a tela do notebook',
                    src: HumanBackground
                }, {
                    alt: 'Homem estudando em uma mesa grande com um computador e um caderno olhando concentrado para a tela do notebook',
                    src: HumanBackground2
                }, {
                    alt: 'Homem estudando em uma mesa grande com um computador e um caderno olhando concentrado para a tela do notebook',
                    src: HumanBackground3
                }]} className="lg:w-1/2 h-full" />
                <section className="lg:w-[36%] h-full justify-between lg:justify-start flex flex-col p-6 xl:p-12 dark:bg-backgroundDarkColor z-10">
                    <div className='flex items-center justify-between'>
                        <LogoSvg />
                        <CustomLink className='text-lg hidden lg:flex lg:text-accent' href='#'>
                            Criar conta
                        </CustomLink>
                    </div>
                    <div className='lg:mt-16 mt-8 lg:mb-6'>
                        <h1 className='font-semibold text-xl lg:text-[32px] mb-4 dark:text-primary'>Boas-vindas!</h1>
                        <span className='text-terciary text-[16px] dark:text-terciaryDark lg:text-lg'>Entre utilizando uma das posições abaixo</span>
                    </div>
                    <div className='mt-6 flex justify-between lg:gap-x-4'>
                        <ToolzButton />
                        <FacebooksButton />
                        <MacButton />
                        <TwitterButton />
                    </div>
                    <LineBreak className='mt-12 mb-6' />
                    <span 
                    className={`text-errorColor flex justify-center transition-all ${error ? 'opacity-100': 'opacity-0'}`}>Usuário ou senha incorretos</span>
                    <form className='gap-y-5 flex flex-col'>
                        <Input
                            error={error} 
                            data={username} 
                            handleChange={(data) => {
                                setError(false);
                                setUsername(data as string);
                            }} 
                            type="text" 
                            label='Usuário' 
                            id='user' 
                            placeholder='Usuário' 
                            icon={<UserSvg></UserSvg>} />
                        <Input 
                            error={error} 
                            data={password} 
                            handleChange={data => {
                                setError(false);
                                setPassword(data as string);
                            }} 
                            type="password" 
                            label='Senha' 
                            id='password' 
                            placeholder='*******' 
                            icon={<LockSvg></LockSvg>} />
                        <CustomCheckbox className='hidden lg:flex' />
                    </form>
                    <div className='mt-8 lg:hidden'>
                        <SubmitButton onSubmit={login} />
                    </div>
                    <div className='mt-10 mb-6 lg:hidden'>
                        <CustomCheckbox />
                    </div>
                    <div className='items-center mt-8 hidden lg:flex justify-center mb-6'>
                        <Recaptcha />
                    </div>
                    <div className='hidden lg:block'>
                        <SubmitButton onSubmit={login} />
                    </div>
                    <div className='flex justify-center mt-6 lg:mt-12'>
                        <span className='text-terciary dark:text-terciaryDark text-[16px]'>Esqueceu sua senha? <CustomLink className='text-[16px] dark:text-primary text-black font-semibold lg:font-normal lg:text-accent lg:dark:text-accent' href='#'>Recuperar Senha</CustomLink></span>
                    </div>
                </section>
            </MainContainer>
            <Notifier preDisappering={() => {
                toggleSuccess();
            }} success={success}/>
        </ApplicationContextProvider>
    );
}