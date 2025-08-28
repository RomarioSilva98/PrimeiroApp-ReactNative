import { View, Text, ViewProps } from "react-native"
import { styles } from "./styles"

import { Input } from "../input"

interface FormField {
  placeholder: string
  secureTextEntry?: boolean
  onChangeText?: (text: string) => void
}

interface FormProps extends ViewProps {
  title: string
  fields: FormField[]
  submitButton: React.ReactNode
  footer?: React.ReactNode
}

export function Form({
  title,
  fields,
  submitButton,
  footer,
  style,
  ...rest
}: FormProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.form}>
        {fields.map((field, index) => (
          <Input
            key={index}
            placeholder={field.placeholder}
            secureTextEntry={field.secureTextEntry}
            onChangeText={field.onChangeText}
          />
        ))}

        {submitButton}
      </View>

      {footer && (
        <View style={styles.footer}>
          {footer}
        </View>
      )}
    </View>
  )
}