import React from 'react';
import { FieldContext } from './FieldContext';
import { useUniqueId } from '../utils/useUniqueId';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
