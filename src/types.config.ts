import { ObjectSchema } from 'yup';
import { FormikReimaginedErrors, FormikReimaginedValues } from './types';

/**
 * Formik configuration options.
 */
export interface FormikReimaginedConfig<
  Props,
  Values extends FormikReimaginedValues = FormikReimaginedValues
> {
  /**
   * A Yup Schema
   */
  validationSchema?:
    | ObjectSchema<Values>
    | { (props: Props): ObjectSchema<Values> };

  /**
   * Validation function. Must return an error object where that object keys map to corresponding value.
   */
  validate?: (values: Values, field?: string) => FormikReimaginedErrors;
}

/**
 * withFormik() configuration options.
 */
export interface WithFormikReimaginedConfig<
  Props,
  Values extends FormikReimaginedValues = FormikReimaginedValues
> extends FormikReimaginedConfig<Props, Values> {
  /**
   * Map props to the form values
   */
  mapPropsToValues?: (props: Props) => Values;
}
