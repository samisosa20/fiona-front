import Image from 'next/image';
import Link from 'next/link';
import { Controller } from 'react-hook-form';

// Assets
import imgLogo from '../../../../../public/img/logo.png';

//components
import useComponents from '@/share/components';

export default function Register(props: any) {
  const { Button, Typography, Input, FormControl } = useComponents();

  const { handleSubmit, onSubmit, control } = props;

  return (
    <div className='flex items-center flex-col justify-center h-screen bg-primary space-y-4'>
      <Image src={imgLogo} alt='Logo fiona' />
      <div className='bg-white rounded-2xl border shadow-x1 py-8 2xl:py-10 px-8 max-w-[90vw] md:max-w-lg'>
        <div className='flex flex-col items-center space-y-4'>
          <Typography variant='h1' className='text-center'>
            Olvidaste tu contraseña?
          </Typography>
          <Typography variant='p' className='w-5/6 text-center'>
            No te preocupes solo ingresa tu correo electronico y nosotros haremos el resto por ti.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            
            <Controller
              name={'email'}
              control={control}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <FormControl fieldState={fieldState}>
                  <Input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => {
                      onChange(e);
                    }}
                    iserror={!!fieldState.error}
                    value={value}
                  />
                </FormControl>
              )}
            />
            <Button variant='contained' block type='submit'>
              Recuperar
            </Button>
            <Link href={'/'}>
              <Typography variant='p' className='underline mt-4 text-center'>
                Volver
              </Typography>
            </Link>
          </form>
        </div>
      </div>
      <Typography variant='p' className='text-white text-center'>
        © Copyright 2023
      </Typography>
    </div>
  );
};
