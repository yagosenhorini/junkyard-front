import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Main from '../../containers/Main';
import Form from '../../containers/Form';
import SubmitButton from '../../components/Submit';
import FormLabel from '../../components/Label';
import InputForm from '../../components/Input';

import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import { update, startProduct } from '../../store/ducks/data';

import { convertToNumber } from '../../helpers/sanitizeNumber';

const UpdateItem = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(startProduct(id));
    })();
  }, [dispatch, id]);

  const { data: {name, price, weight} } = useSelector((state) => state.data);

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
      "price": convertToNumber(price),
      "weight": convertToNumber(weight),
    };

    try {
      dispatch(update(id, payload));
      setSuccess(true);
    } catch(err){
      setError(true);
      throw new Error('Failed to update data', err);
    } finally {
      setLoading(false);
    }
  };

    useDidUpdateEffect(() => {
      const timer = setTimeout(() => {
        setError(false);
        setSuccess(false);
        dispatch(startProduct(id))
      }, 3000);
     return () => clearTimeout(timer);
    }, [isSuccess, isError, dispatch, id])

  return(
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Material: {name}</FormLabel>
        <InputForm 
          name="name" 
          id="formName" 
          defaultValue={name}
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <InputForm 
          name="price"
          id="formPrice"
          defaultValue={price}
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <InputForm 
          name="weight"
          id="formWeight"
          defaultValue={weight}
          disabled={isLoading}
          errors={errors}
          ref={register}
        />
        <SubmitButton type="submit" isLoading={isLoading}>Atualizar</SubmitButton>
      </Form>
    </Main>
  );
};

export default UpdateItem;