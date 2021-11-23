import {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: number[]
  onChangeOption?: (option: number) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options, className,
    onChange, onChangeOption,
    ...restProps
  }) => {

  const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
    <option key={i} value={o} className={s.option}>
      {o}
    </option>
  )) : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(+e.currentTarget.value)
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select
      onChange={onChangeCallback}
      className={finalSelectClassName}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
};