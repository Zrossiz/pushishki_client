import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({ placeholder, value, onChange, type, defaultValue }: InputProps) => {
    const getInputNumbersValue = (input: HTMLInputElement) => {
        return input.value.replace(/\D/g, "");
    }

    const onPhoneInput = (e: any) => {
        onChange(e.target.value);
        let input = e.target;
        let inputNumbersValue = getInputNumbersValue(input);
        let formattedInputValue = "";
        let selectionStart = input.selectionStart

        if (!inputNumbersValue) {
            return input.value = "";
        };

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        };

        if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == '9') {
                inputNumbersValue = "7" + inputNumbersValue;
            };

            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = firstSymbols + " ";

            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            };

            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
            };

            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
            };

            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
            };
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        };
        input.value = formattedInputValue;
    };

    const onPhoneKeyDown = (e: any) => {
        let input = e.target;
        if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
            input.value = "";
        };
    };

    const onPhonePaste = (e: any) => {
        let pasted = e.clipboardData || window.Clipboard;
        let input = e.target;
        let inputNumbersValue = getInputNumbersValue(input);

        if (pasted) {
            let pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }

    return (
        <>
            {
                type === 'text' ? 
                    <input 
                        className={styles.input} 
                        value={value} 
                        type="text" 
                        placeholder={placeholder} 
                        onChange={(e) => onChange(e.target.value)}
                        defaultValue={defaultValue}
                    /> :
                    <input 
                        id='phoneInput' 
                        type="tel" 
                        required 
                        className={styles.input}
                        placeholder='Телефон' 
                        maxLength={18} 
                        onChange={(e) => onPhoneInput(e)}
                        onKeyDown={(e) => onPhoneKeyDown(e)}
                        onPaste={(e) => onPhonePaste(e)}
                    />
            }
        </>
    )
}