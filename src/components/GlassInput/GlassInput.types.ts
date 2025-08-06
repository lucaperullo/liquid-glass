import { BaseGlassProps } from '../../types/common';

export interface GlassInputProps extends BaseGlassProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  type?: string;
  inputProps?: any;
  className?: string;
  [key: string]: any;
}