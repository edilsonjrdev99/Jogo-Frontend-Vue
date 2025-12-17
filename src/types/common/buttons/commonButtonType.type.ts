export type CommonButtonTypes = 'submit' | 'button';
export type CommonButtonSizes = 'x-sm' | 'sm' | 'md' | 'lg';

export interface CommonButtonTypePropsTypes {
  /**
   * Texto do botão
   * @var string
   */
  text?: string;

  /**
   * Texto do botão enquanto ele está bloqueado esperando a ação carregar
   * @var string
   */
  textLoading?: string;

  /**
   * Tipo de botão ('submit' | 'button')
   * @var CommonButtonTypes
   */
  type?: CommonButtonTypes;

  /**
   * Tamanho do botão ('sm' | 'md')
   * @var CommonButtonSizes
   */
  size?: CommonButtonSizes;
}