import { FC } from 'react';
import { IOptions } from '../../../interfaces/interface';
import styles from './Select.module.scss';

interface ISelectProps {
    options: IOptions[],
    defaultValue: string,
    value: string,
    onChange: (e: string, sort?: string) => void
}

const Select: FC<ISelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <div className={styles.order}>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;