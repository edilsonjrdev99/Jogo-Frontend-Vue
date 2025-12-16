export interface CommonButtonTypePropsTypes {
  /**
   * Texto do botão
   * @var string
   */
  text?: string;

  /**
   * Tipo de botão ('submit' | 'button')
   * @var CommonButtonTypes
   */
  type?: CommonButtonTypes;
}

export type CommonButtonTypes = 'submit' | 'button';