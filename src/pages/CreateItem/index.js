import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Main from '../../containers/Main';
import Form from '../../containers/Form';
import SubmitButton from '../../components/Submit';
import FormLabel from '../../components/Label';
import InputForm from '../../components/Input';

import { create } from '../../store/ducks/data';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';

const CreateItem = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = async ({ name, price, weight }) => {
    setError(false);
    setSuccess(false);
    setLoading(true);

    const payload = {
      name,
      "price": Number(price.replace(',', '.')),
      "weight": Number(weight.replace(',', '.')),
    };

    try {
      dispatch(create(payload));
      setSuccess(true);
    } catch(err){
      setError(true);
      throw new Error('Failed to create data', err);
    } finally {
      setLoading(false);
    }
  };

    useDidUpdateEffect(() => {
      const timer = setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 3000);
     return () => clearTimeout(timer);
    }, [isSuccess, isError])

    if(isError) return <Main><h1>Erro</h1></Main>
    if(isSuccess) return <Main><h1>Criado</h1></Main>

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Cadastrar</FormLabel>
        <InputForm 
          name="name" 
          id="formName" 
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <InputForm 
          name="price"
          id="formPrice"
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <InputForm 
          name="weight"
          id="formWeight"
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <SubmitButton type="submit" isLoading={isLoading}>Cadastrar</SubmitButton>
      </Form>
    </Main>
  );
};

export default CreateItem;