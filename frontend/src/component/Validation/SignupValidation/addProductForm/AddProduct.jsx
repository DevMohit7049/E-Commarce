import * as Yup from 'yup';

export const addproductSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  price: Yup.number().required('Price is required').positive('Price must be a positive number'),
  productImg: Yup.string().url('Product image must be a valid URL').required('Product image is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
});

export default addproductSchema;
