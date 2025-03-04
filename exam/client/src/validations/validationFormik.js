
import * as Yup from 'yup';

export const AddProductSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(5, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),

    price: Yup.string()
        .min(0, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imageUrl: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),

});