"use client"
import {
    FC,
    FocusEvent,
    FocusEventHandler,
    HTMLInputTypeAttribute,
    ReactNode,

    useMemo,
    SVGProps,
    useState,
    DetailedHTMLProps,
    InputHTMLAttributes,
  } from 'react'
  
  import { Control, FieldValues, useController } from 'react-hook-form'
  
  export type InputType = HTMLInputTypeAttribute
  
  type InputSize = 'sm' | 'md' | 'lg'
  
  interface Props<T extends FieldValues> {
    props?:  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

    iconStart?: FC<SVGProps<SVGSVGElement>> | undefined
    iconEnd?: FC<SVGProps<SVGSVGElement>> | undefined
    placeholder?: string | undefined
    control: Control<T>
    helperText?: string
    defaultValue?: any
    disabled?: boolean
    required?: boolean
    addon?: ReactNode
    inputId?: string
    type?: InputType
    size?: InputSize
    value?: string
    errorClassname?: string
    helperTextClassname?: string
    name: any
    className?: string | undefined
    widthMax?: boolean
  }
  
  export const Input = function <T extends FieldValues>({
    helperTextClassname,
    defaultValue = '',
    name: nameInput,
    errorClassname,
    type = 'text',
    placeholder,
    helperText,
    iconStart,
    className,
    disabled,
    required,
    widthMax,
    control,
    iconEnd,
    inputId,
    addon,
    props,
    size,
  }: Props<T>): JSX.Element {
    const {
      field: { onChange, onBlur, value, name },
      fieldState: { error },
    } = useController({
      rules: {
        required,
        ...(type === 'number' && { pattern: new RegExp(/^[0-9]$/) }),
      },
      name: nameInput,
      defaultValue,
      control,
    })
    const [hasToMapValue, setHasToMapValue] = useState(type === 'date')
  
    const messageHandler = useMemo(() => {
      if (error?.message) {
        if (helperText)
          return (
            <p className={helperTextClassname}>{helperText}</p>
          )
  
        return (
          <p className={errorClassname}>{error.message}</p>
        )
      }
      return null
    }, [error])
  
    /**
     * @important Do not change function format to arrow functions
     */
    const handleOnFocus = function onFocus(
      //@ts-expect-error second argument is not typed
      e: FocusEventHandler<HTMLInputElement, Element>
    ) {
      if (type === 'date') {
        e.currentTarget.value =
          e.currentTarget.value.indexOf('/') === 2
            ? e.currentTarget.value.split('/').reverse().join('-')
            : e.currentTarget.value
        e.currentTarget.type = 'date'
        setHasToMapValue(false)
      }
    }
  
    /**
     * @important Do not change function format to arrow functions
     */
    const handleOnBlur = function onBlurInput(
      e: FocusEvent<HTMLInputElement, Element>
    ) {
      if (type === 'date' && e.target.value === '') {
        e.currentTarget.type = 'text'
      }
  
      return onBlur()
    }
  
    const mapValue = function mapValue(value: any) {
      let newValue = value
      if (typeof value !== 'undefined') {
        if (type === 'date' && hasToMapValue) {
          newValue = value.split('-').reverse().join('/')
        } else newValue = value
      } else newValue = defaultValue
  
      return newValue
    }
  
    return (
      <div className={`${widthMax ? 'w-max' : 'w-full'} h-min`}>
        <input
          value={mapValue(value)}
          placeholder={placeholder}
          disabled={disabled}
        //   rightIcon={iconEnd}
          autoComplete="off"
        //   icon={iconStart}
        //   sizing={size}
        //   addon={addon}
          id={inputId}
          type={type === 'date' ? 'text' : type}
          name={name}
          color={error ? 'failure' : 'gray'}
          className={className}
          onFocus={handleOnFocus}
          onChange={onChange}
          onBlur={handleOnBlur}
          {...props}
        />
        {messageHandler}
      </div>
    )
  }